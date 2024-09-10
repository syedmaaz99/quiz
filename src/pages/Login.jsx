import React, { useState } from "react";
import loginImg from "../assets/login-sec-img.png";
import CustomInput from "../components/CustomInput/CustomInput";
import { FaArrowRight, FaArrowLeft, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setname] = useState("");
  const navigate = useNavigate()
  return (
    <div className="flex h-screen ">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2 text-left">Login</h2>
          <span>Login to access your travelwise account</span>
          <form>
            <div className="">
              <CustomInput
                id="name"
                label="Name"
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
              <span onClick={()=>navigate("/forgot-password") } className="text-red-500 cursor-pointer">forgot password</span>
            </div>
            <div className="flex items-center justify-between">
              <button
              onClick={()=> navigate('/dashboard')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                LogIn
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <span>Don’t have an account?</span>
              <span className="text-red-500 cursor-pointer" onClick={()=> navigate('/sign-up')}  > Sign up</span>
            </div>
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

export default Login;
