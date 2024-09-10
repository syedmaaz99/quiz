import React from "react";
import './CustomInput.css'
const CustomInput = ({ id, label, type = "text", value, onChange }) => {
  return (
    <div className="relative float-label-input">
      <input
        type={type}
        id={id}
        placeholder=" "
        value={value}
        onChange={onChange}
        className="block w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 appearance-none leading-normal focus:border-blue-400"
      />
      <label
        htmlFor={id}
        className="absolute top-3 left-1 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-white px-2"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
