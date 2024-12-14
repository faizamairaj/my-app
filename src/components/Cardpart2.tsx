import React from 'react';
import Image from 'next/image';

const Cardpart2 = () => {
  return (
    <div>
      <div className='h-[40px] w-[128px] overflow-hidden gap-[16px] flex ml-[10%] sm:ml-[150px] mt-16'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]'>
          This Month
        </h2>
      </div>

      <div className='flex justify-between ml-[10%] sm:ml-[150px] sm:flex-row flex-col'>
        <div>
          <h2 className='w-[100%] sm:w-[379px] h-[48px] font-inter font-semibold text-2xl'>
            By Selling Products
          </h2>
        </div>
        <div className='flex sm:mr-64 sm:justify-start justify-center mt-4 sm:mt-0'>
          <button className='bg-red-700 hover:bg-red-500 text-1xl text-white p-5 rounded w-44'>
            View All
          </button>
        </div>
      </div>

      <div className='mt-12 flex flex-col justify-center items-center gap-12'>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className='w-[300px] sm:w-[300px]'>
            <Image src={'/Cart.png'} alt="cart-img" width={300} height={300} />
          </div>
          <div className='w-[300px] sm:w-[300px]'>
            <Image src={'/Cart (1).png'} alt="cart 1-img" width={300} height={300} />
          </div>
          <div className='w-[300px] sm:w-[300px]'>
            <Image src={'/Cart (2).png'} alt="cart 2-img" width={300} height={300} />
          </div>
          <div className='w-[300px] sm:w-[300px]'>
            <Image src={'/Cart (3).png'} alt="cart 3-img" width={300} height={300} />
          </div>
        </div>
      </div>

      <div className='mt-20 ml-[10%] sm:ml-48 justify-center items-center'>
        <Image src={'/banner-img.png'} alt='' width={1170} height={500} />
      </div>
    </div>
  );
}

export default Cardpart2;
