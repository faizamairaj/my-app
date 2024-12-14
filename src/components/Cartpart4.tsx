import React from 'react';
import Image from 'next/image';

const Cardpart4 = () => {
  return (
    <div>
      <div className='h-[40px] w-[128px] gap-[16px] flex ml-[150px] overflow-hidden mt-16 sm:ml-150 sm:mt-8'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]'>
          Featured
        </h2>
      </div>
      <div className='flex justify-between ml-[150px] sm:ml-150'>
        <div>
          <h2 className='w-[379px] h-[48px] mt-4 font-inter font-semibold text-3xl sm:w-full sm:text-xl'>
            New Arrival
          </h2>
        </div>
      </div>
      <div className='mt-16 ml-48 flex justify-center items-center sm:ml-0'>
        <Image
          src={'/Cart-image.png'}
          alt='cart-img'
          width={1170}
          height={600}
        className='sm:mr-28'
        />
      </div>
    </div>
  );
};

export default Cardpart4;
