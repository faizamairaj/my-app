"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white overflow-hidden text-black">
      {/* Top Navbar */}
      <div className="mt-10 px-6 md:px-[200px] flex items-center justify-between text-3xl cursor-pointer">
        <span className="font-bold flex-shrink-0 mr-16">Exclusive</span>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-1xl  border rounded mb-1 mt-3"
          onClick={toggleNavbar}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navbar Links */}
        <nav
          className={`absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-[80px] md:top-auto z-10 md:z-auto transition-all duration-300 ${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row space-x-3  items-center gap-8 md:gap-12 text-2xl md:text-xl`}
        >
          <Link className="underline" href={'/'}>
            Home
          </Link>
          <Link href={'/Contact'}>Contact</Link>
          <Link href={'/About'}>About</Link>
          <Link href={'/signup'}>SignUp</Link>
        </nav>

        {/* Search Bar */}
        <form className="ml-20 hidden md:flex relative items-center flex-1">
          <input
            type="search"
            placeholder="What are you looking for?"
            className=" w-full  p-2 rounded bg-gray-100 px-2 font-semibold text-xl"
          />
          <button
            type="submit"
            className="absolute right-1 p-2 bg-gray-100 rounded text-1xl flex items-center justify-center mr-22"
          >
            <Search />
          </button>
        </form>

        {/* Icon */}
        <div className=" md:block ml-5 mr-48">
          <Image src="/nav-icon.png" alt="nav-icon" width={80} height={80} />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <form
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden p-4 bg-white border-t flex items-center gap-5`}
      >
        <Search className="text-gray-500" />
        <input
          type="search"
          placeholder="Search"
          className="w-2/3  p-2 rounded bg-gray-100 px-4 font-semibold text-base"
        />
      </form>
    </div>
  );
};

export default Navbar;
