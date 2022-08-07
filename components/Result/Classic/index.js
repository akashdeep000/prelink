import SingleRow from "./SingleRow";
import ogFields from "util/ogFields";
import { JsonArray, download } from "json-to-csv-in-browser";
import { uid } from "uid";
export default function Classic({ props }) {
  const data = [];
  const extraFields = [
    {
      fieldName: "domain",
      property: "domain",
    },
    {
      fieldName: "favicon",
      property: "favicon",
    },
    {
      fieldName: "redirectedDomain",
      property: "redirected domain",
    },
    {
      fieldName: "title",
      property: "title",
    },
]
  extraFields.forEach((e) => {
    if (!props[e.fieldName]) {
      return;
    }
   // console.log("in");
    
    data.push({
      id: uid(),
      fieldName: e.property,
      value: props[e.fieldName],
      multiple: false,
    });
  });
  ogFields.forEach((e) => {
    const fieldName = e.fieldName;
    if (!props[fieldName]) {
      return;
    }
    data.push({
      id: uid(),
      fieldName: e.property,
      value: props[fieldName],
      multiple: e.multiple,
    });
  });
  console.log(data);
  const handleCsvDownload = async () => {
    const csvData = data.map(o => {
      let obj = Object.assign({}, o);
      delete obj.id;
      delete obj.multiple
      return obj;
    });

    let jsonArray = new JsonArray(csvData);
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
                <SingleRow key={e.id} props={e}/>
                {data?.length !== i + 1 ? <hr /> : null}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
