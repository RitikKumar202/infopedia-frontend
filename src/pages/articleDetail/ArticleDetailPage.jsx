import React, { useState } from "react";
import samplePostImage from "../../assets/posts/NoPostImageAvailable.png";
import sampleUserImage from "../../assets/posts/avatar.png";

import Layout from "../../components/Layout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { getSinglePost } from "../../services/index/posts";
import { useQuery } from "@tanstack/react-query";
import uploadFolderUrl from "../../constants/uploadFolderUrl";

import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

const postsData = [
  {
    _id: "1",
    image: sampleUserImage,
    title: "Frontend roadmap by love babar",
    createdAt: "2023-08-09T17:51:46.607+0000",
  },
  {
    _id: "2",
    image: sampleUserImage,
    title: "Frontend roadmap by love babar",
    createdAt: "2023-08-09T17:51:46.607+0000",
  },
  {
    _id: "3",
    image: sampleUserImage,
    title: "Frontend roadmap by love babar",
    createdAt: "2023-08-09T17:51:46.607+0008",
  },
  {
    _id: "4",
    image: sampleUserImage,
    title: "Frontend roadmap by love babar",
    createdAt: "2023-08-09T17:51:46.607+0000",
  },
];

const tagsData = ["frontend", "backend", "problem solving", "data science"];

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
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Text, Paragraph, Document])
        )
      );
    },
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
            <div className="mt-4 flex flex-col gap-y-5">
              <div className="flex gap-2 items-center">
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
            <div className="mt-3 prose prose-sm sm:prose-base">{body}</div>

            <CommentsContainer
              comments={data?.comments}
              classname="mt-10"
              logginedUserId={userState?.userInfo?._id}
            />
          </article>
          <div>
            <SuggestedPosts
              header="Trending Articles"
              posts={postsData}
              tags={tagsData}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <div className="mt-7">
              <h2 className="text-dark-hard font-medium mb-3 md:text-xl font-Poppins">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI("https://ritikkumar-portfolio.vercel.app/")}
                title={encodeURIComponent("Ritik Kumar portfolio")}
              />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticleDetailPage;
