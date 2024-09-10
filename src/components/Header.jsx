import React from "react";
import appLogo from "../assets/MediQuizLogo.svg";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
const Header = () =>
{
  const navigate  = useNavigate()
  return (
 <header className="absolute top-0 left-0 w-full  p-4 flex justify-between items-center px-24 z-[99999]">
   <div className="">
     <img
       src={appLogo}
       alt=""
       style={{ height: "75px", width: "234px", "!important": true }}
     />
   </div>
   <nav className="flex space-x-4 align-middle items-center	">
     <div className="flex gap-12">
       <a href="#resources" className="text-black">
         Resources
       </a>
       <a href="#courses" className="text-black">
         Courses
       </a>
       <a href="#aboutus" className="text-black">
         About Us
       </a>
     </div>
     <div className="flex gap-5">
       <CustomButton text="Login" variant="outlined" color="black" onClick={()=> navigate('/login')} />
       <CustomButton text="Signup"  onClick={()=> navigate('/sign-up')}/>
     </div>
   </nav>
 </header>
);

}

export default Header;
