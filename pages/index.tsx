import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { PostProps } from "../types/types";
import { feed } from "../data/blog-data";
import Projects from "../components/sections/Projects";
import Hero from "../components/sections/Hero";
import Techstack from "../components/sections/Techstack";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero/>
     <Projects/>
     <Techstack/>
     <Services/>
     <Contact/>
    </Layout>
  );
};

export default Blog;
