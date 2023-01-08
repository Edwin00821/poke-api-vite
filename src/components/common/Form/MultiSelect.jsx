import React from "react";
import chroma from "chroma-js";

import Select from "react-select";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    // console.log("data", data);
    // console.log("isDisabled", isDisabled);
    // console.log("isFocused", isFocused);
    // console.log("isSelected", isSelected);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export default ({ options, name, value, onChange, errors }) => {
  return (
    <>
      <Select
        inputRef={name}
        closeMenuOnSelect={false}
        defaultValue={[options[0], options[1]]}
        isMulti
        options={options}
        value={value}
        onChange={onChange}
        styles={colourStyles}
      />
      <p className="text-xs italic text-red-500 first-letter:uppercase">
        {errors?.message}
      </p>
    </>
  );
};
