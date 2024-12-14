import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="px-4">
      {/* Breadcrumb Section */}
      <div className="ml-8 mt-8 md:ml-32 md:mt-20 flex flex-row justify-start overflow-hidden items-start space-x-3">
        <p className="text-sm md:text-1xl text-gray-400">Home</p>
        <p className="text-sm md:text-1xl"> / About</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col-reverse md:flex-row md:flex-wrap items-center gap-8 mt-10 md:mt-0">
        {/* Left Section for Text */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold ml-4 md:ml-20">Our Story</h1>
          <p className="text-base md:text-2xl mt-4 md:mt-5 ml-4 md:ml-20">
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping<br />
            marketplace with an active presence in Bangladesh. Supported<br />
            by a wide range of tailored marketing, data, and service solutions,<br />
            Exclusive has 10,500 sellers and 300 brands and serves 3<br />
            million customers across the region.
          </p>
          <p className="text-base md:text-2xl mt-3 ml-4 md:ml-20">
            Exclusive has more than 1 million products to offer, growing at a<br />
            very fast pace. Exclusive offers a diverse assortment in categories<br />
            ranging from consumer goods.
          </p>
        </div>

        {/* Right Section for Image */}
        <div className="w-full md:w-auto flex justify-center md:mt-20 md:mr-28">
          <Image 
            src="/shopping-img.png" 
            alt="Shopping" 
            width={837} 
            height={609} 
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
