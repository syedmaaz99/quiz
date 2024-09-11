import React from "react";
import { FaCheck } from "react-icons/fa6";
import checkGrey from "../../assets/icons/check-grey.png";
import checkGreen from "../../assets/icons/check-green.png";
import ellipse from "../../assets/icons/ellipse.png";

import crossRed from "../../assets/icons/cross-red.png";
import crossRedsquare from "../../assets/icons/cross-red-square.png";
import crossGrey from "../../assets/icons/cross-grey.png";

import editDetail from "../../assets/icons/edit-detail.png";
import { useState } from "react";

const QuizInput = ({
  basic = true,
  placeholder,
  onChange,
  onExampleChange,
  onDelete,
  onSelect,
  onUnselect,

  correctOptions = !basic,
  showCancel = !basic,
  showAddExampleIcon = !basic,
  showEllipse = !basic,
}) => {
  const [showExplain, setShowExplain] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [deleteField, setDeleteField] = useState(false);
  return (
    <div className="m-2 my-0">
      <div className="flex flex-row items-end justify-between  bg-transparent">
     {!basic  &&  <div class="w-[70%] h-[45px] flex rounded-lg shadow-sm">
          {showExplain && (
            <input

              type="text"
              placeholder="Type information here"
              className="py-1 px-3 my-1 bg-transparent h-[34px]  border-[1px] border-solid border-blue-300  pe-11 block w-full outline-none rounded-md text-sm z-10"
            />
          )}
        </div>}
        {showAddExampleIcon && (
          <div className="flex flex-col justify-between h-[50px] relative top-[18px] left-[1px]     ">
            <>
              {!showExplain ? (
                <img
                  src={editDetail}
                  alt=""
                  className="w-[15px] h-[15px]"
                  onClick={() => setShowExplain(true)}
                />
              ) : (
                <img
                  src={crossRed}
                  alt=""
                  className="w-[15px] h-[15px]"
                  onClick={() => setShowExplain(false)}
                />
              )}
            </>
            <img src={crossRed} alt="" className="w-[20px] h-[20px] ml-auto" />
          </div>
        )}
      </div>

      <div>
        <div class="flex rounded-lg border-[1px] border-solid border-blue-300 h-[66px]">
          <span class="px-4 inline-flex items-center min-w-fit rounded-s-md ">
            <span class="flex">
              {showEllipse && <img src={ellipse} alt="" />}
            </span>
          </span>
          <input
            type="text"
            name="hs-input-with-add-on-url-radio"
            id="hs-input-with-add-on-url-radio"
            class="py-3 px-4 pe-11 bg-transparent block w-full   rounded-e-lg text-sm border-none outline-none"
            placeholder={placeholder}
          />
          {correctOptions && (
            <div className="flex flex-row justify-around items-center w-[200px] px-4">
              <>
                {correct === "false" ? (
                  <img
                    src={checkGrey}
                    alt=""
                    onClick={() => setCorrect("true")}
                  />
                ) : (
                  <img
                    src={checkGreen}
                    alt=""
                    onClick={() => setCorrect("true")}
                  />
                )}
              </>
              <>
                {correct === "true" ? (
                  <img
                    src={crossGrey}
                    alt=""
                    onClick={() => setCorrect("false")}
                  />
                ) : (
                  <img
                    src={crossRedsquare}
                    alt=""
                    onClick={() => setCorrect("false")}
                  />
                )}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInput;
