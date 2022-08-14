import { useRef, useState, useEffect } from "react";
export default function WhatsApp({ props }) {
  const title = props?.ogTitle || props?.twitterTitle || props?.title;

  const description =
    props?.ogDescription || props?.twitterDescription || props?.description;

  return (
    <>
      <div className="w-full mt-2 rounded-xl p-1 bg-[rgb(230,253,222)] shadow-[0_0_.6rem_rgba(0,25,49,0.1)]">
        <div className="w-full bg-[rgb(216,244,205)] rounded-lg">
          {props?.ogImage ? (
            <img src={props.ogImage} className="rounded-t-lg aspect-video object-cover bg-white" />
          ) : null}
          <div className="p-2">
            {title ? (
              <p className="font-bold text-sm text-gray-800 line-clamp-2">
                {title}
              </p>
            ) : null}
            {description ? (
              <p className="text-gray-600 line-clamp-1 text-xs">
                {description}
              </p>
            ) : null}
            {props?.domain ? (
              <div className="lowercase text-xs text-[rgb(158,158,158)]">
                {props.domain}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
