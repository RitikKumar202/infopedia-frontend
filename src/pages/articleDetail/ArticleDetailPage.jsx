import React from "react";
import samplePostImage from "../../assets/posts/NoPostImageAvailable.png";
import sampleUserImage from "../../assets/posts/avatar.png";

import Layout from "../../components/Layout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Article", link: "/article" },
  { name: "Article Title", link: "/article/12" },
];

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
  return (
    <Layout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img src={samplePostImage} alt="" className="rounded-xl w-full" />
          <div className="mt-3 flex flex-col gap-y-5">
            <div className="flex gap-2 items-center">
              <img
                src={sampleUserImage}
                alt="User ProfileImage"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full object-fill object-center"
              />
              <h4 className="font-bold font-Poppins text-sm md:text-base text-dark-soft">
                Ritik Kumar
              </h4>
            </div>
            <div>
              <Link
                to="/article?category=selectedCategory"
                className="bg-primary bg-opacity-10 text-primary rounded-lg px-3 py-1.5 text-sm md:text-base font-semibold italic"
              >
                #frontend
              </Link>
            </div>
          </div>
          <h1 className="text-xl md:text-[26px] font-medium font-Roboto mt-4 text-dark-hard">
            Frontend roadmap by love babar
          </h1>
          <div className="mt-3 text-dark-soft font-Poppins">
            <p className="leading-7 md:text-[18px] lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              doloribus facilis obcaecati deleniti iste odit deserunt laborum.
              Numquam delectus fuga magnam aperiam recusandae id, incidunt
              praesentium modi cum labore blanditiis autem ratione nostrum
              obcaecati! Nostrum error ducimus blanditiis soluta expedita neque
              placeat vero officiis, necessitatibus nihil autem repellendus a
              numquam.
            </p>
          </div>

          <CommentsContainer classname="mt-10" logginedUserId="a" />
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
    </Layout>
  );
};

export default ArticleDetailPage;
