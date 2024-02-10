import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    text: "",
  });

  async function create() {
    // Clear form inputs
    setFormData({
      from: "",
      subject: "",
      text: "",
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update form data with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="px-6 md:px-20  flex flex-col justify-center mt-16 w-screen md:w-full"
      id="contact"
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
              <span className="text-[#9C00E5]">Let’s Discuss</span>{" "}
            </p>
          </div>
          <div></div>
        </div>

        <form
          className=" h-[32rem] bg-[#EAEAEB] p-4 md:p-10 flex-1 flex flex-col gap-4 md:gap-8 items-center rounded-b-lg md:rounded-e-lg"
          onSubmit={create}
        >
          <div>
            <label className="text-xs md:text-base font-medium">
              Your email address
            </label>
            <div className="flex justify-between p-4 lg:w-[440px] w-full  rounded-lg bg-white">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Email"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-xs md:text-base font-medium">
              Email Subject
            </label>
            <div className="flex justify-between p-4 lg:w-[440px] w-full  rounded-lg bg-white">
              <input
                className="bg-inherit w-11/12 border-none outline-none"
                placeholder="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="text-xs md:text-base font-medium">
              Your Message
            </label>
            <div className="flex justify-between p-4 lg:w-[440px] w-full h-24 rounded-lg bg-white">
              <textarea
                className="bg-inherit w-11/12 border-none outline-none h-full"
                placeholder="Message"
                id="text"
                name="text"
                value={formData.text}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
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
