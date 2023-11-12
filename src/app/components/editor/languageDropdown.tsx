import React, { useEffect, useState } from "react";
import Select from "react-select";
import { languageOptions } from "./utils/languageOptions";

const LanguagesDropdown = ({ onSelectChange }: any) => {
  // fix for stupid next.js console error message
  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      id={Date.now().toString()}
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  ) : null;
};

export default LanguagesDropdown;
