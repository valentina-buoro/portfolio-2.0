import React from "react";

const Divider = () => {
  return (
    <div className="w-screen md:w-full ">
      <div className="h-14 bg-gradient-to-r from-purple-900 via-purple-300 to-purple-700">
        <div className="h-14 transform rotate-[-4.068deg] flex-1 bg-[#000;] border border-[#4D0071] border-x-8 border-x-black w-full flex items-center justify-center overflow-hidden">
          <div className="text-white text-center text-xs md:text-xl font-normal w-full flex lg:justify-around items-center scroll-containers primary-text">
            <span className="block mx-4">Coding</span>
            <span className="block mx-4">Debugging</span>
            <span className="block mx-4">Refactoring</span>
            <span className="block mx-4">Code Review</span>
            <span className="block mx-4">Planning</span>
            <span className="block mx-4">Research</span>
            <span className="block mx-4">Documentation</span>
          </div>
          <div className="hidden text-white text-center text-xs md:text-xl font-normal w-full lg:flex justify-around items-center scroll-container secondary-text">
          <span className="block mx-4">Coding</span>
            <span className="block mx-4">Debugging</span>
            <span className="block mx-4">Refactoring</span>
            <span className="block mx-4">Code Review</span>
            <span className="block mx-4">Planning</span>
            <span className="block mx-4">Research</span>
            <span className="block mx-4">Documentation</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scroll-containers {
          display: flex;
          white-space: nowrap;
          position: absolute;
          inset-inline-start: 0%;
          inset-block-start: 0%;
          block-size: inherit;
          inline-size: inherit;
          align-items: center;
        }

        .primary-text {
          animation: primary-text 20s linear infinite;
        }
        .secondary-text {
          animation: secondary-text 20s linear infinite;
        }

        @keyframes primary-text {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes secondary-text {
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

export default Divider;
