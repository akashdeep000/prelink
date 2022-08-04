import isValidUrl from "util/isValidUrl";
import extractMetadata from "util/extractMetadata";

export default async function handler(req, res) {
  const { url } = req.query;

  if (url) {
    if (isValidUrl(url)) {
      try {
        const data = await extractMetadata(url);
        res.status(200).json(data);
        return;
      } catch (e) {
        console.log(e)
        res.status(400).json({ massage: "something went wrong!"});
        return;
      }
    }

    res.status(400).json({ massage: "invalid url" });
    return;
  }

  res.status(400).json({ massage: "no url" });
  return;
}
