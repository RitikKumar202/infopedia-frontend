import React, { useState } from "react";
import samplePostImage from "../../assets/posts/NoPostImageAvailable.png";
import sampleUserImage from "../../assets/posts/avatar.png";

import Layout from "../../components/Layout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { getAllPosts, getSinglePost } from "../../services/index/posts";
import { useQuery } from "@tanstack/react-query";
import uploadFolderUrl from "../../constants/uploadFolderUrl";

import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import parseJsonToHtml from "../../utils/parseJsonToHtml";
import Editor from "../../components/editor/Editor";

const ArticleDetailPage = () => {
  const userState = useSelector((state) => state.user);
  const { slug } = useParams();
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["article", slug],
    onSuccess: (data) => {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Article", link: "/article" },
        { name: "Article Title", link: `/article/${data.slug}` },
      ]);
      setBody(parseJsonToHtml(data?.body));
    },
  });

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  return (
    <Layout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post details" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              src={
                data?.photo
                  ? uploadFolderUrl.UPLOAD_FOLDER_BASE_URL + data?.photo
                  : samplePostImage
              }
              alt={data?.title}
              className="rounded-xl w-full"
            />
            <div className="mt-4 flex flex-col mb-6">
              <div className="flex gap-2 items-center mb-1">
                <img
                  src={
                    data?.user.avatar
                      ? uploadFolderUrl.UPLOAD_FOLDER_BASE_URL +
                        data?.user.avatar
                      : sampleUserImage
                  }
                  alt={data?.user.name}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full object-fill object-center"
                />
                <h4 className="font-bold font-Poppins text-sm md:text-base text-dark-soft">
                  {data?.user.name}
                </h4>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                <p className="text-dark-soft font-semibold">Posted on:</p>
                <span className="text-slate-500 text-xs md:text-sm font-Recursive">
                  {new Date(data.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex gap-x-2">
                {data?.categories.map((category) => (
                  <Link
                    to={`/article?category=${category.name}`}
                    className="bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1.5 text-sm md:text-base font-semibold italic"
                  >
                    #{category.name}
                  </Link>
                ))}
              </div>
            </div>
            <h1 className="text-xl md:text-[26px] font-medium font-Roboto mt-4 text-dark-hard">
              {data?.title}
            </h1>
            <div className="w-full">
              {!isLoading && !isError && (
                <Editor content={data?.body} editable={false} />
              )}
            </div>

            <CommentsContainer
              comments={data?.comments}
              classname="mt-10"
              logginedUserId={userState?.userInfo?._id}
              postSlug={slug}
            />
          </article>
          <div>
            <SuggestedPosts
              header="Trending Articles"
              posts={postsData?.data}
              tags={data?.tags}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <div className="mt-7">
              <h2 className="text-dark-hard font-medium mb-3 md:text-xl font-Poppins">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI(window.location.href)}
                title={encodeURIComponent(data?.title)}
              />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticleDetailPage;
