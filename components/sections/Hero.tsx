import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero.jpg";

const Hero = () => {
  return (
    <div className="container">
      {/*<div className="mask">
        <Image className="into-img" src={HeroImg} alt="latoptop" />
  </div>*/}

      <div className="background-image">
        <div className="content linear flex flex-col ">
          <h1 className="pt-20 px-20 text-center font-bold text-6xl ">Crafting Digital Experiences with Code: Explore My Portfolio!</h1>
          <div className="sub-text py-6 text-center">
            <span>Excellent xyz</span>
          </div>
          <div className="sub-text flex flex-row justify-center">
            <button className="text-center p-4 my-4 bg-[#4D0071] rounded-md">
            <a href="https://www.linkedin.com/in/latoptop/" > View My Projects </a>
            </button>
          </div>
          <div className="pt-20 flex flex-row justify-between gap-10">
            <p className="text-white w-[30.8rem] text-left left">
              <p className="text-2xl font-bold mb-4">Get To Know Me</p>
              <i className="text-base text-white/80">
                {" "}
                I'm your full-stack maestro, orchestrating web wonders with
                Node.js and React. I turn your ideas into a symphony of code .
                Leveraging tools like Tailwind for styling and databases such as
                SQL and PostgreSQL, I turn your ideas into a symphony of code.
                I'm not just about aesthetics;I optimize for performance,
                ensuring your app is as swift as a caffeinated developer. 
                <br/>
                <br/>
                With a
                meticulous approach to detail and a focus on SEO best practices,
                I bring a technical prowess that transforms ideas into scalable,
                high-performance web solutions. Let's embark on a tech journey
                where every line of code is a note in the melody of efficiency.
                Your web kingdom deserves nothing less!
              </i>
            </p>
            <div className="right">
              <div className="pt-5 grid grid-cols-3 gap-2">
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Javascript</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>React</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Nodejs</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-4 gap-2">
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Graphql</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>SQL</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>GSAP</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Zustand</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-3 gap-2">
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Javascript</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>React</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Nodejs</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-4 gap-2">
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Graphql</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>SQL</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>GSAP</span>
                </div>
                <div className="text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Zustand</span>
                </div>
              </div>
              <div className="pt-2 grid grid-cols-3 gap-2">
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Javascript</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>React</span>
                </div>
                <div className="col-span-1 text-base font-semibold rounded-md bg-[#27232B] py-3 px-4 text-[#F9FAFB] hover:bg-[#F9FAFB] hover:text-[#27232B]">
                  <span>Nodejs</span>
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
          block-size: 100vh; /* Adjust height as needed */
          color: white; /* Text color */
          padding: 80px; /* Adjust padding as needed */
          background-color: black;
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
        .background-image h1,
        .background-image p,
        .background-image .right,
        .background-image .sub-text {
          position: relative;
          z-index: 1; /* Ensure text appears above the overlay */
        }

        .background-image h1 {
          font-size: 32px; /* Adjust font size as needed */
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