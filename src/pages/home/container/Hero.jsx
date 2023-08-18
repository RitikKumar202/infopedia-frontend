import React from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row px-5 py-5">
      <div className="mt-10 w-full">
        <h1 className="text-dark-soft text-center font-bold text-3xl md:text-5xl">
          Welcome to <span className="text-primary">Infopedia.</span>
        </h1>
        <p className="text-secondary mt-4 text-center md:text-xl">
          Discover, Inspire & Engage – Welcome to a world of limitless
          narratives at Infopedia!
        </p>
        <div className="flex flex-col w-full lg:w-full lg:max-w-[750px] mx-auto gap-y-2.5 mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-dark-hard" />
            <input
              type="text"
              className="placeholder:font-bold font-semibold text-dark-soft rounded-lg pl-12 pr-3 py-3 md:py-4 w-full focus:outline-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              placeholder="Search article"
            />
          </div>
          <button className="w-full text-white bg-primary hover:scale-95 transition-all duration-300 px-5 py-2 font-semibold rounded-lg md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit">
            Search
          </button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:items-center lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="font-semibold text-dark-soft">Popular Tags:</span>
          <ul className="flex flex-wrap text-sm md:text-base gap-x-2.5 gap-y-2.5 mt-3 lg:mt-0 lowercase italic">
            <li className="bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1.5">
              #Frontend
            </li>
            <li className="bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1.5">
              #Backend
            </li>
            <li className="bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1.5">
              #DSA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
