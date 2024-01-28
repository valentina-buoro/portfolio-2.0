import React from 'react'

const TextAnimation = () => {
  return (
   <>
   <div className="flex flex-col justify-center">
      <div className="container ">
       <div className="vertical-text text-center">
       <span className="block leading-6 text-white">Frontend Development</span>
        <span className="block leading-6 text-white">Backend Development</span>
        <span className="block leading-6 text-white">Database Management</span>
        <span className="block leading-6 text-white">Mobile Development</span>
        <span className="block leading-6 text-white">API Integration</span>
       </div>
      </div>
      </div>
      <style jsx>{`
        .container {
          inline-size: 100%; /* Adjust as needed */
          block-size: 200px; /* Adjust as needed */
          position: relative;
          overflow: hidden;
        }

        .vertical-text {
          position: absolute;
          inline-size: 100%;
          inset-block-start: 100%; /* Start the animation below the container */
          animation: slide-up 15s linear infinite; /* Adjust animation duration as needed */
        }

        .vertical-text span {
          display: block;
          line-height: 5; /* Adjust line height as needed */
        }
        .vertical-text span:focus {
  color: red; /* Change color when focused */
}

        @keyframes slide-up {
          0% {
            top: 100%; /* Start position */
          }
          100% {
            top: -300%; /* End position, adjust based on the number of lines */
          }
        }
      `}</style>
      </>
  )
}

export default TextAnimation