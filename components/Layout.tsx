import React, { ReactNode } from "react";
import type { Metadata } from "next"

import Profilebar from "./Profilebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Valentina Buoro",
  description: "z",
};


type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  
    <div className=" h-full flex  bg-black m-0 p-0">
      <Profilebar />
      <main className="md:ml-[21rem] md:mr-[4.375rem] box-border m-0 p-0 w-screen md:w-full md:z-10 bg-[#18151B] ">
        {/* Main content goes here */}
        {props.children}
        {/* Add your main content */}
        <Footer/>
      </main>
      <Navbar />
    </div>
  

    

);

export default Layout;


{/* <style jsx global>{`
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
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(0, 0, 0, 0.05);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>*/}