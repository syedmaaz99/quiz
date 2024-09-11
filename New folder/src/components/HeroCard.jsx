import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import heroImg1 from "../assets/hero-img-1.png";
import CustomButton from "./CustomButton";

import demoIcon from "../assets/icons/demo-icon.svg";
const HeroCard = () => {
  return (
    <div className=" container w-[380px] h-[337px] bg-white m-5 rounded-lg">
      <div className="row h-full">
        <div className="col-12">
          <img src={heroImg1} alt="" width="100%" height={110} />
        </div>
        <div className="col-12 h-40 p-5">
          <div>
            <h5 className="font-bold">Peadiatrics</h5>
            <p>
              Over 4,500 Single Best Answer questions. Also includes the
              innovative Knowledge Tutor which tests you on thousands of
              high-yield facts
            </p>
          </div>
        </div>
        <div className="col-12 p-5">
          <div className=" flex justify-between">
            <CustomButton
              variant="outlined"
              color="black"
              endIcon={<img src={demoIcon} width={17} height={17} />}
              text="TAKE A DEMO"
              onClick={() => console.log("Previous button clicked")}
            />
            <CustomButton
              variant="filled"
              color="blue"
              text="Sign up"
              onClick={() => console.log("Next button clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
