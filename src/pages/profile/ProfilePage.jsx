import React, { useEffect, useMemo } from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { userActions } from "../../store/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";

import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password },
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Your profile is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: useMemo(() => {
      return {
        name: profileIsLoading ? "" : profileData.name,
        email: profileIsLoading ? "" : profileData.email,
      };
    }, [profileData?.email, profileData?.name, profileIsLoading]),
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <Layout>
      <section className="container mx-auto py-10 px-5">
        <div className="w-full max-w-sm mx-auto font-Poppins">
          <h1 className="text-2xl font-bold text-center text-dark-hard mb-8">
            Edit Profile Details
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-center">
            <ProfilePicture avatar={profileData?.avatar} />
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="w-full bg-[rgba(0,0,0,.05)] py-4 px-8 rounded-md"
            >
              <p className="mb-2 text-right font-medium text-base text-gray-700">
                <span className="text-red-600 mr-1 font-semibold">*</span>
                Required
              </p>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="name"
                  className="text-[#5a7184] font-semibold block"
                >
                  <p>
                    Name<span className="text-red-600 ml-[1.5px]">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Name length must be at least of 3 characters",
                    },
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  placeholder="Enter your name"
                  className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-3 font-semibold  block outline-none border-[2px] border-secondary focus:border-primary"
                />
                {errors.name?.message && (
                  <p className="mt-1 ml-1 text-xs text-red-500">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="email"
                  className="text-[#5a7184] font-semibold block"
                >
                  <p>
                    Email<span className="text-red-600 ml-[1.5px]">*</span>
                  </p>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="Enter your email"
                  className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-3 font-semibold  block outline-none border-[2px] border-secondary focus:border-primary"
                />
                {errors.email?.message && (
                  <p className="mt-1 ml-1 text-xs text-red-500">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="password"
                  className="text-[#5a7184] font-semibold block"
                >
                  Change Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="Enter new password"
                  className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-3 font-semibold  block outline-none border-[2px] border-secondary focus:border-primary"
                />
                {errors.password?.message && (
                  <p className="mt-1 ml-1 text-xs text-red-500">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={
                  !isValid || profileIsLoading || updateProfileIsLoading
                }
                className="bg-primary text-white font-bold rounded-lg text-lg px-6 py-3 w-full mb-3 disabled:bg-gray-400 disabled:hover:bg-primary disabled:hover:opacity-60 disabled:cursor-not-allowed"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;
