import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../../services/index/posts";

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
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: mutateCreatePost, isLoading: isLoadingCreatePost } =
    useMutation({
      mutationFn: ({ slug, token }) => {
        return createPost({
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        navigate(`/dashboard/post/edit/${data.slug}`);
      },
      onError: (error) => {},
    });

  const handleCreateNewPost = ({ token }) => {
    mutateCreatePost({ token });
  };

  return (
    <div className="container flex flex-col md:flex-row mb-6 mt-8">
      {MENU_ITEM.map((item) =>
        item.name === "managePost" ? (
          <Link
            key={item.title}
            to={item.link}
            name={item.name}
            className={`${
              item.name === activeMenu
                ? "bg-primary text-white"
                : "text-primary"
            } px-5 font-medium py-2 rounded-md border-[1px] border-primary my-2 text-center md:mx-2 duration-300 transition-all`}
            onClick={() => setActiveMenu(item.name)}
          >
            {item.title}
          </Link>
        ) : (
          <button
            disabled={isLoadingCreatePost}
            name={item.name}
            className={`${
              item.name === activeMenu
                ? "bg-primary text-white"
                : "text-primary"
            } px-5 font-medium py-2 rounded-md border-[1px] border-primary my-2 text-center md:mx-2 duration-300 transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
            onClick={() => {
              setActiveMenu(item.name);
              handleCreateNewPost({ token: userState.userInfo.token });
            }}
          >
            {item.title}
          </button>
        )
      )}
    </div>
  );
};

export default DashboardMenu;
