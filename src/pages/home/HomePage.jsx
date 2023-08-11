import React from "react";
import Layout from "../../components/Layout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Articles />
    </Layout>
  );
};

export default HomePage;
