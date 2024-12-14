import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mt-5 overflow-hidden">
      <hr />
      <div className="flex flex-col md:flex-row mt-6">
        <div className="flex flex-col text-black text-2xl">
          <ul className="px-[50px] md:px-[200px] space-y-4 relative">
            {/* Line */}
            <div
              className="hidden md:block absolute top-0 bottom-0 border-l-2 border-gray-300"
              style={{
                right: '195px', // Default for desktop
              }}
              data-style-line
            ></div>

            <li className="flex items-center relative">
              Women's Fashion <ChevronRight className="ml-2" />
            </li>
            <li className="flex items-center relative">
              Men's Fashion <ChevronRight className="ml-2" />
            </li>
            <li className="relative">Electronics</li>
            <li className="relative">Home &apos; Lifestyle</li>
            <li className="relative">Medicine</li>
            <li className="relative">Sports &apos; Toys</li>
            <li className="relative">Baby's Toys</li>
            <li className="relative">Groceries &apos; Pets</li>
            <li className="relative">Health &apos; Beauty</li>
          </ul>
        </div>

        <div className="mt-5 mx-auto md:-ml-32">
          <Image
            src="/hero-img.png"
            alt="hero-img"
            width={1000}
            height={1000}
            className="w-full max-w-[1000px] md:max-w-[1000px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;