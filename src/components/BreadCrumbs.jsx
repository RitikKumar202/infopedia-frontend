import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap mb-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-black opacity-60 text-sm md:text-base font-semibold"
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-[9px]">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
