import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navItemName = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Contact" },
];

const NavItem = ({ name }) => {
  return (
    <li className="text-white lg:text-primary lg:hover:text-secondary transition-all duration-300">
      <a href="/">{name}</a>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 bg-white z-50">
      <header className="w-full shadow-lg">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <div className="w-44 lg:w-56 flex items-center">
            <img src={logo} alt="Infopedia" className="w-full" />
          </div>

          <div className="lg:hidden cursor-pointer z-50 text-primary">
            {navIsVisible ? (
              <RiCloseLine className="w-6 h-6" onClick={navVisibilityHandler} />
            ) : (
              <RiMenu3Line className="w-6 h-6" onClick={navVisibilityHandler} />
            )}
          </div>

          <div
            className={`${
              navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-300 mt-[59px] lg:mt-0 bg-primary lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
          >
            <ul className="flex flex-col items-start gap-y-1 lg:flex-row gap-x-5 font-medium text-lg">
              {navItemName.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            <button className="bg-secondary lg:bg-primary px-4 py-2 mt-4 lg:mt-0 rounded-md text-white font-semibold hover:scale-110 duration-300 transition-all">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
