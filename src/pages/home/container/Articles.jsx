import { IoIosArrowForward } from "react-icons/io";
import React from "react";

import ArticleCard from "../../../components/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/index/posts";
import ArticleCardSkeleton from "../../../components/ArticleCardSkeleton";
import ErrorMessage from "../../../components/ErrorMessage";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {},
  });

  return (
    <section className="flex flex-col container mx-auto  px-5 py-10">
      <div className="flex flex-wrap justify-start md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          data?.data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-21px)]"
            />
          ))
        )}
      </div>
      <button className="flex items-center mx-auto gap-x-2 font-bold text-primary border-2 border-primary bg-white hover:bg-primary hover:text-white duration-500 transition-all px-6 py-3 rounded-lg">
        <span>Load more articles</span>
        <IoIosArrowForward className="w-4 h-4" />
      </button>
    </section>
  );
};

export default Articles;
