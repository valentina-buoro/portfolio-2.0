// Sidebar.tsx

import React from "react";
import { usePathname } from "next/navigation";

const MobileNavbar: React.FC = () => {

    const [color, setColor] = React.useState(false)
    function changeColor(){
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    React.useEffect(
        ()=>{
            window.addEventListener('scroll', changeColor)
        }
    )


  const [active, setActive] = React.useState(false);
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(!active);
    }
  };
  const pathname = usePathname();

  const activeRoute = pathname === "/tech-stack";

  return (
    <nav className={color? "bg-[#4D0071]/40 z-30 h-12 w-11/12 fixed top-4 left-0 overflow-y-auto mx-4 py-4 px-0 rounded-2xl shadow-sm md:hidden": "bg-transparent z-30 h-12 w-11/12 fixed top-4 left-0 overflow-y-auto mx-4 py-4 px-0 rounded-2xl shadow-sm md:hidden"}>
      <div className="flex justify-around items-center text-sm font-semibold ">
      <span className="li">
          <a onClick={() => scrollToSection("about-me")}>About Me</a>
        </span>
        <span className="li">
          <a onClick={() => scrollToSection("blog")}>Blog</a>
        </span>
        <span className="li active:border-b-white">
          <a onClick={() => scrollToSection("projects")}>Projects</a>
        </span>
       
        <span className="li">
          <a onClick={() => scrollToSection("tech-stack")}>Tech Stack</a>
        </span>
        
        
      </div>
      <style jsx>{`
        .li {
          margin: auto;
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
        }
        .li::after {
          content: "";
          display: block;
          border-bottom: solid 3px #ffffff;
          padding-bottom: 1%;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }
        .li:hover:after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default MobileNavbar;
