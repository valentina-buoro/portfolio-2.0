import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { PostProps } from "../types/types";
import { feed } from "../data/blog-data";
import { ProjectProps } from "../types/types";
import { projectFeed } from "../data/project-data";
import Projects from "../components/sections/Projects";
import Hero from "../components/sections/Hero";
import Techstack from "../components/sections/Techstack";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Divider from "../components/Divider";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projectFeed },
    revalidate: 10,
  };
};

type Props = {
  projectFeed: ProjectProps[];
};


const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Hero/>
      <Divider/>
     <Projects projectFeed={props.projectFeed} />
     <Techstack/>
     <Services/>
     <Contact/>
    </Layout>
  );
};

export default Blog;
