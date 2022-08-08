## PreLink API for fetching metadata

Here is the simple way to call the api described bellow:

Just send a GET request on our API endpoint like this -

```js
https://prelink-demo.vercel.app/api?url=:url
```

### Javascript example

```js
const apiUrl = "https://prelink-demo.vercel.app/api";
const url = "https://example.com";

const result = await fetch(`${apiUrl}?url=${url}`).json;
console.log(result);
```

### Example Response

```json
{
  "domain": "findcoder.io",
  "redirectedDomain": "www.findcoder.io",
  "protocol": "https:",
  "title": "FindCoder | Welcome",
  "favicon": "https://www.findcoder.io/favicon-16x16.png",
  "description": "A central location to find coders. Collab or hire coders with no middleman. An open platform to hire coders based on skills and projects. Showcase your work! Participate in challenges and win exciting prizes and goodies. Improve your portfolio and get interview ready with real world knowledge.",
  "ogTitle": "FindCoder | Welcome",
  "ogDescription": "A central location to find coders. Collab or hire coders with no middleman. An open platform to hire coders based on skills and projects. Showcase your work! Participate in challenges and win exciting prizes and goodies. Improve your portfolio and get interview ready with real world knowledge.",
  "ogUrl": "https://findcoder.io/",
  "ogImage": ["https://findcoder.io/logos/fc_logo.png"],
  "ogType": "website",
  "ogSiteName": "FindCoder.io",
  "twitterCard": "summary_large_image",
  "twitterSite": "@FindCoder",
  "twitterCreator": "@FindCoder",
  "twitterDescription": "A central location to find coders. Collab or hire coders with no middleman. An open platform to hire coders based on skills and projects. Showcase your work! Participate in challenges and win exciting prizes and goodies. Improve your portfolio and get interview ready with real world knowledge.",
  "twitterTitle": "FindCoder | Welcome",
  "twitterImage": ["https://findcoder.io/logos/fc_logo.png"],
  "twitterImageSrc": ["https://findcoder.io/logos/fc_logo.png"],
  "keywords": [
    "FindCoder, coders, programmers, software devs, software developers, hire coders, hire coders online, hire coders all over the worldundefined"
  ],
  "author": "FindCoder"
}
```
