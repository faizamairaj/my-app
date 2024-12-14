import React from 'react'
import Image from 'next/image';

const Banner1 = () => {
  return (
    <div className=' ml-32 mt-32 px-[200px] overflow-hidden justify-center items-center cursor-pointer 
                     sm:px-6 md:px-12'>
      <Image 
        src={'/banner1-img.png'}
        alt='banner1-img'
        width={1500}
        height={1500}
       
      />
    </div>
  );
}

export default Banner1;
