import React from "react";
import Typewriter from "typewriter-effect";
import MobileNavbar from "../MobileNavbar";
import Arrow from "../../public/arrow.svg";
import Github from "../../public/github.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import Email from "../../public/email.svg";
import Image from "next/image";
import Router from "next/router";

const socialRoutes = [
  {
    icon: Github,
    label: "Dashboard",
    href: "https://github.com/valentina-buoro",
  },
  {
    icon: Twitter,
    label: "Inventory",
    href: "https://twitter.com/valentinaBuoro",
    collapsible: true,
  },
  {
    icon: Linkedin,
    label: "Reports",
    href: "https://www.linkedin.com/in/valentina-buoro/",
  },
  {
    icon: Email,
    label: "Email",
    href: "mailto:valentinabuoro4@gmail.com",
  },
];


const Hero = () => {
  const buttonStyle =
    "col-span-1 text-[9px] md:text-xs lg:text-base text-center font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]";
  return (
    <div className="container w-screen  md:w-full mx-auto ">
      {/*<div className="mask">
        <Image className="into-img" src={HeroImg} alt="latoptop" />
  </div>*/}

      <div className="w-screen md:w-full background-image  p-6" id='home'>
        <MobileNavbar />
        <div className="content linear flex flex-col items-center  ">
          <p className="title-text hidden md:block mt-16 md:mt-4 md:px-20 text-center font-bold text-3xl md:text-6xl ">
            Crafting Digital Experiences with Code: Explore My Portfolio!
          </p>
          <div className="md:hidden mt-40">
            <h1 className="text-white font-bold text-2xl sub-text text-center" data-aos="fade-right" data-aos-duration="2000">
              HELLO &#128075;, I'M VALENTINA BUORO
            </h1>
            
          </div>
          <div className=" sub-text flex  py-4 md:pt-6 text-center">
            <span className="">
              {"<>"}
            </span>
          <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "I build Machine Learning Models",
                      "I Develop Web Applications",
                      "User Friendly and Scalable",
                      "I Develop Mobile Applications",
                      "I Develop Backend Applications",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                 <span>
              {"</>"}
            </span>
          </div>
          <button className=" flex sub-text md:hidden justify-center items-center gap-2 text-base text-white font-semibold p-3 my-3  bg-[#4D0071]" onClick={()=>window.open('https://docs.google.com/document/d/1SkkC9rYNVfYdToJ3HoDlOJj-eY8nW9jHFG5SKeg9x28/edit?usp=sharing') }>
            My Resume
            
            </button>

          <div className="flex flex-col  sub-text my-7  md:hidden">
            <div className="flex gap-x-4  py-2 px-7">
              {socialRoutes.map((route, index) => {
                return (
                  <span
                    key={index}
                    className="flex items-center justify-around "
                  >
                    <Image src={route.icon} alt={route.icon}  onClick={() =>
              Router.push( `${route.href}`)
            }/>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="hidden sub-text md:flex flex-row justify-center">
            <button className="flex items-center gap-2 font-medium p-4 my-2 md:my-4 bg-[#4D0071] rounded-md"
             onClick={() => Router.push(`/projects`)}>
            
                {" "}
                View My Projects{" "}
                <Image src={Arrow} alt="arrow" />
           
            </button>
          </div>
          <div
            className="py-10  flex flex-col md:flex-row md:justify-between gap-14 md:gap-10"
            id="about-me"
          >
            <div className="text-white w-screen md:w-[30.8rem] text-left px-6 md:px-0 left" data-aos="fade-right">
              <p className="text-2xl font-bold mb-4">Get To Know Me</p>
              <i className=" text-sm md:text-base text-white/80">
                {" "}
                Hi!👋🏼 My name is Valentina. I'm a language-agnostic software developer and machine learning engineer with more than 2 years experience building scalable and responsive software applications 👩🏽‍💻. I am passionate about delivering high-quality solutions, leveraging the most suitable languages and frameworks to meet specific engineering needs effectively.

                <br />
                <br />
                <span className="hidden md:block">
                 
                  
                </span>
                <p>Outside of work, I enjoy reading fiction, with a particular fondness for sci-fi and Greek mythology⚡️🧝🏾‍♀️.</p>
              </i>
            </div>
            <div className="right px-6 md:px-0 " data-aos="fade-left">
              <div className="pt-5 grid grid-cols-3 gap-2">
                <div className={buttonStyle}>
                  <span>Python</span>
                </div>
                <div className={buttonStyle}>
                  <span>LangChain</span>
                </div>
                <div className={buttonStyle}>
                  <span>FastAPI</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-4 gap-2">
                <div className={buttonStyle}>
                  <span>Graphql</span>
                </div>
                <div className={buttonStyle}>
                  <span>SQL</span>
                </div>
                <div className={buttonStyle}>
                  <span>React</span>
                </div>
                <div className={buttonStyle}>
                  <span>Pytorch</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-3 gap-2">
                <div className={buttonStyle}>
                  <span>Javascript</span>
                </div>
                <div className={buttonStyle}>
                  <span>Typescript</span>
                </div>
                <div className={buttonStyle}>
                  <span>Tensorflow</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-4 gap-2">
                <div className={buttonStyle}>
                  <span>ShadCN</span>
                </div>
                <div className={buttonStyle}>
                  <span>HuggingFace</span>
                </div>
                <div className={buttonStyle}>
                  <span>GitHub</span>
                </div>
                <div className={buttonStyle}>
                  <span>ReactNative</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-3 gap-2">
                <div className={buttonStyle}>
                  <span>Tailwind</span>
                </div>
                <div className={buttonStyle}>
                  <span>NextJS</span>
                </div>
                <div className={buttonStyle}>
                  <span>Postgresql</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
        }

        .background-image {
          background-image: url("hero.jpg"); /* Replace 'path/to/your/image.jpg' with your image path */
          background-size: cover;
          background-position: center;
          color: white; /* Text color */
          background-color: black;
          width: 100%;
        }
        .background-image::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          inline-size: 100%;
          block-size: 100%;
          background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity here */
        }

        /* Style for the text or content */
        .background-image .title-text,
        .background-image .left,
        .background-image .right,
        .background-image .sub-text {
          position: relative;
          z-index: 1; /* Ensure text appears above the overlay */
        }
      `}</style>

      {/*<style jsx>{`
        .mask {
          inline-size: 100%;
          block-size: 100vh;
          position: relative;
        }

        .into-img {
          inline-size: 100%;
          block-size: 120%;
          background-size: cover;
          background-position: center;
          object-fit: cover;
        }

        .mask::after {
          content: "";
          inline-size: 100%;
          block-size: 100%;
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          background-color: black;
          opacity: 0.7;
        }
        .hero {
          block-size: 100%;
          inline-size: 100%;
        }

        .hero .content {
          
          
          position: absolute;
          transform: translate(-50%, -50%);
          inset-block-start: 50%;
          inset-inline-start: 50%;
          text-align: center;        }

        .hero .content h1 {
          font-size: 4rem;
          padding: 0.6rem 0 1.5rem;
          transition: left 2s ease;
          animation: moveInLeft 3s ease-out;
        }

        .hero .content p {
          font-family: "Inter", sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          text-transform: uppercase;
          animation: moveInLeft 3s ease-out;
        }

        .hero .content .left {
          font-family: "Inter", sans-serif;

          animation: moveInRight 3s ease-out;
        }
        .hero .content .right {
          font-family: "Inter", sans-serif;

          animation: moveInLeft 3s ease-out;
        }
        @media screen and (max-inline-size: 640px) {
          .hero .content h1 {
            font-size: 3rem;
            padding: 0.6rem 0 1.5rem;
          }

          .hero .content p {
            font-size: 1.4rem;
          }

          .button {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }

        @keyframes moveInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }

          100% {
            opacity: 1;
            transform: translate(0);
          }
        }
        @keyframes moveInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }

          100% {
            opacity: 1;
            transform: translate(0);
          }
        }
      `}</style>*/}
    </div>
  );
};

export default Hero;
