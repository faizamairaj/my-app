import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const Cartpart3 = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 overflow-hidden lg:px-32"> {/* Added padding for mobile responsiveness */}
      <div className="h-[40px] w-[128px] gap-[16px] flex mt-10 justify-center md:ml-[150px]">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
        <h2 className="font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]"> Products</h2>
      </div>
      <div className="flex justify-between items-center mt-8">
        <h2 className=" ml-44 font-inter font-semibold text-2xl sm:text-xl md:text-2xl">Explore Our Products</h2>
        <div className="flex gap-3">
          <button>
            <ArrowLeft className="bg-gray-200 rounded-full w-10 h-10" />
          </button>
          <button>
            <ArrowRight className="bg-gray-200 rounded-full w-10 h-10" />
          </button>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 sm:gap-6 md:gap-8 lg:gap-12">
        <div>
          <Image src={'/Cart (4).png'} alt="cart4-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart (5).png'} alt="cart5-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart (6).png'} alt="cart6-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart.png'} alt="cart-img" width={300} height={300} />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 sm:gap-6 md:gap-8 lg:gap-12">
        <div>
          <Image src={'/Cart (7).png'} alt="cart7-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart (8).png'} alt="cart8-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart 9.png'} alt="cart9-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/Cart (10).png'} alt="cart-10.png" width={300} height={300} />
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-red-700 hover:bg-red-500 text-white rounded p-5 w-64 text-xl">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Cartpart3;
