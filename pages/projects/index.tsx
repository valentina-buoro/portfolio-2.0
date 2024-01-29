import React from "react";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";

import ProjectCard from "../../components/ProjectCard";
import { ProjectProps } from "../../types/types";
import { projectFeed } from "../../data/project-data";

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
        <main>
          {props.projectFeed.map((post,index) => (
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