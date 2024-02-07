import React from "react";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BackArrow from "../../public/backarrow.svg";
import ProjectCard from "../../components/ProjectCard";
import { ProjectProps } from "../../types/types";
import { projectFeed } from "../../data/project-data";
import Image from "next/image";

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
      <div className="w-full h-full flex flex-col px-20 bg-[#18151B]">
        <div className="flex flex-row justify-between items-center my-16">
          <a className="flex text-white font-semibold text-base items-center gap-2" href='/'>
            <Image src={BackArrow} alt="logo" />
            Back
          </a>
          <div className="text-center  w-2/4 items-center mx-auto relative">
            <p className="text-2xl md:text-4xl font-semibold text-[#F9FAFB] ">
              Featured Projects
            </p>
            <div className="bg-[#8a2be2] h-[3px] absolute w-[30%] md:left-[10%]" />
          </div>
        </div>
        <main>
          {props.projectFeed.map((post, index) => (
            <div key={index} className="mb-20">
              <ProjectCard project={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
