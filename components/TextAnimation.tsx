import React from "react";

const TextAnimation = () => {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="container ">
          <div className="vertical-text text-center">
            <span className="block leading-6 text-white">
              Frontend Development
            </span>
            <span className="block leading-6 text-white">
              Backend Development
            </span>
            <span className="block leading-6 text-white">
              Database Management
            </span>
            <span className="block leading-6 text-white">
              Mobile Development
            </span>
            <span className="block leading-6 text-white">API Integration</span>
          </div>
        </div>
        <div className="container ">
          <div className="vertical-text1 text-center">
            <span className="block leading-6 text-white">
              Frontend Development
            </span>
            <span className="block leading-6 text-white">
              Backend Development
            </span>
            <span className="block leading-6 text-white">
              Database Management
            </span>
            <span className="block leading-6 text-white">
              Mobile Development
            </span>
            <span className="block leading-6 text-white">API Integration</span>
          </div>
        </div>
       
        
      </div>
      
      <style jsx>{`
        .container {
          inline-size: 100%; /* Adjust as needed */
          /* Adjust as needed */
          position: relative;
          //overflow: hidden;
          block-size: 200px; /* Adjust as needed */
          overflow: hidden;
        }

        .vertical-text {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%;
          animation: slide-up 10s linear infinite;  /* Start the animation below the container */
          /* Adjust animation duration as needed */
        }
        .vertical-text1 {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%;
          animation: slide-up1 10s linear infinite;  /* Start the animation below the container */
         /* Adjust animation duration as needed */
        }
        .vertical-text2 {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%; /* Start the animation below the container */
          animation: slide-up1 9s linear infinite; /* Adjust animation duration as needed */
        }

        .vertical-text span {
          display: block;
          line-height: 100px; /* Adjust line height as needed */
          /* Adjust line height as needed */
        }
        .vertical-text1 span {
          display: block;
          line-height: 100px; /* Adjust line height as needed */
          /* Adjust line height as needed */
        }
        

        @keyframes slide-up {
         0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        @keyframes slide-up1 {
         0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes slide-up2 {
         0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
};

export default TextAnimation;
