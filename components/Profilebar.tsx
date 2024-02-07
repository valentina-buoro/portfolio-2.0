// Sidebar.tsx

import React from "react";
import Arrow from "../public/arrow.svg";
import ProfileCard from "./Profile-card";
import TextAnimation from "./TextAnimation";
import Image from "next/image";

const Profilebar: React.FC = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-[#18151B] h-full w-80 fixed top-0 left-0 overflow-y-auto shadow-sm px-6">
      <ProfileCard />
      <div className="w-full bg-[#F9FAFB] h-[1px] my-10 opacity-40" />
    <TextAnimation/>
   
            <button className="flex justify-center items-center gap-2 text-lg text-white font-semibold p-4  bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 rounded-md">
           View My Resume

             <Image src={Arrow} alt="arrow" />
            </button>
          
    </nav>
  );
};

export default Profilebar;
