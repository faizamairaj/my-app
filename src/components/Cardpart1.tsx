import React from 'react';
import Image from 'next/image';

const Cardpart1 = () => {
  return (
    <div className="ml-4 mt-6 flex overflow-hidden flex-col justify-center items-center gap-6 md:ml-36 md:mt-12">
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div>
          <Image src={'/Cart 9.png'} alt="cart-9 img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/cart22.png'} alt="cart1-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/cart33.png'} alt="cart2-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/cart44.png'} alt="cart3-img" width={300} height={300} />
        </div>
        <div>
          <Image src={'/cart44.png'} alt="cart3-img" width={300} height={300} />
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 md:mt-12">
        <button className="bg-red-600 hover:bg-red-500 text-white rounded p-3 sm:p-4 w-48 sm:w-64 text-sm sm:text-lg">
          View All Products
        </button>
      </div>

      {/* Divider */}
      <div className="w-full mt-6 md:mt-8">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );
};

export default Cardpart1;
