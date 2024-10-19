"use client";
import React from "react";
import Fade from 'react-reveal/Fade';

const PortfolioComponent = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className=" mx-auto p-6">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  <span className="text-[#17B978]">AI</span> Lead
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">

                </h2>
              </div>
            </Fade>
          <div className="login-box bg-white shadow-md rounded-lg p-6 ">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Welcome Back!</h3>
              <p className="text-gray-600">Please login to your account.</p>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <a className="text-green-500 hover:text-green-800" href="register.html">Sign up here</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioComponent;
