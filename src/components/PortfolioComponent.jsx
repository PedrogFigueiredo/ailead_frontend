"use client";
import React from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Portfolio from "../script/Portfolio";
const PortfolioComponent = () => {
  return (
    <>
      <section className="portfolio__component flex min-h-screen items-center justify-center">
        {/* ========= Personal Info Main Container ========= */}
        <div>
          {/* Heading Text */}

          <div className="container mx-auto pt-[50px] md:pt-[80px]">
            <Fade>
              <div className="heading__text relative flex justify-center">
                <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
                  <span className="text-[#17B978]">AI</span> Lead
                </h2>
                <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">

                </h2>
              </div>
            </Fade>
          </div>
          {/* Login Box */}
              <div class="login-container">
                <div class="login-box">
                    <h2>Login</h2>
                    <form action="your-login-endpoint" method="POST">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" required>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <div class="input-group">
                            <button type="submit" class="btn">Login</button>
                        </div>
                    </form>
                    <p>Don't have an account? <a href="register.html">Sign up here</a></p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioComponent;
