import React, { useState } from "react";
import forgotSecImg from "../assets/forgot-sec-img.png";
import CustomInput from "../components/CustomInput/CustomInput";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaApple } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate()

  const [name, setname] = useState("");
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${forgotSecImg})` }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <div className="flex gap-1 items-center mb-2" onClick={()=>navigate(-1)}>
            <IoChevronBack />
            <span>Back to login</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-left">
            Forgot your password?
          </h2>
          <span className="text-slate-400 text-[12px]">
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </span>
          <form>
            <div className="">
              <CustomInput
                id="email"
                label="Email"
                value={name}
                onChange={() => setname()}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
              onClick={()=> navigate("/login")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>

            <div class="flex items-center justify-center my-10">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="mx-4 text-gray-500">Or login with</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div class="flex items-center justify-center space-x-4 ">
              <div class="flex items-center justify-center flex-grow h-10 border border-gray-300 rounded-md">
                <FaFacebook />
              </div>

              <div class="flex items-center justify-center flex-grow h-10 border border-gray-300 rounded-md">
                <FcGoogle />
              </div>

              <div class="flex items-center justify-center flex-grow h-10 border border-gray-300 rounded-md">
                <FaApple />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
