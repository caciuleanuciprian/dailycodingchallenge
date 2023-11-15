"use client";

import { useState } from "react";
import CodeEditorWindow from "./codeEditorWindow";
import { languageOptions } from "./utils/languageOptions";
import OutputWindow from "./outputWindow";
import OutputDetails from "./outputDetails";
import LanguagesDropdown from "./languageDropdown";
import axios from "axios";
import Prompt from "./prompt";

const EditorContainer = () => {
  const [code, setCode] = useState("testing");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectChange = (sl: any) => {
    setLanguage(sl);
  };

  const onChange = (action: any, data: any) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
    };
    const options = {
      method: "POST",
      params: { base64_encoded: "true", fields: "*" },
      url: process.env.NEXT_PUBLIC_JUDGE0_HOST,
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
      });
  };

  const checkStatus = async (token: any) => {
    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_JUDGE0_HOST + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        return;
      }
    } catch (err) {
      setProcessing(false);
    }
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 drop-shadow-xl">
      <div className="flex">
        <div className="flex w-[75%] h-[50vh]">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
          />
        </div>
        <div className="bg-[#29374a] flex w-[25%] flex-col">
          <div className="flex px-4 py-4 gap-2">
            <LanguagesDropdown
              id={Math.random()}
              onSelectChange={onSelectChange}
            />
            <button
              className=" text-white text-sm bg-gray-900 px-4 w-full hover:bg-gray-500"
              onClick={handleCompile}
              disabled={!code || processing}
            >
              {processing ? "Processing..." : "Run"}
            </button>
          </div>
          <div className="bg-[#29374a] flex h-full">
            <Prompt />
          </div>
        </div>
      </div>
      <div className="flex bg-[#29374a]">
        <OutputWindow processing={processing} outputDetails={outputDetails} />
        <OutputDetails outputDetails={outputDetails} />
      </div>
    </div>
  );
};

export default EditorContainer;
