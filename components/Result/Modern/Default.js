import { useRef, useState, useEffect } from "react";
export default function Default({ props }) {
  const title = props?.ogTitle || props?.twitterTitle || props?.title;

  const description =
    props?.ogDescription || props?.twitterDescription || props?.description;

  const [favicon, setFavicon] = useState();
  const errorFavicon = "/errorFavicon.ico";
  useEffect(() => {
    setFavicon(
      props?.ogLogo ||
        props?.favicon ||
        `${props.protocol}//${
          props?.redirectedDomain || props?.domain
        }/favicon.ico`
    );
  }, [props?.favicon]);
  return (
    <>
      <div className="w-full mt-2 bg-white grid place-items-center rounded border shadow-[0_0_.4rem_rgba(0,25,49,0.1)] text-sm">
        {props?.ogImage ? (
          <img
            src={props.ogImage}
            className="rounded-t w-[calc(100%_-_.5rem)] mx-1 mt-1 aspect-video object-cover"
          />
        ) : null}

        <div
          className={`w-[calc(100%_-_.5rem)] rounded-b ${
            !props?.ogImage ? "rounded-t" : ""
          } m-1 p-1.5 bg-slate-100 border`}
        >
          {title ? (
            <p className="font-bold text-slate-800 line-clamp-1">{title}</p>
          ) : null}
          {description ? (
            <p className="text-slate-800 line-clamp-1">{description}</p>
          ) : null}
          {props?.domain ? (
            <div className="w-fit p-1 mt-1 pr-2 rounded-full font-bold text-slate-800 bg-gray-200">
              <img
                className="inline rounded-full p-1.5 w-6 h-6"
                src={favicon}
                onError={() => {
                  if (favicon !== errorFavicon) setFavicon(errorFavicon);
                }}
              />
              {props.domain}
            </div>
          ) : null}
        </div>
      </div>
      <br />
    </>
  );
}
