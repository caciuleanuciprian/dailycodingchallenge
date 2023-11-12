import React, { useState } from "react";

import Editor from "@monaco-editor/react";

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
      theme={"vs-dark"}
      defaultValue="// Write your answer in here..."
      onChange={handleEditorChange}
      loading={"//loader//"}
    />
  );
};
export default CodeEditorWindow;
