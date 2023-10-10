import React from "react";
import Ecommerce from "../assets/E-commerce.png";
import Webdesign from "../assets/Website-design-development.png";
import SearchEngine from "../assets/seo-1.jpg";
import Mobilefirst from "../assets/mobile-first-one.jpg";
import Responsive from "../assets/responsive-design.png";
import Enhance from "../assets/enhance.jpg";
import Compatible from "../assets/website-compatible.jpg";
import Accessible from "../assets/Website-accessibility.png";
import Maintenance from "../assets/website-maintenance.png";

const serviceData = [
  {
    image: Webdesign,
    title: "Professional Web Design and Development Services",
    description:
      "We adopt a user-centric approach to web design and development, placing a strong emphasis on mobile-first design principles. Our primary objective is to ensure that your website delivers a seamless user experience across all devices.",
  },
  {
    image: Mobilefirst,
    title: "Mobile-First Design Strategy",
    description:
      "We understand the growing significance of mobile devices in today's digital landscape. Thus, we prioritize mobile devices during the design and development process. By doing so, we ensure that your website not only adapts flawlessly to various screen sizes but also enhances user engagement and satisfaction.",
  },
  {
    image: Enhance,
    title: "Enhanced User Experience",
    description:
      "With our mobile-first approach, we strive to create websites that are not only visually appealing but also highly functional and user-friendly. By focusing on the needs and preferences of your target audience, we optimize the website's layout, navigation, and interactive elements to provide an exceptional user experience.",
  },
  {
    image: Compatible,
    title: "Device Compatibility",
    description:
      "Our expert team ensures that your website functions seamlessly on a wide range of devices, including smartphones, tablets, laptops, and desktop computers. Regardless of the platform your visitors use, your website will offer consistent performance and accessibility.",
  },
  {
    image: Responsive,
    title: "Stay Ahead in the Digital Age",
    description:
      "In today's competitive online landscape, a mobile-friendly website is essential for business success. By availing of our professional web design and development services, you can stay ahead in the digital age, reaching a broader audience and maximizing your online presence.",
  },
  {
    image: Ecommerce,
    title: "E-commerce",
    description:
      "Are you eager to launch your own thriving online store? Look no further! With my expertise in e-commerce, I recommend harnessing the power of Shopify or WooCommerce for your website, enabling you to effortlessly showcase and sell products and services.",
  },
  {
    image: Accessible,
    title: "Website Accessibility",
    description:
      "Empower Your Business, Welcome All Users! Enhance your online presence and open new avenues of growth by ensuring your website is accessible to all individuals, regardless of disabilities or impairments. Catering to a diverse audience not only demonstrates inclusivity but also boosts customer engagement and loyalty.",
  },
  {
    image: SearchEngine,
    title: "Search Engine Optimization",
    description:
      "Search Engine Optimization (SEO) encompasses the strategic methodologies aimed at enhancing a website's visibility and ranking within search engine results, notably on platforms like Google, with the ultimate objective of driving increased user traffic to the site.",
  },
  {
    image: Maintenance,
    title: "Website Maintenance",
    description:
      "To ensure the continual functionality and relevance of your website, granting clients peace of mind. Through our proactive approach, we diligently address potential issues, perform timely updates, and implement necessary optimizations to keep your website up-to-date, secure, and performing at its best.",
  },
];

const ServiceCard = ({ image, title, description }) => (
  <div className="flex justify-center">
    <div className="rounded-lg shadow-2xl bg-white dark:bg-gray-800 max-w-sm">
      <img
        className="rounded-t-lg object-cover h-48 w-96"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h5 className="text-gray-900 dark:text-gray-100 text-xl font-bold mb-2">
          {title}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 text-lg mb-4">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div
      name="services"
      className="w-full h-full flex justify-center items-center pt-60 bg-[#fff] dark:bg-[#1a1a1a] text-black dark:text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:pb-60">
        <div className="text-center sm:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-[#92b7fa] dark:border-[#f5f5f5]">
            Services
          </p>
          <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
            Website services that I offer
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
