// Sidebar.tsx

import React from "react";
import Link from "next/link";
import Sun from "../public/sun.svg"
import Home from "../public/home.svg"
import Person from"../public/person.svg"
import TechStack from "../public/techStack.svg"
import Services from "../public/services.svg"
import Recommendation from "../public/recommendation.svg"
import Contact from "../public/email.svg"
import Image from "next/image";

const socialRoutes = [
  {
    icon: Sun,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Home,
    label: "Inventory",
    label2: "List of Medicines",
    href: "/inventory",
    href2: "/list-of-medicines",
    collapsible: true,
  },
  {
    icon: Person,
    label: "Reports",
    label2: "Sales Report",
    href: "/reports",
    href2: "/sales-report",
  },
  {
    icon: TechStack,
    label: "Configuration/settings",
    href: "configure",
  },
  {
    icon: Services,
    label: "Reports",
    label2: "Sales Report",
    href: "/reports",
    href2: "/sales-report",
  },
  {
    icon: Recommendation,
    label: "Configuration/settings",
    href: "configure",
  },
  {
    icon: Contact,
    label: "Configuration/settings",
    href: "configure",
  },
]



const Navbar: React.FC = () => {
  return (
    <nav className=" hidden md:flex flex-col bg-[#18151B] h-full w-[4.1rem] fixed top-0 right-0 overflow-y-auto shadow-sm">
       <div className="flex flex-col gap-y-9 items-center mt-9">
        {socialRoutes.map((route, index) => {
          return (
            <span key={index} className="flex items-center ">
              <Image src={route.icon} alt={route.icon} />
            </span>
          );
        })}
      </div>
      
    </nav>
  );
};

export default Navbar;