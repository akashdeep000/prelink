import { useState } from "react";

export default function Twiter({ props }) {
  const title = props?.twitterTitle || props?.ogTitle || props?.title;

  const description = props?.twitterDescription || props?.ogDescription || props?.description

  const imageUrl = props?.twitterImage?.length
    ? props?.twitterImage[0]
    : props?.twitterImageSrc?.length
    ? props?.twitterImageSrc[0]
    : props?.ogImage
    ? props?.ogImage
    : undefined;

  const isFull = props?.twitterCard == "summary_large_image";

  return (
    <>
      {props?.twitterCard ? (
        <div
          className={`w-full mt-2 bg-white grid ${
            isFull ? "" : "grid-cols-[auto_1fr]"
          } place-items-center border border-gray-300 rounded-lg`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              className={`${
                isFull
                  ? "aspect-video rounded-t-lg"
                  : "aspect-square h-24 rounded-l-lg"
              } object-cover`}
            />
          ) : null}

          <div
            className={`w-full h-full bg-white p-2 border-gray-300 ${
              isFull ? "rounded-b-lg border-t" : "rounded-r-lg border-l"
            }`}
          >
            {props?.domain ? (
              <div className="lowercase text-xs text-gray-500 pb-1">
                {props.domain}
              </div>
            ) : null}
            {title ? (
              <p
                className={`font-semibold text-xs text-500 text-gray-900 ${
                  description ? "line-clamp-1" : "line-clamp-3"
                }`}
              >
                {title}
              </p>
            ) : null}
            {description ? (
              <p className="text-gray-700 text-xs line-clamp-2">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="text-center mt-5 text-slate-00">
          This website doesn&#39;t have a Twiter Card
        </p>
      )}
    </>
  );
}
