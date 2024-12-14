import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className="mt-28 flex flex-col overflow-hidden lg:flex-row lg:justify-center lg:items-center lg:gap-32">

      <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center">
        <Image src={'/Services.png'} alt="service1-img" width={80} height={80} />
        <p className="mt-2 font-bold text-black text-center">FREE AND FAST DELIVERY</p>
        <p className="mt-2 text-black text-center">Free delivery for all over $140</p>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center">
        <Image src={'/Services (1).png'} alt="service2-img" width={80} height={80} />
        <p className="mt-2 font-bold text-black text-center">24/7 CUSTOMER SERVICE</p>
        <p className="mt-2 text-black text-center">Friendly 24/7 customer support</p>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-col justify-center items-center">
        <Image src={'/Services (2).png'} alt="service3-img" width={80} height={80} />
        <p className="mt-2 font-bold text-black text-center">MONEY BACK GUARANTEE</p>
        <p className="mt-2 text-black text-center">We return money within 30 days</p>
      </div>
    </div>
  );
}
export default Header;
