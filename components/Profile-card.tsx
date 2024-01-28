import React from "react";
import Github from "../public/github.svg";
import Twitter from "../public/twitter.svg";
import Linkedin from "../public/linkedin.svg";
import Email from "../public/email.svg";
import Profile from "../public/profileImg.png";
import Image from "next/image";

const socialRoutes = [
  {
    icon: Github,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Twitter,
    label: "Inventory",
    label2: "List of Medicines",
    href: "/inventory",
    href2: "/list-of-medicines",
    collapsible: true,
  },
  {
    icon: Linkedin,
    label: "Reports",
    label2: "Sales Report",
    href: "/reports",
    href2: "/sales-report",
  },
  {
    icon: Email,
    label: "Configuration/settings",
    href: "configure",
  },
];

const ProfileCard = () => {
  return (
    <div className="w-[16.875rem] h-[15.813rem] bg-[#27222B] mt-[1.938rem] py-8 shadow-lg flex flex-col justify-center items-center rounded-lg">
      <div className="flex items-center justify-center w-24">
        <Image src={Profile} alt="profile" className="w-full" />
      </div>
      <div className="font-medium text-lg leading-[1.35rem] text-white">
        Valentina Buoro
      </div>
      <div className="text-[#8C8C8E] font-medium leading-[1.35rem] text-sm my-4">
        Software Developer
      </div>
      <div className="flex gap-x-2">
        {socialRoutes.map((route, index) => {
          return (
            <span key={index} className="flex items-center ">
              <Image src={route.icon} alt={route.icon} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;

/*border-radius: 500px;
background: url(<path-to-image>), lightgray 0px -10.619px / 100% 110.619% no-repeat;*/
