import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdoqzkgz");
  if (state.succeeded) {
    return <div className="bg-[#4D0071] text-3xl text-center p-4 lg:p-8 text-white italic">Your message has been delivered!</div>;
  }

  return (
    <div
      className="px-6 md:px-20  flex flex-col justify-center mt-16 w-screen md:w-full"
      id="contact" data-aos="fade-up"
    >
      <div className="text-center my-16 w-2/4 items-center mx-auto relative">
        <p className="text-2xl md:text-4xl font-semibold text-[#F9FAFB]">
          Contact Me
        </p>
        <div className="bg-[#8a2be2] h-[3px] absolute w-[30%] md:left-[20%]" />
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" bg-[#231F29] p-4 md:p-8 md:flex flex-col justify-around md:w-[22.4rem] rounded-t-lg md:rounded-s-lg">
          <div>
            <p className="text-white text-2xl md:text-5xl font-semibold">
              Have an Awesome Project Idea?
              <br />
              <span className="text-[#9C00E5]">Let’s Discuss</span>{" "}
            </p>
          </div>
          <div></div>
        </div>

        <form
          className=" h-[32rem] bg-[#EAEAEB] py-4 md:p-10 flex-1 flex flex-col gap-4 md:gap-8 items-center justify-around rounded-b-lg md:rounded-e-lg"
          onSubmit={handleSubmit}
        >
          <div className="w-11/12">
            <label className="text-xs md:text-base font-normal">
              Your email address
            </label>
            <div className="flex justify-between p-2 md:p-4 w-full rounded  md:rounded-lg bg-white">
              <input
                className="bg-inherit w-11/12 border-none outline-none placeholder:text-xs placeholder:md:text-sm"
                placeholder="Email"
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          
          <div className="w-11/12">
            <label className="text-xs md:text-base font-normal">
              Your Message
            </label>
            <div className="flex justify-between p-2 md:p-4  w-full h-32 rounded md:rounded-lg bg-white">
              <textarea
                className="bg-inherit w-11/12 border-none outline-none h-full placeholder:text-xs placeholder:md:text-sm"
                placeholder="Message..."
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-[#4D0071] text-white px-4 py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
