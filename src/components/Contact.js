import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-[800px] mx-auto p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa]">
            Contact
          </p>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Submit the form below or email me at <b>dillonporter@hotmail.com</b>
          </p>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/cc4dffe1-b1b3-4143-8767-f00c46c64c00"
          className="flex flex-col gap-4"
        >
          <input
            className="p-3 rounded bg-zinc-100 text-zinc-900 placeholder-zinc-500
                       dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400
                       focus:outline-none focus:ring-2 focus:ring-[#92b7fa]"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="p-3 rounded bg-zinc-100 text-zinc-900 placeholder-zinc-500
                       dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400
                       focus:outline-none focus:ring-2 focus:ring-[#92b7fa]"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-3 rounded bg-zinc-100 text-zinc-900 placeholder-zinc-500 h-44
                       dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400
                       focus:outline-none focus:ring-2 focus:ring-[#92b7fa]"
            name="message"
            placeholder="Message"
          />
          <button
            className="mx-auto mt-4 inline-flex items-center justify-center px-6 py-3
                       rounded font-semibold
                       bg-[#92b7fa] text-black hover:bg-[#00205B] hover:text-[#92b7fa]
                       dark:bg-[#1f2f6b] dark:text-zinc-100 dark:hover:bg-[#2b3b84]
                       transition"
          >
            Contact Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
