import React from 'react';
import Image from 'next/image';

const SignUp = () => {
  return (
    <div className="px-4">
      {/* Breadcrumb Section */}
      <div className="ml-4 mt-8 md:ml-32 md:mt-20 flex flex-row justify-start overflow-hidden items-start space-x-3">
        <p className="text-sm md:text-1xl text-gray-400">Home</p>
        <p className="text-sm md:text-1xl"> / SignUp</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        {/* Left Section (Image) */}
        <div className="w-full md:w-auto flex justify-center">
          <Image src="/Side Image.png" alt="Side Image" width={805} height={781} className="w-full md:w-auto" />
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl text-center md:text-left">Create an account</h1>
          <p className="text-sm md:text-1xl mt-3 text-center md:text-left">Enter your details below</p>

          <form className="mt-5">
            <input
              type="text"
              placeholder="Name"
              className="text-gray-700 w-full p-4 mt-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="text-gray-700 w-full p-4 mt-4 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-gray-700 w-full p-4 mt-4 border border-gray-300 rounded-md"
            />

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                className="bg-red-700 hover:bg-red-500 rounded-md p-4 w-full md:w-96 text-white text-lg"
              >
                Create Account
              </button>
            </div>

            <div className="mt-4 flex justify-center md:justify-start">
              <Image src="/Google Sign up.png" alt="signup-img" width={371} height={56} className="w-full md:w-auto" />
            </div>

            <div className="flex flex-col md:flex-row justify-center mr-56 items-center mt-4 space-x-2">
              <p className="text-gray-400">Already have an account?</p>
              <div>
                <p className="text-gray-400 font-bold text-center">Log in</p>
                <div className="w-12 bg-gray-500 mx-auto md:mx-0">
                  <hr />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;