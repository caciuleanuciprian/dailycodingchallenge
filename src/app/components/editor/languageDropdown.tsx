"use client";

import React from "react";
import Select from "react-select";
import { languageOptions } from "./utils/languageOptions";
import dynamic from "next/dynamic";
import Loader from "../ui/loader";

const AsyncSelect = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <Loader />, // doing this approach mostly for practicing
});

const LanguagesDropdown = ({ onSelectChange, id }: any) => {
  return (
    <AsyncSelect
      placeholder={`Filter By Category`}
      options={languageOptions}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
