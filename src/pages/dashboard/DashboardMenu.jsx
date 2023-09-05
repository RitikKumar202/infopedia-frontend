import React, { useState } from "react";
import { Link } from "react-router-dom";

const MENU_ITEM = [
  {
    title: "Manage Posts",
    type: "link",
    name: "managePost",
    link: "/dashboard",
  },
  {
    title: "Post New Article",
    type: "link",
    name: "postArticle",
    link: "/dashboard/post/new-article",
  },
];

const DashboardMenu = () => {
  const [activeMenu, setActiveMenu] = useState("managePost");

  return (
    <div className="container flex flex-col md:flex-row mb-6">
      {MENU_ITEM.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          name={item.name}
          className={`${
            item.name === activeMenu ? "bg-primary text-white" : "text-primary"
          } px-5 font-medium py-2 rounded-md border-[1px] border-primary my-2 text-center md:mx-2 duration-300 transition-all`}
          onClick={() => setActiveMenu(item.name)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DashboardMenu;
