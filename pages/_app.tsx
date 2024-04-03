import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "./globals.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(()=>{
    AOS.init(
      {
        offset: 120,
        delay: 0,
        duration: 1200, 
        easing: 'ease', 
        once: true, 
        mirror: false,
      })
  })
  return (
    <Component {...pageProps} />
  );
};

export default App;
