import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/Hero";
import CustomButton from "../components/CustomButton";
import StatsCard from "../components/StatsCard";
import { FaDeleteLeft } from "react-icons/fa6";
import CustomTable from "../components/CustomTable";
import adminImg from '../assets/admin-img.png';
import polygonBlue from '../assets/polygon-blue.png'
const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="container h-full w-full space-y-4">
        {/* First row: 2 columns with width 6 each */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 w-full">
            <h1 className="font-bold text-[32px]"> Dashboard</h1>
          </div>
          <div className="col-span-1 w-full flex justify-end">
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
        </div>

        {/* Second row: 4 columns with width 3 each */}
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="col-span-1 w-full">
            {" "}
            <StatsCard
              icon={<FaDeleteLeft />}
              iconBg="#FFABAB"
              numValue="£500.250"
              title="Total Earning"
            />{" "}
          </div>
          <div className="col-span-1 w-full">
            {" "}
            <StatsCard
              icon={<FaDeleteLeft />}
              iconBg="#FFABAB"
              numValue="£500.250"
              title="Total Earning"
            />{" "}
          </div>
          <div className="col-span-1 w-full">
            {" "}
            <StatsCard
              icon={<FaDeleteLeft />}
              iconBg="#FFABAB"
              numValue="£500.250"
              title="Total Earning"
            />{" "}
          </div>
          <div className="col-span-1 w-full">
            {" "}
            <StatsCard
              icon={<FaDeleteLeft />}
              iconBg="#FFABAB"
              numValue="£500.250"
              title="Total Earning"
            />{" "}
          </div>
        </div>

        {/* Third row: 1 column with width 12 */}
        <div className="w-full col-span-12">
          {" "}
          <CustomTable />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
