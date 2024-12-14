import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black mt-32 w-full py-16">
      <div className="flex flex-wrap justify-center items-start gap-8 md:gap-24 px-4">
        {/* Exclusive Section */}
        <div className="flex flex-col items-center text-white w-full sm:w-auto">
          <h3 className="mb-4 text-lg md:text-2xl font-bold">Exclusive</h3>
          <p className="mb-2 text-md md:text-xl font-semibold">Subscribe</p>
          <p className="mb-4 text-sm md:text-lg">Get 10% off your first order</p>
          <Image src="/Send Mail.png" alt="mail-img" width={150} height={36} className="md:w-auto" />
        </div>

        {/* Support Section */}
        <div className="text-white w-full sm:w-auto">
          <h3 className="mb-4 text-lg md:text-2xl font-bold">Support</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>111 Bijoy Sarani, Dhaka,</li>
            <li>DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="text-white w-full sm:w-auto">
          <h3 className="mb-4 text-lg md:text-2xl font-bold">Account</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="text-white w-full sm:w-auto">
          <h3 className="mb-4 text-lg md:text-2xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-lg">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="text-white overflow-hidden flex flex-col items-center w-full sm:w-auto">
          <h3 className="mb-4 text-lg md:text-2xl font-bold">Download App</h3>
          <Image src="/footer-img.png" alt="Download App" width={150} height={64} className="md:w-auto" />
          <div className="mt-4">
            <Image src="/footer-icon.png" alt="App Icons" width={120} height={18} className="md:w-auto" />
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="w-full mt-8">
        <hr className="border-t border-gray-800" />
        <div className="text-center text-gray-400 mt-4 text-sm md:text-base">
          &copy; CopyRight Rimal 2022. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
