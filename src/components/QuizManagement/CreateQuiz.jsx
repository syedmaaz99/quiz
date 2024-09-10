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

const CreateQuiz = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="container h-full w-full space-y-4">
        {/* First row: 2 columns with width 6 each */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 w-full flex flex-row">
            <div>
              <h1 className="font-bold text-[32px]"> Dermatology</h1>
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
        <div className="w-full flex justify-end px-3">
          <CustomButton
            onClick={() => navigate("/add-scenario-quiz")}
            variant="none"
            text={"Add Scenario quiz"}
            startIcon={<img src={addIcon} />}
          />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
          <div className=" ">
            {" "}
            <QuizInput placeholder={"Quiz Name"} />{" "}
          </div>
          <div className=" ">
            <QuizInput placeholder={"Example, black skin, skin cancer, etc"} />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <QuizInput placeholder={"Type Question Here...?"} basic={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {" "}
            <QuizInput placeholder={"Type option here"} basic={false} />{" "}
          </div>
          <div>
            {" "}
            <QuizInput placeholder={"Type option here"} basic={false} />{" "}
          </div>
          <div>
            {" "}
            <QuizInput placeholder={"Type option here"} basic={false} />{" "}
          </div>
          <div>
            {" "}
            <QuizInput placeholder={"Type option here"} basic={false} />{" "}
          </div>
          <div>
            {" "}
            <QuizInput placeholder={"Type option here"} basic={false} />{" "}
          </div>
        </div>
        <h1 className="font-bold text-[32px]"> Related Details</h1>
        <div className="grid grid-cols-1  md:grid-cols-3">
          <div className="grid grid-cols-1 gap-5">
            {" "}
            <QuizInput placeholder={"Related Links"} />{" "}
            <CustomButton
              variant="none"
              text={"add more"}
              startIcon={<img src={addIcon} />}
            />
          </div>
          <div className="grid grid-cols-1 gap-5">
            {" "}
            <QuizInput placeholder={"Related Media Links"} />
            {/* <QuizInput placeholder={"Related Media Links"} /> */}
            <CustomButton
              variant="none"
              text={"add more"}
              startIcon={<img src={addIcon} />}
            />
          </div>

          <div className="grid grid-cols-1 gap-5">
            {" "}
            <QuizInput placeholder={"Related books"} />
            <CustomButton
              variant="none"
              text={"add more"}
              startIcon={<img src={addIcon} />}
            />
          </div>
        </div>

        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full h-[252px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description..."
        ></textarea>
        <div className="flex flex-row justify-end space-x-2">
          <button className="min-w-[200px] rounded-lg py-5 bg-[#D6D6D6] text-black ">
            {" "}
            cancel{" "}
          </button>
          {/* <button className="min-w-[200px] rounded-lg py-5 bg-[#8EEC97] text-white">
            {" "}
            save{" "}
          </button> */}
          {/* <button className="min-w-[200px] rounded-lg py-5 bg-[#3366FF] text-white">
            {" "}
            add new{" "}
          </button> */}
          <button
            onClick={() => navigate("/dashboard")}
            className="min-w-[200px] rounded-lg py-5 bg-[#3366FF] text-white"
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CreateQuiz;
