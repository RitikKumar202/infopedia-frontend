import React from "react";
import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" bg-white">
      <footer className="container mx-auto w-full flex flex-col py-4 px-6">
        <span className="bg-[#ccc] h-[1.2px] w-full mb-9"></span>
        <div className="md:flex md:flex-row md:justify-center">
          <div className="md:px-4 md:pt-[6px]">
            <div className="flex flex-col justify-center items-center">
              <div className="w-full mb-2 flex justify-center md:justify-start">
                <img src={logo} alt="Infopedia" className="w-40 md:w-60" />
              </div>
              <div className="mb-1">
                <p className="text-[13px] text-center md:text-sm md:w-[80%] md:text-start">
                  The best place to explore articles on different topics.
                </p>
              </div>
              <div className="mb-2 py-3 w-full">
                <h2 className="text-xl font-bold text-center mb-2 md:text-start md:text-2xl">
                  Follow Us
                </h2>
                <ul className="flex flex-row justify-center md:justify-start text-primary space-x-3">
                  <li>
                    <a href="/">
                      <FaGithubSquare className="w-8 md:w-10 h-auto text-black" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaLinkedin className="w-8 md:w-10 h-auto text-[#0072b1]" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaTwitterSquare className="w-8 md:w-10 h-auto text-[#00acee]" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaInstagramSquare className="w-8 md:w-10 h-auto text-[#f444e5]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:px-4">
            <div className="py-3 md:py-0">
              <h2 className="text-xl font-bold text-center mb-1 md:text-2xl">
                Quick Links
              </h2>
              <ul className="text-center md:text-start text-base md:text-[19px] md:leading-[26px] text-gray-600">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Articles</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary text-white py-2 mt-4 rounded-sm">
          <p className="text-sm md:text-base text-center font-semibold">
            Copyright © 2023 Infopedia | All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
