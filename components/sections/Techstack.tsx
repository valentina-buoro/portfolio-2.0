import React from "react";

import Image from "next/image";
import HtmlIcon from "../../public/htmlIcon.svg";
import CssIcon from "../../public/css.svg";
import TailwindIcon from "../../public/tailwind.svg";
import ReactIcon from "../../public/react.svg";
import JavascriptIcon from "../../public/javascript.svg";
import Node from "../../public/node.svg";
import Express from "../../public/express.svg";
import Sql from "../../public/sql.svg";
import Python from "../../public/python.svg";
import Postgres from "../../public/postgres.svg";
import FastApi from "../../public/fastapi.svg";
import Flutter from "../../public/flutter.svg";
import Dart from "../../public/dart.svg";
const frontendIcons = [
  {
    icon: HtmlIcon,
    text: "HTML",
  },
  {
    icon: CssIcon,
    text: "CSS",
  },
  {
    icon: TailwindIcon,
    text: "Tailwind",
  },
  {
    icon: ReactIcon,
    text: "React",
  },
  {
    icon: JavascriptIcon,
    text: "Javascript",
  },
];

const backendIcons = [
  {
    icon: Node,
    text: "Nodejs",
  },
  {
    icon: Express,
    text: "Express",
  },
  {
    icon: Sql,
    text: "Sql",
  },
  {
    icon: Python,
    text: "Python",
  },
  {
    icon: Postgres,
    text: "Postgrsql",
  },
  {
    icon: FastApi,
    text: "FastApi",
  },
];

const mobileIcons = [
  {
    icon: Flutter,
    text: "Flutter",
  },
  {
    icon: Dart,
    text: "Dart",
  },
  {
    icon: ReactIcon,
    text: "React",
  },
  {
    icon: JavascriptIcon,
    text: "Javascript",
  },
  {
    icon: TailwindIcon,
    text: "Tailwind",
  },
];

const Techstack = () => {
  return (
    <div
      className="px-6 md:px-20 md:py-10 w-screen md:w-full items-center "
      id="tech-stack"
    >
      <div className="text-center my-16 w-2/4 items-center mx-auto relative">
        <p className="text-2xl md:text-4xl font-semibold text-[#F9FAFB]">Tech Stacks</p>
        <div className="bg-[#8a2be2] h-[3px] absolute w-[30%] md:left-[20%]" />
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className=" md:col-start-1 md:col-span-6 ">
          <p className="text-center font-thin text-xl text-white ">Frontend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-purple-400">
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-xs md:text-base">
                    {icon.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:col-end-13 md:col-span-6">
          <p className="text-center font-thin text-xl text-white ">Backend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-purple-400">
            {backendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full  my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-xs md:text-base">
                    {icon.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:col-start-4 md:col-span-6 ">
          <p className="text-center font-thin text-xl text-white ">Frontend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-purple-400">
            {mobileIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-xs md:text-base">
                    {icon.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
         .title{
          background: #8a2be2;
          bottom: -2px;
          content: "";
          height: 3px;
          left: 0;
          position: absolute;
          width: 30%;
        }
      `}</style>
    </div>
  );
};

export default Techstack;
