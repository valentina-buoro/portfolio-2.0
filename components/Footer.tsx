import React from "react";
import Arrowup from '../public/arrowup.svg'
import Image from "next/image";

const Footer = () => {
const [show, setShow] = React.useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function changeColor(){
    if(window.scrollY >= 100){
        setShow(true)
    }else{
        setShow(false)
    }
}

React.useEffect(
  ()=>{
      window.addEventListener('scroll', changeColor)
  }
)


  return (
    <div className="bg-[#09060C] h-20">
      Footer
      <button
        onClick={scrollToTop}
        className={show? "md:hidden fixed bottom-10 right-0 text-xs font-semibold text-black p-2 rounded  bg-white/70 flex flex-col justify-center items-center" : 'hidden'}
      >
        <Image src={Arrowup} alt ='arrow' width={20} className="font-bold animate-bounce"/>
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
