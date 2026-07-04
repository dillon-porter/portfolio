import React from "react";
import Ecommerce from "../assets/e-commerce.png";
import Webdesign from "../assets/webdesign.jpg";
import SearchEngine from "../assets/SearchEngineOptimization.jpg";

const Services = () => {
  const cards = [
    {
      title: "Web Design & Development",
      img: Webdesign,
      text: "I design and build responsive websites that adapt beautifully across all screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.",
    },
    {
      title: "E-Commerce Solutions",
      img: Ecommerce,
      text: "From Shopify to WooCommerce, I create online stores that are secure, user-friendly, and optimized for conversions — helping businesses grow their digital presence.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      img: SearchEngine,
      text: "I implement SEO best practices to improve your site’s visibility and ranking on Google, helping you attract the right audience and boost organic traffic.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div className="text-center sm:text-left mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa]">
            Services
          </p>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">
            Web solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg
                         transition-transform duration-300 transform hover:-translate-y-1"
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                  {card.title}
                </h5>
                <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
