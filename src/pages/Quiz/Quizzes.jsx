import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Hero from "../../components/Hero";
import CustomButton from "../../components/CustomButton";
import StatsCard from "../../components/StatsCard";
import { FaDeleteLeft } from "react-icons/fa6";
import CustomTable from "../../components/CustomTable";
import polygonBlue from "../../assets/polygon-blue.png"
import adminImg from "../../assets/admin-img.png";
import addIcon from "../../assets/add-square.png";
import { useNavigate } from "react-router-dom";


const Quizzes = () => {
  const navigate = useNavigate()
  return (
    <DefaultLayout>
      <div className="container h-full w-full space-y-4 bg-transparent">
        {/* First row: 2 columns with width 6 each */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 w-full flex flex-row">
            <div>
              <h1 className="font-bold text-[32px]"> Quizzes</h1>
              <p className=" text-blue-700 -mt-3 text-[14px] ">
                Manage Quizzes Here
              </p>
            </div>
            <div class="flex justify-start pt-2 relative mx-auto text-gray-600 ">
              <input
                class="border-2 border-gray-300  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xml:space="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
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

        {/* Second row: 4 columns with width 3 each */}
        {/* <div className="w-full grid grid-cols-4 gap-4">
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
        </div> */}

        {/* Third row: 1 column with width 12 */}
        <div className="w-full col-span-12">
          {" "}
          <CustomTable />
       <div className="my-5 bg-blue-100 flex flex-row w-[180px] p-2 rounded-md cursor-pointer" onClick={()=>navigate("/add-quiz")}>
       <CustomButton
              variant="none"
              text={"create new quiz"}
              startIcon={<img src={addIcon} />}
            />
       </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default Quizzes;
