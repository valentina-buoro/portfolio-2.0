import React from "react";
import Arrow from "../../public/arrow.svg";
import Image from "next/image";
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
    <div className="bg-[#18151B] px-6 md:px-20 md:py-10 w-screen md:w-full items-center" id='projects' data-aos="zoom-in">
      

      <div className="text-center my-16 w-2/4 items-center mx-auto relative">
        <p className="text-2xl md:text-4xl font-semibold text-[#F9FAFB] ">Featured Projects</p>
        <div className="bg-[#8a2be2] h-[3px] absolute w-[30%] md:left-[10%]" />
      </div>
      {props.projectFeed.map((project) => (
            <div key={project.id} className="mb-20" data-aos="fade-up-left">
              <ProjectCard project={project} />
            </div>
          ))}
     

      <div className="sub-text flex flex-row justify-center mt-20 mb-24">
        <button className="flex items-center justify-center gap-2 text-center p-4 my-4 bg-[#4D0071] text-[#F9FAFB] rounded-md">
          <a href="/projects"> See All Projects </a>
          <Image src={Arrow} alt="arrow" />
        </button>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
      
    </div>
  );
};

export default Projects;
