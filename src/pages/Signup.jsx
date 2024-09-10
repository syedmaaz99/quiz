import React, { useState } from "react";
import loginImg from "../assets/login-sec-img.png";
import CustomInput from "../components/CustomInput/CustomInput";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import doubleTick from "../assets/double-tick.png";
import monitor from "../assets/icons/monitor.svg";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex h-screen ">
      <div
        className="w-1/2 bg-cover bg-center border-r-2 border-slate-300 h-[90%] my-auto p-10"
        // style={{ backgroundImage: `url(${loginImg})` }}
      >
        <h1 className="text-[30px]">What you ll learn!</h1>
        <div className="flex items-center space-x-2 mb-6 mt-10">
          <img src={doubleTick} height={20} width={20} className="block" />
          <p>
            Use generative AI tools to help develop ideas and content, make more
            informed decisions, and speed up daily work tasks
          </p>
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <img src={doubleTick} height={20} width={20} className="block" />
          <p>
            Use generative AI tools to help develop ideas and content, make more
            informed decisions, and speed up daily work tasks
          </p>
        </div>
        <div className="flex items-center space-x-2 mb-6">
          <img src={doubleTick} height={20} width={20} className="block" />
          <p>
            Use generative AI tools to help develop ideas and content, make more
            informed decisions, and speed up daily work tasks
          </p>
        </div>
        <h1 className="text-[30px]  mt-12">What You ll Get!</h1>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div class="">
            <div class="flex justify-between items-center text-black  p-4  rounded-xl border border-1 border-slate-300">
              Second Column Content
              <div className="bg-blue-400 rounded-lg p-3">
                <img src={monitor} alt="" height={30} width={30} />
              </div>
            </div>
          </div>{" "}
          <div class="">
            <div class="flex justify-between items-center text-black  p-4  rounded-xl border border-1 border-slate-300">
              Second Column Content
              <div className="bg-blue-400 rounded-lg p-3">
                <img src={monitor} alt="" height={30} width={30} />
              </div>
            </div>
          </div>{" "}
          <div class="">
            <div class="flex justify-between items-center text-black  p-4  rounded-xl border border-1 border-slate-300">
              Second Column Content
              <div className="bg-blue-400 rounded-lg p-3">
                <img src={monitor} alt="" height={30} width={30} />
              </div>
            </div>
          </div>
          <div class="">
            <div class="flex justify-between items-center text-black  p-4  rounded-xl border border-1 border-slate-300">
              Second Column Content
              <div className="bg-blue-400 rounded-lg p-3">
                <img src={monitor} alt="" height={30} width={30} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2 text-left">Signup</h2>
          <span>Signup to access your travelwise account</span>
          <form>
            <div className="grid grid-cols-2 gap-2  p-0 h-[70px]">
              <div>
                <CustomInput
                  id="name"
                  label="Name"
                  value={name}
                  onChange={() => setname()}
                />
              </div>
              <div>
                <CustomInput
                  id="name"
                  label="Name"
                  value={name}
                  onChange={() => setname()}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <CustomInput
                  id="name"
                  label="Name"
                  value={name}
                  onChange={() => setname()}
                />
              </div>
              <div>
                <CustomInput
                  id="name"
                  label="Name"
                  value={name}
                  onChange={() => setname()}
                />
              </div>
            </div>
            <div className="">
              <CustomInput
                id="password"
                label="Password"
                type="password"
                value={name}
                onChange={() => setname()}
              />
            </div>
            <div className="">
              <CustomInput
                id="password"
                label="Password"
                type="password"
                value={name}
                onChange={() => setname()}
              />
            </div>

            <div className="flex justify-between items-center mb-5 -mt-[20px]">
              <span className="flex justify-center items-center">
                {" "}
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ml-2 mb-1">
                  remember me
                </label>
              </span>
              <span className="text-red-500 cursor-pointer" onClick={()=> navigate('/forgot-password')}>forgot password</span>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Signup
              </button>
            </div>
            {/* <div className="flex justify-center mt-8">
              <span>Don’t have an account?</span>
              <span className="text-red-500"> Sign up</span>
            </div> */}
            <div class="flex items-center justify-center my-4">
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

export default Signup;
