import React from 'react';
import { FaPlus, FaWhatsapp } from 'react-icons/fa';

const AppointmentBanner = () => {
  return (
    <div className="relative py-12 px-4 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="font-sans font-medium text-lg md:text-xl text-[#00BFA5] mb-6">
          Book an appointment
        </h1>
        <div className="relative rounded-3xl p-8 md:p-16 bg-gradient-to-tr from-[#1678F2] to-[#65A8FB] shadow-xl">
          {/* Decorative Plus Icons - POSITIONS RELATIVE TO THIS DIV */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-[#61D2C6] opacity-70 transform rotate-45 z-0">
            <FaPlus size={32} />
          </div>
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-[#61D2C6] opacity-70 transform -rotate-45 z-0">
            <FaPlus size={32} />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 text-[#61D2C6] opacity-70 transform -rotate-45 z-0">
            <FaPlus size={32} />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-[#61D2C6] opacity-70 transform rotate-45 z-0">
            <FaPlus size={32} />
          </div>

          <h2 className="font-sans font-semibold text-2xl md:text-4xl text-white mb-4">
            Schedule a virtual or presential appointment today
          </h2>
          <p className="font-sans text-base text-center text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.
          </p>
          <button
            className="flex items-center justify-center space-x-2 bg-white text-[#3A8EF6] py-3 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 mx-auto"
            type="button"
          >
            <FaWhatsapp size={20} />
            <span>Book an appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;