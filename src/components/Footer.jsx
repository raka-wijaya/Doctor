import React from 'react';
import { FaYoutube, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { IoMedicalOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#1678F2] py-12 px-4 md:py-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-28">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center space-x-2 mb-2">
              <IoMedicalOutline size={36} className="text-white" />
              <h1 className="font-sans font-semibold text-3xl">
                Doctor
              </h1>
            </div>
            <p className="font-sans font-light text-base mb-4">
              8 W. South St.Buford, GA 30518 <br />
              5Briarwood LaneVienna, VA 22180
            </p>
            <div className="flex gap-4">
              <a href="https://accounts.google.com/ServiceLogin?service=youtube" aria-label="YouTube">
                <FaYoutube size={32} className="text-white hover:text-gray-200 transition-colors" />
              </a>
              <a href="https://www.facebook.com/login/" aria-label="Facebook">
                <FaFacebookSquare size={32} className="text-white hover:text-gray-200 transition-colors" />
              </a>
              <a href="https://web.whatsapp.com/" aria-label="WhatsApp">
                <FaWhatsapp size={32} className="text-white hover:text-gray-200 transition-colors" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20 w-full md:w-auto">
            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-xl mb-4">
                Company Info
              </h1>
              <ul className="flex flex-col space-y-3">
                <li><a href="/about" className="font-sans text-base hover:underline">About</a></li>
                <li><a href="/services" className="font-sans text-base hover:underline">Services</a></li>
                <li><a href="/blog" className="font-sans text-base hover:underline">Blog</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-xl mb-4">
                Book Now
              </h1>
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="font-sans text-base hover:underline">Appointment</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-xl mb-4">
                Contact
              </h1>
              <div className="flex flex-col space-y-3">
                <p className="font-sans text-base">+1 123456789</p>
                <p className="font-sans text-base">remmcal@mail.com</p>
                <p className="font-sans text-base">Phone: +1 12345678</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-white/30 my-10 md:my-14" />

        <div className="flex justify-center items-center text-center">
          <p className="font-sans text-sm md:text-base">
            © Doctor all rights 2023 - Designed by remmcal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;