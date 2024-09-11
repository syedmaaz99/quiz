import React from "react";
import IconContainer from "./IconContainer";

const StatsCard = ({ title, icon, iconBg, numValue }) => {
  return (
    <div className=" flex flex-col justify-between border-[1px] border-[#dddddd] h-[149px] w-full rounded-[8px] p-3">
      <div className="flex flex-row justify-between">
        <p className="p-2 text-[14px] leading-[21px] text-slate-500 font-semibold uppercase">
          {title}
        </p>
        <IconContainer icon={icon} bgColor={iconBg} />
      </div>
      <div>
        <h3 className="p-2 text-[32px] font-semibold">{numValue}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
