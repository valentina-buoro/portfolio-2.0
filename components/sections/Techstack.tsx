import React from "react";
import Slider from "react-slick";
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
      className="px-6 md:px-20 md:py-10 h-[50vh] flex flex-col w-screen md:w-full overflow-hidden "
      id="tech-stack"
    >
      <div className="text-center my-6">
        <p className="text-4xl font-semibold text-[#F9FAFB]">My Tech Stacks</p>
      </div>

      <div className=" relative">
        <div className="text-center">
          <p className="text-xl my-2 font-semibold text-[#F9FAFB]">
            Frontend Development
          </p>
        </div>
        <div className="flex">
          <div className="flex scroll-container primary ">
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-48 mx-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                >
                  <div>
                    <Image src={icon.icon} alt={icon.icon} />
                  </div>
                  <span className="text-[#F9FAFB] text-base">{icon.text}</span>
                </div>
              );
            })}
          </div>
          <div className="flex scroll-container secondary ">
            {frontendIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="flex w-48 mx-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
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

      {/*<div className="mb-8">
      <div className="text-center">
        <p className="text-xl mb-2 font-semibold text-[#F9FAFB]">Mobile Development</p>
      </div>
      <div className="flex gap-x-5 justify-between">
        {frontendIcons.map((icon, index) => {
          return (
            <div
              key={index}
              className="flex flex-col max-w-[150px] items-center w-full py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
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
      <div className="">
      <div className="text-center">
        <p className="text-xl mb-2 font-semibold text-[#F9FAFB]">Backend Development</p>
      </div>
      <div className="flex gap-x-5 justify-between">
        {frontendIcons.map((icon, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-full py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
            >
              <div>
                <Image src={icon.icon} alt={icon.icon} />
              </div>
              <span className="text-[#F9FAFB] text-base">{icon.text}</span>
            </div>
          );
        })}
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
      </div>*/}
      <style jsx>{`
.scroll-container {
  display: flex;
  white-space: nowrap;
  position: absolute;
  left: 0%;
  top: 0%;
  height: inherit;
  width: inherit;
}

.primary {
  animation: primary 50s linear infinite;
}
.secondary {
  animation: secondary 50s linear infinite;
}

@keyframes primary {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes secondary {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
      
        /*@keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
           
          }
          
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .scroll-item {
          inline-size: 100%; 
          float: inline-start; 
        }*/
      `}</style>
    </div>
  );
};

export default Techstack;
