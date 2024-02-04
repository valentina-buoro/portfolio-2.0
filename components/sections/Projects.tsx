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
    <div className="bg-[#18151B] px-6 md:px-20 md:py-10 w-screen md:w-full items-center" id='projects'>
      

      <div className="text-center my-16 w-2/4 items-center mx-auto">
        <p className="text-4xl font-semibold text-[#F9FAFB] ">Featured Projects</p>
        <div className="bg-white h-2  w-2/3  my-3" />
      </div>
      {props.projectFeed.map((project) => (
            <div key={project.id} className="mb-20">
              <ProjectCard project={project} />
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
