## PreLink API for fetching metadata

Here is the simple way to call the api described bellow:

Just send a GET request on this like this -

```js
https://prelink-demo.vercel.app/api?url=:url
```

### Javascript example

```js
const apiUrl = "https://prelink-demo.vercel.app/api";
const url = "https://example.com";

const result = await fetch(`${apiUrl}?url=${url}`).json;
```
