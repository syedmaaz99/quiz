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
        <div className="mt-5">
          <div className="  mt-10 w-full rounded-lg">
            <div className="flex justify-between items-center w-full h-[50px] ">
              <div className="flex gap-2 -mb-[18px]">
                <button className="bg-white p-3 px-10 pb-15 rounded-xl font-bold text-[16px] ">
                  Profile Detail
                </button>
                <button className="bg-white  p-3 px-10 pb-15 rounded-xl font-bold text-[16px] ">
                  Payement Detail
                </button>
              </div>
            </div>
            <div className="w-full  bg-white rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-5  p-10">
                <div>
                  <span className="text-slate-500">First Name</span>
                  <p className="font-bold">Jon</p>
                </div>
                <div>
                  <span className="text-slate-500">Last Name</span>
                  <p className="font-bold">Doe</p>
                </div>{" "}
                <div>
                  <span className="text-slate-500">Phone Number</span>
                  <p className="font-bold">+077-333-555</p>
                </div>{" "}
                <div>
                  <span className="text-slate-500">Email</span>
                  <p className="font-bold">Sample@mail.com</p>
                </div>
                <div>
                  <span className="text-slate-500">Member ship</span>
                  <p className="font-bold">Standard</p>
                </div>
              </div>
              <div className="p-8 px-20">
                <div className="w-full border-t-2 border-solid border-slate-200"></div>
              </div>
              <div className="p-10 max-w-[70%]">
                <div>
                  <h1 className="font-bold text-[20px]">Subscriptions</h1>
                  <p>
                    For your account subscription management you can manage your
                    account through selecting this dropdown
                  </p>
                </div>
              </div>
              <div className="grid p-10 ">
                <h1 className="font-bold text-[20px]">Your Uploaded quiz</h1>
                <div className="grid grid-cols-2 my-10 gap-6">
                  <div>
                    <CategoryCard />
                  </div>
                  <div>
                    <CategoryCard />
                  </div>
                  <div>
                    <CategoryCard />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
