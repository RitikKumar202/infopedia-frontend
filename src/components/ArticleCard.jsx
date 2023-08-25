import React from "react";
import samplePostImage from "../assets/posts/NoPostImageAvailable.png";
import sampleUserImage from "../assets/posts/avatar.png";
import uploadFolderUrl from "../constants/uploadFolderUrl";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className}`}
    >
      <img
        src={
          post.photo
            ? uploadFolderUrl.UPLOAD_FOLDER_BASE_URL + post.photo
            : samplePostImage
        }
        alt="PostImage"
        className="w-full h-auto md:h-52 lg:h48 xl:h-60 object-cover object-center"
      />
      <div className="p-5">
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-dark-soft">
          {post.title}
        </h2>
        <p className="text-sm md:text-lg mt-3 text-gray-500">{post.caption}</p>
        <div className="mt-6 flex justify-between items-center flex-nowrap">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                post.user.avatar
                  ? uploadFolderUrl.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                  : sampleUserImage
              }
              alt="User ProfileImage"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full object-fill object-center"
            />
            <h4 className="font-bold text-sm md:text-base text-dark-soft">
              {post.user.name}
            </h4>
          </div>
          <span className="italic font-semibold text-sm md:text-base text-[rgba(0,0,0,.40)]">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "short",
            })}
            , {new Date(post.createdAt).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
