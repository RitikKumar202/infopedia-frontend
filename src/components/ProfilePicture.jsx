import React from "react";
import uploadFolderUrl from "../constants/uploadFolderUrl";
import { HiOutlineCamera } from "react-icons/hi";

const ProfilePicture = ({ avatar }) => {
  return (
    <div className="w-full bg-[rgba(0,0,0,.05)] py-5 px-8 rounded-md flex md:flex-col items-center justify-center gap-x-4 mb-2 md:mb-0 md:mr-9">
      <div className="relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 lutline-primary overflow-hidden">
        <label
          htmlFor="profilePicture"
          className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
        >
          {avatar ? (
            <img
              src={uploadFolderUrl.UPLOAD_FOLDER_BASE_URL + avatar}
              alt="profile"
              className="w-full h-full object-fill"
            />
          ) : (
            <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
              <HiOutlineCamera className="w-7 h-auto text-primary" />
            </div>
          )}
        </label>
        <input type="file" className="sr-only" id="profilePicture" />
      </div>
      <button
        type="button"
        className="md:mt-3 border-none bg-red-500 rounded-lg px-4 py-1 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfilePicture;
