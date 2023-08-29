import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/loader.gif";

const Dashboard = () => {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
    onSuccess: (data) => {
      if (!data?.admin) {
        navigate("/");
      }
    },
    onError: (err) => {
      navigate("/");
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  if (profileIsLoading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <img src={loader} alt="loader" />
        <h3 className="text-2xl font-medium">Loading...</h3>
      </div>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto py-10 px-5">
        <h2>All Posts</h2>
      </section>
    </Layout>
  );
};

export default Dashboard;
