import React from 'react';
import Ecommerce from "../assets/e-commerce.png"
import Webdesign from "../assets/webdesign.jpg"
import SearchEngine from "../assets/SearchEngineOptimization.jpg"

const Services = () => {
    return (
        <div name="services" className="w-full h-full flex justify-center items-center pt-60 bg-[#fff] text-black-300">
             <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full md:pb-60'>
          <div className='text-center sm:text-left'>
              <p className='text-4xl font-bold inline border-b-4 border-[#92b7fa]'>Services</p>
              <p className="mt-2 mb-5 max-w-2xl text-xl text-gray-500">Website services that I offer</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div class="flex justify-center">
                <div class="rounded-lg shadow-2xl bg-white max-w-sm">
                    <img class="rounded-t-lg" src={Webdesign} alt=""/>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Web Design and Development</h5>
                    <p class="text-gray-700 text-base mb-4">
                    When I design and develop websites I go for mobile devices first which aims to help you to ensure that your users' experience is compatible on any device.
                    </p>
                    </div>
                </div>
                </div>
                <div class="flex justify-center">
                <div class="rounded-lg shadow-2xl bg-white max-w-sm">
                    <img class="rounded-t-lg" src={Ecommerce} alt=""/>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">E-commerce</h5>
                    <p class="text-gray-700 text-base mb-4">
                    Creating an online store can be exciting. Shopify or WooCommerce is highly recommended for this type of website. It allows anyone to set up an online store and sell their products and services.
                    </p>
                    </div>
                </div>
                </div>
                <div class="flex justify-center">
                <div class="rounded-lg shadow-2xl bg-white max-w-sm">
                    <img class="rounded-t-lg" src={SearchEngine} alt=""/>
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Search Engine Optimization</h5>
                    <p class="text-gray-700 text-base mb-4">
                    Search engine optimization (SEO) is the practice of getting your website to rank higher on a search engine results such as Google so that you receive more user traffic.
                    </p>
                    </div>
                </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Services