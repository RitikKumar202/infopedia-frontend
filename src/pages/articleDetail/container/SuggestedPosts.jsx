import React from "react";
import { Link } from "react-router-dom";
import uploadFolderUrl from "../../../constants/uploadFolderUrl";
import samplePostImage from "../../../assets/posts/NoPostImageAvailable.png";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full mt-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-medium text-dark-hard text-lg md:text-xl font-Poppins">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              src={
                item?.photo
                  ? uploadFolderUrl.UPLOAD_FOLDER_BASE_URL + item?.photo
                  : samplePostImage
              }
              alt={item?.title}
              className="aspect-square object-center object-fill rounded-lg w-1/5"
            />
            <div className="font-Roboto">
              <h3 className="text-sm font-medium text-dark-hard md:text-[15px]">
                <Link to={`/article/${item.slug}`}>{item.title}</Link>
              </h3>
              <span className="text-gray-500 opacity-70 text-xs font-Recursive">
                {new Date(item.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 font-Poppins font-medium text-lg md:text-xl text-dark-hard">
        Discover more
      </h2>
      {tags.length === 0 ? (
        <p className="text-slate-500 mt-1">Oops! No tags found</p>
      ) : (
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block text-sm md:text-base bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1 italic"
            >
              #{item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestedPosts;
