import { useState } from "react";
import Default from "./Default";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

export default function Moderm({ props }) {
  const [activeBtn, setActiveBtn] = useState("default");

  return (
    <>
      <div className="w-full md:sticky md:top-20">
        <div className="w-fit">
          <div className="text-xl bg-clip-text bg-gradient-to-l to-indigo-500 from-purple-500 text-transparent font-sans font-bold">
            Link-Preview
          </div>
          <div className="bg-gradient-to-l from-purple-500 to-pink-500 h-1.5 w-auto"></div>
        </div>
        <div className="w-full h-11 mt-3 text-indigo-600 bg-indigo-100 p-1 overflow-auto whitespace-nowrap grid grid-flow-col gap-1 rounded">
          <button
            onClick={() => setActiveBtn("default")}
            className={`px-3 py-1.5 hover:bg-indigo-200 ${
              activeBtn === "default" ? "!bg-indigo-500 !text-white" : ""
            } rounded cursor-pointer`}
          >
            Demo
          </button>
          <button
            onClick={() => setActiveBtn("facebook")}
            className={`px-3 py-1.5 hover:bg-indigo-200 ${
              activeBtn === "facebook" ? "!bg-indigo-500 !text-white" : ""
            } rounded cursor-pointer`}
          >
            Facebook
          </button>
          <button
            onClick={() => setActiveBtn("twitter")}
            className={`px-3 py-1.5 hover:bg-indigo-200 ${
              activeBtn === "twitter" ? "!bg-indigo-500 !text-white" : ""
            } rounded cursor-pointer`}
          >
            Twitter
          </button>
        </div>
        {activeBtn === "facebook" ? (
          <Facebook props={props} />
        ) : activeBtn === "twitter" ? (
          <Twitter props={props} />
        ) : (
          <Default props={props} />
        )}
      </div>
    </>
  );
}
