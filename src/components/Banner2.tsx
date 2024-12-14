import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="px-4">
      {/* Categories Header */}
      <div className="h-[40px] w-[128px] overflow-hidden gap-[16px] flex mx-auto sm:ml-[150px] mt-10">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <h2 className="font-poppins h-[20px] w-[90px] pt-[10px] font-semibold text-[#DB4444]">
          Categories
        </h2>
      </div>

      {/* Browse By Category Header */}
      <div className="flex flex-col sm:flex-row justify-between mx-auto sm:ml-[150px] mt-4">
        <div>
          <h2 className="w-full sm:w-[379px] h-[48px] font-inter font-semibold text-xl sm:text-2xl text-center sm:text-left">
            Browse By Category
          </h2>
        </div>
        <div className="flex justify-center sm:mr-64 gap-3 mt-4 sm:mt-0">
          <button>
            <ArrowLeft className="bg-gray-200 rounded-full w-10 h-10" />
          </button>
          <button>
            <ArrowRight className="bg-gray-200 rounded-full w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Category Items */}
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 mt-8">
        {[
          { src: '/cellphone.png', label: 'Phones' },
          { src: '/computer.png', label: 'Computers' },
          { src: '/watch.png', label: 'SmartWatch' },
          { src: '/camera.png', label: 'Camera' },
          { src: '/headphone.png', label: 'HeadPhones' },
          { src: '/game.png', label: 'Gaming' },
        ].map((item, index) => (
          <div
            key={index}
            className={`border w-28 h-28 sm:w-40 sm:h-40 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 ${
              item.label === 'Camera' ? 'bg-red-500' : 'border-gray-400'
            }`}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={64}
              height={64}
              className={`${
                item.label === 'Camera' ? 'filter invert' : ''
              }`}
            />
            <p
              className={`mt-2 text-sm sm:text-lg font-medium ${
                item.label === 'Camera' ? 'text-white' : ''
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Divider */}
      <div className="mt-20 sm:mt-40 w-full">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );
};

export default Banner2;
