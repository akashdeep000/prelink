# 🖇️PreLink

🔗[prelink-demo.vercel.app](https://prelink-demo.vercel.app)

A tool website build with [`NextJs`](https://nextjs.org) where you just put `url` of any site and it will show you `Link Preview` of this site on social media sites.
And also all `Metadata` by scraping.

## ✨ Features

- **Link Preview**
  - Our Demo
  - Facebook
  - Twitter
- **Extract Metadata**
  - Basic
  - OpenGraph
  - Twitter Card

## 👨‍💻 Tech Used

- **NextJs**
- **Tailwindcss**

##  🚀 PreLink API

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

## ▶️ Start Dev Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Start Production Server

First, run the production server:

```bash
npm run build && npm start
# or
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
