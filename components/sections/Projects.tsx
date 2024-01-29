import React from "react";
import { GetStaticProps } from "next";
import ProjectCard from "../ProjectCard";
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

const Projects:  React.FC<Props> = (props) =>  {
  return (
    <div className="bg-[#18151B] px-20  ">
       <div className="text-center my-16">
        <p className="text-4xl font-semibold text-[#F9FAFB]">Featured Projects</p>
        <p className="text-[#CFD1D4] text-base">My top projects that will blow your mind crafted with excellent skills and precision. </p>
      </div>
      {props.projectFeed.map((post,index) => (
            <div key={index} className="mb-20">
              <ProjectCard project={post} />
            </div>
          ))}
     

      <div className="sub-text flex flex-row justify-center mt-20 mb-24">
        <button className="text-center p-4 my-4 bg-[#4D0071] text-[#F9FAFB] rounded-md">
          <a href="/projects"> See All Projects </a>
        </button>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
      
    </div>
  );
};

export default Projects;
