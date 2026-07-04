import React from "react";
import ServicesGuide from "../assets/Web_Design_Services.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#92b7fa]">
              About
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Helping small businesses build a stronger online presence.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              I’m Dillon Porter, a web designer and developer based in
              Newfoundland & Labrador. I create modern, mobile-friendly websites
              that help small businesses look professional, build trust, and
              make it easier for customers to find them online.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={ServicesGuide}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-xl bg-[#00205B] px-6 py-3 font-semibold text-white hover:bg-[#1f2f6b] transition"
              >
                View Services Guide
              </a>

              <a
                href="#contact"
                className="inline-flex justify-center rounded-xl border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 transition"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-2xl font-bold">
              Websites built with care, security, and long-term growth in mind.
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              With over 7 years of experience, I’ve worked on local business
              websites, eCommerce stores, custom WordPress projects, and a
              government web redesign for Veterans Affairs Canada’s Remembrance
              section.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              My work combines clean design, responsive development,
              accessibility, SEO, performance, and security best practices —
              giving clients a website that looks great and works reliably.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 dark:bg-zinc-950">
                <p className="text-3xl font-bold text-[#92b7fa]">7+</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Years of experience
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-zinc-950">
                <p className="text-3xl font-bold text-[#92b7fa]">WordPress</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Design, development & care
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-zinc-950">
                <p className="text-3xl font-bold text-[#92b7fa]">SEO</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Search-ready websites
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 dark:bg-zinc-950">
                <p className="text-3xl font-bold text-[#92b7fa]">Secure</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Backups, updates & protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;