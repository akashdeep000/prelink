import { useState, useRef, useEffect } from "react";
import axios from "axios";
import isValidUrl from "util/isValidUrl";
import Result from "./Result";
import { useRouter } from "next/router";

export default function ToolBox({ props }) {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [isInputError, setIsInputError] = useState(false);
  const [isShowErrorText, setIsShowErrorText] = useState(false);

  const [result, setResult] = useState();
  const inputRef = useRef();
  const [reqState, setReqState] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setResult();
    const queryUrl = router.query?.url;
    if (isValidUrl(queryUrl)) {
      handleReq(queryUrl);
    }
    try {
      navigator.clipboard.readText().then((clipText) => {
        //const queryUrl = router.query?.url;
        if (!isValidUrl(clipText)) setUrl(queryUrl);
      });
    } catch (e) {
      setUrl(queryUrl)
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    const queryUrl = router.query?.url;
    try {
      navigator.clipboard.readText().then((clipText) => {
        //const queryUrl = router.query?.url;
        if (isValidUrl(clipText)) setUrl(clipText);
      });
    } catch (e) {
      return;
    }
  }, []);

  const handleUrlChange = async (e) => {
    setUrl(e.target.value);
    setIsShowErrorText(false);
    if (!isValidUrl(e.target.value)) {
      setIsInputError(true);
    } else {
      setIsInputError(false);
    }
  };

  const handleKeyup = async (e) => {
    if (e.key == "Enter") {
      console.log("enter");
      inputRef.current.blur();
      if (!isValidUrl(url)) {
        setIsInputError(true);
        setIsShowErrorText(true);
      } else {
        setIsInputError(false);
        handleButtonClick();
      }
    }
  };

  const handleReq = async (url) => {
    const uri = `/?url=${url}`;
    if (reqState === "wait") {
      return;
    }
    if (!isValidUrl(url)) {
      setIsShowErrorText(true);
      setReqState("");
      setIsInputError(true);
      return;
    }
    try {
      //console.log("req");
      setIsShowErrorText(false);
      setReqState("wait");
      const reUrl = `/api?url=${url}`;
      const res = await axios.get(reUrl);
      //console.log(res.data);
      setResult(res.data);
      setReqState("success");
    } catch (e) {
      setIsShowErrorText(true);
      setReqState("failed");
      console.log(e.response?.data?.massage || e);
    }
  };

  const handleButtonClick = async () => {
    if (router.query?.url != url) {
      const uri = `/?url=${url}`;
      router.push(uri, undefined, { shallow: true });
    }
    handleReq(url);
  };

  return (
    <>
      <div className="grid place-items-center w-full">
        <div className="w-[85%] md:w-[75%] lg-w-[70%]  mt-3 relative">
          <input
            ref={inputRef}
            onChange={handleUrlChange}
            onKeyDown={handleKeyup}
            value={url}
            type="text"
            className={`p-4 bg-white !pr-24 focus:border-2 focus:p-3.5 focus:border-indigo-400 focus:outline-0 rounded bg-white text-indigo-500 font-bold block w-full shadow-[0_0_1rem_rgba(0,25,49,0.1)] ${
              isInputError ? "border-2 p-3.5 border-rose-300" : ""
            }`}
            placeholder="www.example.com"
          />
          <button
            onClick={handleButtonClick}
            className={`absolute right-1.5 top-1.5 bg-gradient-to-r ${
              reqState === "wait"
                ? "to-indigo-400 from-purple-400"
                : "to-indigo-500 from-purple-500"
            } text-white px-3 py-2.5 font-bold rounded`}
            disabled={reqState === "wait"}
          >
            Submit
          </button>
          <p
            className={`text-red-400 text-sm p-1 ${
              isShowErrorText ? "" : "invisible"
            }`}
          >
            {reqState == "failed"
              ? "Some error happened. Please try again."
              : "Not a valid url!"}
          </p>
        </div>

        {reqState === "wait" ? (
          <button
            type="button"
            className="bg-indigo-500 text-white p-2 rounded"
            disabled
          >
            <svg
              className="inline mr-2 w-6 h-6 text-indigo-200 animate-spin fill-white"
              viewBox="0 0 100 101"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Processing...
          </button>
        ) : null}
        {reqState === "success" && result ? <Result props={result} /> : null}
      </div>
    </>
  );
}
