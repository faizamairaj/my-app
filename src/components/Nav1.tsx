import { ChevronDown } from 'lucide-react';
import React from 'react';

const Nav1 = () => {
  return (
    <div className=" bg-black flex justify-center items-center overflow-hidden">
      <div className="bg-black w-full h-auto md:h-12 text-white text-lg p-4 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Sale Banner */}
        <div className="text-center md:text-left flex-1 max-w-[40%] mx-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now
        </div>

        {/* Language Selector */}
        <div className="flex justify-center items-center w-auto mx-auto">
          English <ChevronDown className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Nav1;
