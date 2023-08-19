import React from "react";
import uploadFolderUrl from "../constants/uploadFolderUrl";
import { HiOutlineCamera } from "react-icons/hi";

const ProfilePicture = ({ avatar }) => {
  return (
    <div className="w-full flex items-center justify-center gap-x-4 mb-6">
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
        className="border-none bg-red-500 rounded-lg px-4 py-1 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfilePicture;
