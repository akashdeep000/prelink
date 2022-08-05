import { useState } from "react";
export default function Facebook({ props }) {
  const title = props?.ogTitle || props?.twitterTitle || props?.title;

  const description = props?.ogDescription || props?.twitterDescription || props?.description

  return (
    <>
      <div className="w-full mt-2 grid place-items-center border border-gray-300 bg-white">
        {props?.ogImage ? (
          <img
            src={props.ogImage}
            className="w-full aspect-video object-cover"
          />
        ) : null}

        <div
          className={`w-full bg-gray-100 p-2 ${
            props?.ogImage ? "border-t" : ""
          } border-gray-300`}
        >
          {props?.domain ? (
            <div className="uppercase text-xs text-gray-600">
              {props.domain}
            </div>
          ) : null}
          {title ? (
            <p className="font-semibold text-sm text-500 text-gray-800 line-clamp-2">
              {title}
            </p>
          ) : null}
          {description ? (
            <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
          ) : null}
        </div>
      </div>
      <br />
    </>
  );
}
