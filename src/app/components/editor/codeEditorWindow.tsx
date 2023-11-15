import React, { useState } from "react";

import Editor, { loader } from "@monaco-editor/react";
import Loader from "../ui/loader";

// loader.init().then((monaco) => {
//   monaco.editor.defineTheme("myTheme", {
//     base: "vs-dark",
//     inherit: true,
//     rules: [],
//     colors: {
//       "editor.background": "#29374a",
//       "editor.font": "#ffffff",
//     },
//   });
// });

const CodeEditorWindow = ({ onChange, language, code }: any) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: any) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <Editor
      height={`100%`}
      width={`100%`}
      language={language || "javascript"}
      value={value}
      theme={"myTheme"}
      defaultValue="// Write your answer in here..."
      onChange={handleEditorChange}
      loading={<Loader />}
    />
  );
};
export default CodeEditorWindow;
