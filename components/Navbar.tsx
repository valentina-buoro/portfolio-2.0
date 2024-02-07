// Sidebar.tsx

import React from "react";
import {  usePathname } from "next/navigation";
import Sun from "../public/sun.svg"
import Home from "../public/home.svg"
import Person from"../public/person.svg"
import Projects from "../public/projects.svg"
import TechStack from "../public/techStack.svg"
import Services from "../public/services.svg"
import Recommendation from "../public/recommendation.svg"
import Contact from "../public/email.svg"
import Image from "next/image";


const socialRoutes = [
  {
    icon: Sun,
    label: "Dashboard",
  },
 /* {
    icon: Home,
    label: "Home",
    href: "/",
   
    collapsible: true,
  },*/
  {
    icon: Person,
    label: "About me",
    href: "about-me",
  },
  {
    icon: Projects,
    label: "Projects",
    href: "projects",
  },
  {
    icon: TechStack,
    label: "Tech Stack",
    href: "tech-stack",
  },
  {
    icon: Services,
    label: "Services",
    href: "services",
  },
  {
    icon: Recommendation,
    label: "Blog",
    href: "blog",
  },
  {
    icon: Contact,
    label: "Contact",
    href: "contact",
  },
]



const Navbar: React.FC = () => {

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const pathname = usePathname();

  const activeRoute = pathname === "/tech-stack" 

  return (
    <nav className=" hidden md:flex flex-col bg-[#18151B] h-full w-[4.1rem] fixed top-0 right-0 overflow-y-auto shadow-sm">
       <div className="flex flex-col gap-y-9 items-center mt-9 ">
        {socialRoutes.map((route, index) => {
          return (
            <a key={index} className={activeRoute ? 'flex items-center bg-green-600 ' : 'flex items-center '} onClick={() => scrollToSection(route.href)}>
              <Image src={route.icon} alt={route.icon} />
            </a>
          );
        })}
      </div>
      
    </nav>
  );
};

export default Navbar;