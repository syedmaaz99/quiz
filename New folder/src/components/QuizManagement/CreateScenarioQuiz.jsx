import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import CustomButton from "../CustomButton";
import CustomTable from "../CustomTable";
import adminImg from "../../assets/admin-img.png";
import polygonBlue from "../../assets/polygon-blue.png";
import addIcon from "../../assets/add-square.png";

import QuizInput from "../QuizInput/QuizInput";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../cards/CategoryCard";

const CreateScenarioQuiz = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="container h-full w-full space-y-4 bg-transparent">
        {/* First row: 2 columns with width 6 each */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 w-full flex flex-row">
            <div>
              <h1 className="font-bold text-[32px]"> Scenario Quiz</h1>
              <p className=" text-blue-700 -mt-1 text-[14px] ">
                Create Quizzes Here
              </p>
            </div>
          </div>

          <div className="col-span-1 w-full flex justify-end h-[40px]">
            <CustomButton
              text={"Hi Admin"}
              variant="outlined"
              color="black"
              startIcon={<img src={adminImg} width={30} height={30} />}
              endIcon={<img src={polygonBlue} />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <QuizInput placeholder={"Type Question Here...?"} basic={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>{" "}
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
        </div>
        <div className="flex justify-end px-3">
          <CustomButton
            variant="none"
            text={"Add more "}
            startIcon={<img src={addIcon} />}
          />
        </div>
        <div className="grid grid-cols-1">
          <div>
            <QuizInput placeholder={"Type Question Here...?"} basic={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <QuizInput placeholder={"Type Question Here...?"} basic={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10">
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
        </div>
        <div className="px-2">
          <CustomButton
            variant="none"
            text={"Add more "}
            startIcon={<img src={addIcon} />}
          />
        </div>
        <div className="flex flex-row justify-end space-x-2">
          <button className="min-w-[200px] rounded-lg py-5 bg-[#D6D6D6] text-black ">
            {" "}
            cancel{" "}
          </button>
          <button className="min-w-[200px] rounded-lg py-5 bg-[#8EEC97] text-white">
            {" "}
            save{" "}
          </button>
          {/* <button className="min-w-[200px] rounded-lg py-5 bg-[#3366FF] text-white">
            {" "}
            add new{" "}
          </button> */}
          <button
            onClick={() => navigate("/dashboard")}
            className="min-w-[200px] rounded-lg py-5 bg-[#3366FF] text-white"
          >
            {" "}
            add new{" "}
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateScenarioQuiz;
