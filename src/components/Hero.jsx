import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaDeleteLeft } from "react-icons/fa6";

import HeroBg from "../assets/hero-bg.png";
import demoIcon from "../assets/icons/demo-icon.svg";
import TitleInfo from "./TitleInfo/TitleInfo";
import HeroCard from "./HeroCard";
import CustomButton from "./CustomButton";
import StatsCard from "./StatsCard";
import CustomTable from "./CustomTable";

const Hero = () => {
  const paragraph =
    "Test your knowledge and become a medical hero by mastering these challenging questions. From anatomy to pathology, pharmacology to genetics, each question is designed to push your understanding to the next level.";
  const headings = [
    "Welcome to Our Website",
    "Discover Our Services",
    "Join Our Community",
    "Contact Us Today",
  ];

  return (
    <div className="">
      <div
        className="h-[800px] min-h-[800px] 2xl:min-h-[1077px] bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <TitleInfo headings={headings} paragraph={paragraph} align="center" />

        <div className="col-12 p-5">
          <div className="flex justify-center gap-7">
            <CustomButton
              variant="outlined"
              color="black"
              endIcon={
                <img src={demoIcon} width={17} height={17} alt="Demo Icon" />
              }
              text="TAKE A DEMO"
              onClick={() => console.log("Demo button clicked")}
            />
            <CustomButton
              variant="filled"
              color="blue"
              text="Sign up"
              onClick={() => console.log("Sign up button clicked")}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 max-w-[1400px] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          pagination={{ clickable: true }}
          navigation={true} // Enable navigation arrows
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <HeroCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroCard />
          </SwiperSlide>
          <SwiperSlide>
            <HeroCard />
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </div>
      {/* <StatsCard
        icon={<FaDeleteLeft />}
        iconBg="#FFABAB"
        numValue="£500.250"
        title="Total Earning"
      /> */}
      {/* <CustomTable /> */}
    </div>
  );
};

export default Hero;
