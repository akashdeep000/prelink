import axios from "axios";
import cheerio from "cheerio";
import ogFields from "./ogFields";
import isValidUrl from "./isValidUrl";

export default async (urlInput) => {
  const url = `${
    urlInput.startsWith("http://") || urlInput.startsWith("https://")
      ? ""
      : "http://"
  }${urlInput}`;
  const urlJson = new URL(url);
  try {
    const res = await axios.get(url);
    const html = res.data;
    //console.log(html);
    const $ = cheerio.load(html);

    const ogMetadata = {};

    //extract title
    const title = $("title").text();
    ogMetadata["title"] = title;

    //extract favicon
    $("link").each((index, link) => {
      //console.log(link.attribs);
      if (link.attribs.rel == "icon" || link.attribs.rel == "shortcut icon") {
        //this is hacky code whene debuging google map url
        let favicon = link.attribs.href.startsWith("//")
          ? link.attribs.href.substring(2)
          : link.attribs.href;
        if (!isValidUrl(favicon)) {
          favicon = `${urlJson.origin}${favicon}`;
        }
        ogMetadata["favicon"] = favicon;
      }
    });
    /*
    if (!ogMetadata.favicon) {
      ogMetadata["favicon"] = `${urlJson.origin}/favicon.ico`;
    }
    */
    //set domain name
    ogMetadata["domain"] = urlJson.hostname;

    //get meta tags
    $("meta").each((index, meta) => {
      if (!meta.attribs || (!meta.attribs.property && !meta.attribs.name))
        return;
      const property = meta.attribs.property || meta.attribs.name;
      const content = meta.attribs.content || meta.attribs.value;

      //find ogFields
      ogFields.forEach((e) => {
        if (property.toLowerCase() === e.property.toLowerCase()) {
          if (e.multiple) {
            ogMetadata[e.fieldName] = [content];
          } else {
            ogMetadata[e.fieldName] = content;
          }
        }
      });
    });

    return ogMetadata;
  } catch (e) {
    throw new Error(e);
  }
};
