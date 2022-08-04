## PreLink API for fetching metadata

Here is the simple way to call the api described bellow:

https://prelink.vercel.app/api?url=:url

## Javascript example

```js
const apiPmUrl = "https://prelink.vercel.app/api";
const url = "https://example.com";

const result = await fetch(`${apiUrl}?url=${url}`).json;
```
