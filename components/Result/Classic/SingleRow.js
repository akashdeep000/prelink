import isValidUrl from "util/isValidUrl";
import { useState } from "react";
export default function SingleRow({ props }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid gap-4 grid-cols-[30%_auto_1fr] text-slate-800 text-md p-2">
      <div className="">{props.fieldName}</div>
      <div className="">:</div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {props.multiple ? (
          props.value.map((e, i) => {
            return (
              <div>
                {isValidUrl(e) ? (
                  <>
                    <a className="line-clamp-2 text-indigo-500" href={e}>
                      {e}
                    </a>
                    {i + 1 !== props.value.length ? <hr /> : null}
                  </>
                ) : (
                  <>
                    <div className={`${isOpen ? "" : "line-clamp-2"}`}>{e}</div>
                    {i + 1 !== props.value.length ? ", " : null}
                  </>
                )}
              </div>
            );
          })
        ) : (
          <>
            {isValidUrl(props?.value) ? (
              <a className="line-clamp-2 text-indigo-500" href={"http://" + props.value}>
                {props.value}
              </a>
            ) : (
              <div className={`${isOpen ? "" : "line-clamp-3"}`}>
                {props.value}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
