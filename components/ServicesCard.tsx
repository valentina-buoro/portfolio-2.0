
import Image from "next/image";
import { CardProps } from "../types/types";

const ServicesCard = ({ text, title, src }: CardProps) => {
  return (
    <div className="pt-3 flex flex-col  p-5">
      <Image src={src} alt="Careers" />
      <div className="flex-col items-start space-y-4 font-medium   tracking-tighter">
        <p className="text-base md:text-2xl text-justify text-white leading-6 md:leading-[28.8px] font-medium">
          {title}
        </p>
        <p className="text-base font-normal md:text-base text-white/85 ">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;