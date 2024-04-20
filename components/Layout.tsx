import React, { ReactNode } from "react";
import type { Metadata } from "next"


import Profilebar from "./Profilebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Valentina Buoro",
  description: "Valentina Buoro's portfolio website",
  icons: {
    icon: '/public/favicon.ico', // /public path
  },
  applicationName: "Valentina Buoro",
  keywords: "Valentina Buoro, Software Developer, Portfolio, Web Developer, React Developer, Full Stack Developer, Frontend Developer ",
};


type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  
    <div className=" h-full flex  bg-black m-0 p-0">
      <Profilebar />
      <main className="md:ml-[21rem] md:mr-[4.375rem] w-fit  bg-[#18151B] relative overflow-x-hidden ">
        {/* Main content goes here */}
        {props.children}
        {/* Add your main content */}
        <Footer/>
      </main>
      <Navbar />

      <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background:black;
      
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
    </div>
  

    

);

export default Layout;


