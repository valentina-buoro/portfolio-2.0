// Sidebar.tsx

import React from "react";
import {  usePathname } from "next/navigation";



const MobileNavbar: React.FC = () => {

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const pathname = usePathname();

  const activeRoute = pathname === "/tech-stack" 

  return (
    <nav className="bg-[#18151B] h-12 w-11/12 fixed top-4 left-0 overflow-y-auto mx-4 shadow-sm md:hidden">
       <div className="flex justify-around items-center text-sm p-4">
        <span className="block"><a  onClick={() => scrollToSection('home')}>Home</a></span>
        <span className="block"><a  onClick={() => scrollToSection('projects')}>Projects</a></span>
        <span className="block"><a  onClick={() => scrollToSection('tech-stack')}>Tech Stack</a></span>
        <span className="block"><a  onClick={() => scrollToSection('services')}>Services</a></span>
        <span className="block"><a  onClick={() => scrollToSection('blog')}>Blog</a></span>
        <span className="block"><a  onClick={() => scrollToSection('contact')}>Contact</a></span>
       
       </div>
      
    </nav>
  );
};

export default MobileNavbar;