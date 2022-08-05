import { useState } from "react";
import SingleRow from "./SingleRow";
import ogFields from "util/ogFields";
import { JsonArray, download } from "json-to-csv-in-browser";

export default function Classic ({props}) {
  const data = [];
  const extraKeys = ["domain", "favicon", "title, keywords"];
  extraKeys.forEach((e) => {
    if (!props[e]) {
      return;
    }
    data.push({ key: e, value: props[e] });
  });
  ogFields.forEach((e) => {
    const fieldName = e.fieldName;
    if (!props[fieldName]) {
      return;
    }
    data.push({ key: e.property, value: props[fieldName], multiple: e.multiple});
  });

  const handleCsvDownload = async () => {
    let jsonArray = new JsonArray(data);
    let str = jsonArray.convertToCSVstring();
    download("my.csv", str);
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full grid grid-cols-[auto_1fr_auto]">
          <div className="w-fit">
            <div className="text-xl bg-clip-text bg-gradient-to-l to-indigo-500 from-purple-500 text-transparent font-sans font-bold">
              Metadata
            </div>
            <div className="bg-gradient-to-l from-purple-500 to-pink-500 h-1.5 w-auto"></div>
          </div>
          <div></div>
          <button
            className="w-fit px-2.5 py-1.5 bg-indigo-500 text-white rounded"
            onClick={handleCsvDownload}
          >
            Download as CSV
          </button>
        </div>
        <div className="mt-4 border">
          {data.map((e, i) => {
            console.log(e);
            return (
              <>
                <SingleRow props={e} />
                {data?.length !== i + 1 ? <hr /> : null}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
