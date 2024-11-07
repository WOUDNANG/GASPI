import React from "react";

function SelectTag({ options, metric, placeholder }) {
  return (
    <select
      name={metric}
      id={metric}
      placeholder={placeholder}
      className="w-full py-2 outline-none border-[1px] border-gray-400"
    >
      {options.map((option, index) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default SelectTag;
