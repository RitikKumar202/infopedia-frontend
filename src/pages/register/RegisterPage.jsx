import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/index/users";
import { toast } from "react-hot-toast";
import { userActions } from "../../store/reducers/userReducers";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  const password = watch("password");

  return (
    <Layout>
      <section className="container mx-auto py-10 px-5">
        <div className="w-full max-w-sm mx-auto font-Poppins">
          <h1 className="text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
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
                <p>
                  Password<span className="text-red-600 ml-[1.5px]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password length must be at least of 6 characters",
                  },
                })}
                placeholder="Enter password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-3 font-semibold  block outline-none border-[2px] border-secondary focus:border-primary"
              />
              {errors.password?.message && (
                <p className="mt-1 ml-1 text-xs text-red-500">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5a7184] font-semibold block"
              >
                <p>
                  Confirm Password
                  <span className="text-red-600 ml-[1.5px]">*</span>
                </p>
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is required",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Password and Confirm Password must be same";
                    }
                  },
                })}
                placeholder="Enter confirm password"
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-3 font-semibold  block outline-none border-[2px] border-secondary focus:border-primary"
              />
              {errors.confirmPassword?.message && (
                <p className="mt-1 ml-1 text-xs text-red-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary font-semibold"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="bg-primary text-white font-bold rounded-lg text-lg px-6 py-3 w-full my-6 disabled:bg-gray-400 disabled:hover:bg-primary disabled:hover:opacity-60 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <p className="font-semibold text-sm text-[#5a7184]">
              Already have an account?{" "}
              <Link to="/login" className="text-primary ml-1 text-base">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;
