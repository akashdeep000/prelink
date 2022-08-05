import isValidUrl from "util/isValidUrl";

export default function SingleRow({ props }) {
  return (
    <div className="grid gap-4 grid-cols-[30%_auto_1fr] text-slate-800 text-md p-2">
      <div className="">{props.key}</div>
      <div className="">:</div>

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
                  <div className="line-clamp-4">{e}</div>
                  {i + 1 !== props.value.length ? ", " : null}
                </>
              )}
            </div>
          );
        })
      ) : (
        <>
          {isValidUrl(props?.value) ? (
            <a className="line-clamp-2 text-indigo-500" href={props.value}>
              {props.value}
            </a>
          ) : (
            <div className="line-clamp-4">{props.value}</div>
          )}
        </>
      )}
    </div>
  );
}
