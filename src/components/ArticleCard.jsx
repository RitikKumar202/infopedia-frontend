import React from "react";
import postImage from "../assets/posts/postImage.jpg";
import userProfile from "../assets/posts/userProfile.jpg";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className}`}
    >
      <img
        src={postImage}
        alt="PostImage"
        className="w-full h-auto md:h-52 lg:h48 xl:h-60 object-cover object-center"
      />
      <div className="p-5">
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold font-Poppins text-dark-soft">
          React Courses
        </h2>
        <p className="text-sm md:text-lg mt-3 text-secondary font-Roboto">
          This is a complete React course with all topic covered.
        </p>
        <div className="mt-6 flex justify-between items-center flex-nowrap">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={userProfile}
              alt="User ProfileImage"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-fill object-center"
            />
            <h4 className="font-bold font-Poppins text-sm md:text-base text-dark-soft">
              Ritik Kumar
            </h4>
          </div>
          <span className="italic font-semibold text-sm md:text-base text-[rgba(0,0,0,.45)]">
            08 Aug, 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
