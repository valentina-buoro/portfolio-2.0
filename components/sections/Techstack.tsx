import React from "react";

import Image from "next/image";
import HtmlIcon from "../../public/htmlIcon.svg";
import CssIcon from "../../public/css.svg";
import TailwindIcon from "../../public/tailwind.svg";
import ReactIcon from "../../public/react.svg";
import JavascriptIcon from "../../public/javascript.svg";

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

const Techstack = () => {
  return (
    <div
      className="px-6 md:px-20 md:py-10 w-screen md:w-full items-center "
      id="tech-stack"
    >
      <div className="text-center my-16 w-2/4 items-center mx-auto">
        <p className="text-4xl font-semibold text-[#F9FAFB] ">Tech Stacks</p>
        <div className="bg-white h-1  w-2/3  my-3" />
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <div className=" md:col-start-1 md:col-span-6 ">
          <p className="text-center font-thin text-xl text-white ">Frontend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-[#5B63D3]" >
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-base">{icon.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:col-end-13 md:col-span-6">
        <p className="text-center font-thin text-xl text-white ">Backend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-[#5B63D3]">
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full  my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-base">{icon.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" md:col-start-4 md:col-span-6 ">
        <p className="text-center font-thin text-xl text-white ">Frontend</p>
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-[#5B63D3]">
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-base">{icon.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
