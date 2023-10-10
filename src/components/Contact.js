import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#fff] dark:bg-[#1a1a1a] flex justify-center items-center p-4 md:pt-60"
    >
      <form
        method="POST"
        action="https://getform.io/f/cc4dffe1-b1b3-4143-8767-f00c46c64c00"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa] dark:border-[#f5f5f5] text-zinc-800 dark:text-white">
            Contact
          </p>
          <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
            // Submit the form below or shoot me an email -
            dillonporter@hotmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] dark:bg-[#2c2c2c] p-2 dark:text-white"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] dark:bg-[#2c2c2c] dark:text-white"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] dark:bg-[#2c2c2c] p-2 dark:text-white"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white rounded bg-blue-900 dark:bg-[#2e2e2e] group border-current dark:border-[#3e3e3e] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#8892b0] dark:hover:bg-[#3e3e3e] hover:text-white hover:border-[#8892b0] dark:hover:border-[#4e4e4e]">
          <FaEnvelope className="mr-3" />
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
