"use client";
import React from "react";
import Fade from 'react-reveal/Fade';

const PortfolioComponent = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="container mx-auto p-6">
          <Fade>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold uppercase text-gray-800">
                <span className="text-green-500">AI</span> Lead
              </h2>
              <h2 className="text-6xl font-extrabold text-gray-300 opacity-50 mt-2">
                {/* Conteúdo adicional aqui */}
              </h2>
            </div>
          </Fade>
          <div className="bg-white shadow-md rounded-lg p-6">
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