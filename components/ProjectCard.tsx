import React from 'react'
import Router from "next/router";
import { ProjectProps } from "../types/types";
import Image from 'next/image';


const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="flex justify-center md:flex ">
        <div className="hidden bg-[#231F29] p-8 md:flex flex-col justify-around">
          <div>
            <p className="text-white text-3xl font-semibold">Trust Ballot</p>
            <p className="text-white">
              Visualize your entire blockchain paragliding pilots.
            </p>
          </div>
          <div>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <div className="text-base font-semibold rounded-md bg-[#DADADA] py-3 px-4 text-[#18151B] text-center">
                <span>Graphql</span>
              </div>
              <div className="text-base font-semibold rounded-md bg-[#DADADA] py-3 px-4 text-[#18151B] text-center">
                <span>SQL</span>
              </div>
            </div>
            <div className="pt-2 grid grid-cols-4 gap-2">
              <div className="col-span-3 text-base font-semibold rounded-md bg-[#DADADA] py-3 px-4 text-[#18151B] text-center">
                <span>Javascript</span>
              </div>
            </div>
            <div className="pt-2 grid grid-cols-3 gap-2">
              <div className="col-span-2 text-base font-semibold rounded-md bg-[#DADADA] py-3 px-4 text-[#18151B] text-center">
                <span>Javascript</span>
              </div>
            </div>
          </div>

          <div className="sub-text flex flex-row justify-between">
            <button className="text-center p-4 my-4 bg-[#4D0071] text-[#F9FAFB] rounded-md" onClick={() => Router.push("/project/[id]", `/project/${project.id}`)}>
              <span> View Project </span>
            </button>
            <button className="text-center p-4 my-4 bg-[#F9FAFB] text-[#4D0071] rounded-md">
              <a href="https://www.linkedin.com/in/latoptop/"> GitHub Repo </a>
            </button>
          </div>
        </div>
        <div className="w-[21rem] md:w-[34rem] object-contain card" >
        <Image
            src={project.img}
            alt="Trust Ballot"
            className="w-full h-full"
          />
          <div className="card-content">
            <h2>{project.title}</h2>
            <p className="hidden-text">Description</p>
          </div>
        </div>
        <style jsx>{`
        .card {
          position: relative; /* Add position relative to make absolute positioning work */
          overflow: hidden;
        }


        .card-content {
          position: absolute;
          inset-block-end: 0;
          inset-inline-start: -100%; /* Initially move content out of view */
          inline-size: 100%;
          padding: 20px;
          background-color: #f9f9f9;
          transition: transform 0.5s ease; /* Add transition */
        }

        .card-content h2 {
          margin-block-start: 0;
        }

        .card-content p {
          margin-block-end: 0;
        }

        .card:hover .card-content {
          transform: translateX(100%); /* Slide text in on hover */
        }
      `}</style>
      </div>
  )
}

export default ProjectCard