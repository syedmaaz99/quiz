import React from "react";

const CustomButton = ({
  startIcon,
  endIcon,
  text,
  onClick,
  variant = "filled",
  color = "blue",
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2 px-2 py-1 rounded transition duration-300";

  const colorClasses =
    color === "blue"
      ? variant === "filled"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "border-[1.5px] border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      : variant === "filled"
      ? "bg-black text-white hover:bg-gray-800"
      : `border-[1.5px] border-black text-black ${
          !startIcon && !endIcon ? "hover:bg-black hover:text-white" : ""
        }`;

  return (
    <>
      {variant == "none" ? (
        <span className="flex flex=row gap-1 text-blue-600" onClick={onClick}>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          <span className="underline">{text}</span>
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </span>
      ) : (
        <button onClick={onClick} className={`${baseClasses} ${colorClasses}`}>
          {startIcon && <span className="mr-2">{startIcon}</span>}
          <span>{text}</span>
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
      )}
    </>
  );
};

export default CustomButton;
