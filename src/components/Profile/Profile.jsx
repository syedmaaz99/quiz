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

const Profile = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="container h-full w-full space-y-4 bg-transparent">
        {/* First row: 2 columns with width 6 each */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 w-full flex flex-row">
            <div>
              <h1 className="font-bold text-[32px]"> Profile</h1>
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
        <div className="mt-10" >
        <div className="bg-white  mt-20 w-full rounded-lg p-8">
        <CategoryCard />
        </div>
        </div>
       
      </div>
    </DefaultLayout>
  );
};

export default Profile;
