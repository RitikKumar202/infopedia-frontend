import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/user";
import { Link, useNavigate } from "react-router-dom";

const navItemName = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

const NavItem = ({ item }) => {
  return (
    <li className="text-white lg:text-primary lg:hover:text-secondary transition-all duration-300">
      <Link to={item.href}>{item.name}</Link>
    </li>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <Link to="/" className="w-44 lg:w-56 flex items-center">
            <img src={logo} alt="Infopedia" className="w-full" />
          </Link>

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
                <NavItem key={item.name} item={item} />
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
                      <span>Account</span>
                      <MdKeyboardArrowDown className="text-xl" />
                    </button>
                    <div
                      className={`${
                        profileDropdown ? "block" : "hidden"
                      } lg:hidden transition-all duration-500 pt-2 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-full`}
                    >
                      <ul className="bg-secondary lg:bg-primary text-center flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden">
                        {userState?.userInfo?.admin && (
                          <button
                            onClick={() => navigate("/dashboard")}
                            type="button"
                            className="hover:bg-dark-soft hover:text-white px-4 py-2 text-white"
                          >
                            Dashboard
                          </button>
                        )}
                        <button
                          onClick={() => navigate("/profile")}
                          type="button"
                          className="hover:bg-dark-soft hover:text-white px-4 py-2 text-white"
                        >
                          Profile
                        </button>
                        <button
                          type="button"
                          onClick={logoutHandler}
                          className="hover:bg-dark-soft hover:text-white px-4 py-2 text-white"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-secondary lg:bg-primary px-4 py-2 mt-4 lg:mt-0 rounded-md text-white font-semibold hover:scale-110 duration-300 transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
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
