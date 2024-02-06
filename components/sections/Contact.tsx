import React from "react";

const Contact = () => {
  return (
    <div
      className="px-6 md:px-20  flex flex-col justify-center mt-16 w-screen md:w-full"
      id="contact"
    >
      <div className="flex flex-col md:flex-row">
        <div className=" bg-[#231F29] p-4 md:p-8 md:flex flex-col justify-around md:w-[22.4rem]">
          <div>
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Have an Awesome Project Idea?
              <span className="text-[#9C00E5]">Let’s Discuss</span>{" "}
            </p>
            <p className="text-white">
              Visualize your entire blockchain paragliding pilots.
            </p>
          </div>
          <div></div>
        </div>

        <div className=" h-[32rem] bg-[#EAEAEB] p-4 md:p-10 flex-1 flex flex-col gap-4 md:gap-8 items-center">
          <div>
            <label className="text-xs md:text-base font-medium">Your email address</label>
          <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-lg bg-white">
            <input
              className="bg-inherit w-11/12 border-none outline-none"
              placeholder="Email"
              id="email"
              name="email"
              value={""}
              onChange={() => {}}
            />
          </div>
          </div>
         <div>
          <label className="text-xs md:text-base font-medium">Email Subject</label>
         <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-lg bg-white">
            <input
              className="bg-inherit w-11/12 border-none outline-none"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={""}
              onChange={() => {}}
            />
          </div>
         </div>
          <div>
            <label className="text-xs md:text-base font-medium">Your Message</label>
          <div className="flex justify-between p-4 lg:w-[440px] w-[320px] h-24 rounded-lg bg-white">
            <textarea
              className="bg-inherit w-11/12 border-none outline-none h-full"
              placeholder="Message"
              id="message"
              name="message"
              value={""}
              onChange={() => {}}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
