import React from "react";

const TextAnimation = () => {
  const textStyles = 'block font-semibold leading-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-300 to-purple-700'
  return (
    <>
      <div className="flex flex-col " >
        <div className="container border  border-purple-400 rounded-md shadow-md">
          <div className="vertical-text text-center">
            <span className= {textStyles}>
              Frontend Development
            </span>
            <span className={textStyles}>
              Backend Development
            </span>
            <span className= {textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
            <span className= {textStyles}>
              Frontend Development
            </span>
            <span className= {textStyles}>
              Backend Development
            </span>
            <span className= {textStyles}>
              Database Management
            </span>
            <span className= {textStyles}>
              Mobile Development
            </span>
            <span className= {textStyles}>API Integration</span>
            <span className= {textStyles}>
              Frontend Development
            </span>
            <span className= {textStyles}>
              Backend Development
            </span>
            <span className= {textStyles}>
              Database Management
            </span>
            <span className= {textStyles}>
              Mobile Development
            </span>
            <span className= {textStyles}>API Integration</span>
            <span className= {textStyles}>
              Frontend Development
            </span>
            <span className= {textStyles}>
              Backend Development
            </span>
            <span className={textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
            
          </div>
        </div>
        <div className="container ">
          <div className="vertical-text1 text-center">
            <span className={textStyles}>
              Frontend Development
            </span>
            <span className={textStyles}>
              Backend Development
            </span>
            <span className={textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
            <span className={textStyles}>
              Frontend Development
            </span>
            <span className={textStyles}>
              Backend Development
            </span>
            <span className={textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
            <span className={textStyles}>
              Frontend Development
            </span>
            <span className={textStyles}>
              Backend Development
            </span>
            <span className={textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
            <span className="block leading-6 ">
              Frontend Development
            </span>
            <span className={textStyles}>
              Backend Development
            </span>
            <span className={textStyles}>
              Database Management
            </span>
            <span className={textStyles}>
              Mobile Development
            </span>
            <span className={textStyles}>API Integration</span>
          </div>
          
        </div>
       
      </div>
      
      <style jsx>{`
        .container {
          inline-size: 100%; /* Adjust as needed */
          /* Adjust as needed */
          position: relative;
          //overflow: hidden;
          block-size: 160px; /* Adjust as needed */
          overflow: hidden;
        }

        .vertical-text {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%;
          animation: slide-up 20s linear infinite;  /* Start the animation below the container */
          /* Adjust animation duration as needed */
        }
        .vertical-text1 {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%;
          animation: slide-up1 20s linear infinite;  /* Start the animation below the container */
         /* Adjust animation duration as needed */
        }
       
        .vertical-text span {
          display: block;
          line-height: 4; /* Adjust line height as needed */
          /* Adjust line height as needed */
        }
        .vertical-text1 span {
          display: block;
          line-height: 4;
          font-size: 18px /* Adjust line height as needed */
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
       
      `}</style>
    </>
  );
};

export default TextAnimation;
