// Sidebar.tsx

import React from "react";

import ProfileCard from "./Profile-card";
import TextAnimation from "./TextAnimation";

const Profilebar: React.FC = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-[#18151B] h-full w-80 fixed top-0 left-0 overflow-y-auto shadow-sm px-6">
      <ProfileCard />
      <div className="w-full bg-[#F9FAFB] h-[1px] my-10 opacity-40" />
    <TextAnimation/>
   
            <button className="text-center text-lg text-white font-semibold p-4  bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 rounded-md">
            <a href="https://www.linkedin.com/in/latoptop/" > View My Resume </a>
            </button>
          
    </nav>
  );
};

export default Profilebar;
