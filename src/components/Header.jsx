import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/user";

const navItemName = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Contact" },
];

const NavItem = ({ name }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="text-white lg:text-primary lg:hover:text-secondary transition-all duration-300">
      <a href="/">{name}</a>
    </li>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
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
            <ul className="flex flex-col items-center gap-y-1 lg:flex-row gap-x-5 font-medium text-lg">
              {navItemName.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            {userState.userInfo ? (
              <div className="text-white items-center gap-y-5 flex flex-col lg:flex-row gap-x-2 font-semibold">
                <div className="relative group">
                  <div className="flex flex-col items-center">
                    <button
                      className="flex gap-x-1 items-center bg-secondary lg:bg-primary px-4 py-2 mt-4 lg:mt-0 rounded-md text-white font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    >
                      <span>Profile</span>
                      <MdKeyboardArrowDown className="text-xl" />
                    </button>
                    <div
                      className={`${
                        profileDropdown ? "block" : "hidden"
                      } lg:hidden transition-all duration-500 pt-2 lg:absolute lg:bottom-0 lg:right-[-5px] lg:transform lg:translate-y-full lg:group-hover:block w-max`}
                    >
                      <ul className="bg-secondary lg:bg-primary text-center flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden">
                        <button
                          type="button"
                          className="hover:bg-dark-soft lg:hover:bg-secondary hover:text-white px-4 py-2 text-white"
                        >
                          Dashboard
                        </button>
                        <button
                          type="button"
                          onClick={logoutHandler}
                          className="hover:bg-dark-soft lg:hover:bg-secondary hover:text-white px-4 py-2 text-white"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button className="bg-secondary lg:bg-primary px-4 py-2 mt-4 lg:mt-0 rounded-md text-white font-semibold hover:scale-110 duration-300 transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
