import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from '../public/spinner.svg'

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(delay);
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="animate-spin">
          <Image src={Spinner} alt="loading" />
           </div>
      </div>
    );
  }
  return (
    <Component {...pageProps} />
  );
};

export default App;
