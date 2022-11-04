import React from "react";
import Banner from "../assets/banner1.png";

const Header = () => {
  return (
    <div>
      <section className="text-gray-800">
        <div className=" bg-slate-200 flex flex-col justify-center p-6 rounded-md  sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl font-bold leading-tight text-4xl">
              Welcome to Our 
              <span className="text-lime-800"> Quiz Zone</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 font-semibold tracking-wide">
            Check your intelligence
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#all-topic" className="px-8 py-3 text-lg font-semibold rounded-l-sm rounded-t-3xl rounded-r-3xl rounded-b-3xl text-base-100 bg-green-800 hover:text-slate-400">Start Now!!</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
