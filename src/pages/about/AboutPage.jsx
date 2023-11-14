import React from "react";
import Layout from "../../components/Layout";
import About from "../../assets/about-us.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const AboutPage = () => {
  return (
    <Layout>
      <section className="container w-full mx-auto flex flex-col py-10 px-5">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="lg:w-[45%]">
            <img src={About} alt="about-us" />
          </div>
          <div className="lg:w-[55%]">
            <h1 className="font-semibold text-3xl md:text-5xl lg:text-8xl">
              Everyone has a story to tell.
            </h1>
            <p className="mt-8 text-base md:text-lg lg:text-xl">
              Infopedia is a home for human stories and ideas. Here, anyone can
              share insightful perspectives, useful knowledge, and life wisdom
              with the world—without building a mailing list or a following
              first. The internet is noisy and chaotic; Infopedia is quiet yet
              full of insight. It’s simple, beautiful, collaborative, and helps
              you find the right audience for whatever you have to say.
            </p>
            <p className="mt-8 text-base md:text-lg lg:text-xl">
              We believe that what you read and write matters. Words can divide
              or empower us, inspire or discourage us. In a world where the most
              sensational and surface-level stories often win, we’re building a
              system that rewards depth, nuance, and time well spent. A space
              for thoughtful conversation more than drive-by takes, and
              substance over packaging.
            </p>
          </div>
        </div>
        <Link
          to="/"
          className="text-4xl md:text-5xl lg:text-6xl mt-10 border-t-2 border-b-2 py-6 px-5 hover:bg-primary hover:text-white duration-300 transition-all"
        >
          <span className="flex justify-between">
            <p>Start reading</p>
            <GoArrowRight />
          </span>
        </Link>
        <Link
          to="/"
          className="text-4xl md:text-5xl lg:text-6xl border-b-2 py-6 px-5 hover:bg-primary hover:text-white duration-300 transition-all"
        >
          <span className="flex justify-between">
            <p>Start writing</p>
            <GoArrowRight />
          </span>
        </Link>
      </section>
    </Layout>
  );
};

export default AboutPage;
