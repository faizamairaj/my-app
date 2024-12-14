import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="px-4">
      {/* Breadcrumb Section */}
      <div className="ml-4 mt-8 md:ml-32 md:mt-20 flex flex-row justify-start overflow-hidden items-start space-x-3">
        <p className="text-sm md:text-1xl text-gray-400">Home</p>
        <p className="text-sm md:text-1xl"> / Contact</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20 md:ml-48 gap-10 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col justify-start items-start space-y-6">
          <div className="flex flex-row justify-start items-center space-x-3">
            <Image src="/icons-phone.png" alt="phone-icon" width={40} height={40} />
            <h3 className="text-lg md:text-1xl">Call To Us</h3>
          </div>
          <div className="ml-3">
            <p className="text-sm md:text-1xl mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-sm md:text-1xl mb-2">Phone: +8801611112222</p>
          </div>
          <div className="w-full md:w-72 bg-gray-500">
            <hr />
          </div>
          <div className="flex flex-row justify-start items-center space-x-3">
            <Image src="/icons-mail.png" alt="mail-icon" width={40} height={40} />
            <h3 className="text-lg md:text-1xl">Write To Us</h3>
          </div>
          <div className="ml-3">
            <p className="text-sm md:text-1xl mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm md:text-1xl mb-2">Email: customer@exclusive.com</p>
            <p className="text-sm md:text-1xl mb-2">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex flex-col justify-start ml-16  items-start w-full md:w-1/1">
          <form>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="p-4 w-full md:w-72 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Your Email *"
                className="p-4 w-full md:w-72 rounded bg-gray-200"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="p-4 w-full md:w-72 rounded bg-gray-200"
              />
            </div>
            <div className="mt-4 md:mt-6">
              <textarea
                className="bg-slate-200 border border-gray-200 p-4 w-full md:w-737 h-40 md:h-207 rounded"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </div>
            <div className="flex justify-center  md:justify-end mt-6 w-full">
              <button
                type="submit"
                className="px-6 py-2 bg-red-700 text-white rounded hover:bg-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
