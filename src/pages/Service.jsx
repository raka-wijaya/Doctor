import React from 'react';
// Pastikan path gambar Anda benar
import visualImage from '../assets/Serviceimg/Visual.svg';
import frame9422 from '../assets/Serviceimg/Frame 9422.svg';
import frame9422_1 from '../assets/Serviceimg/Frame 9422 (1).svg';
import frame37589 from '../assets/Serviceimg/Frame 37589.svg';
import frame37590 from '../assets/Serviceimg/Frame 37590.svg';
import frame37591 from '../assets/Serviceimg/Frame 37591.svg';
import frame37592 from '../assets/Serviceimg/Frame 37592.svg';

import { FaWhatsapp } from 'react-icons/fa';

const services = [
  {
    image: frame9422,
    title: 'General',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
  {
    image: frame9422_1,
    title: 'Pediatrics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
  {
    image: frame37589,
    title: 'Pediatrics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
  {
    image: frame37590,
    title: 'Cardiology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
  {
    image: frame37591,
    title: 'Ophthalmology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
  {
    image: frame37592,
    title: 'Orthopedics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet iTristique id nibh lobortis nunc.',
  },
];

const ServiceCard = ({ image, title, description }) => (
  <div className="w-full max-w-sm bg-white rounded-2xl p-4 shadow-md transition-transform duration-300 hover:scale-105">
    <div className="flex flex-col items-center space-y-5">
      <img src={image} alt={title} className="w-full h-auto max-w-[282px] object-cover rounded-xl" />
      <div className="flex flex-col space-y-4 text-center p-4">
        <h3 className="font-semibold text-2xl text-black">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <button
          className="bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] w-full py-4 rounded-full text-white text-lg font-semibold flex items-center justify-center"
          type="button"
        >
          <FaWhatsapp className="w-5 h-5 mr-2" />
          Book an Appointment
        </button>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-10 bg-[#F2F7FF]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="flex flex-col space-y-5 text-center md:text-left">
            <p className="text-[#00BFA5] font-medium text-lg md:text-xl">
              Services
            </p>
            <h2 className="text-[#031432] font-medium text-3xl md:text-5xl leading-tight">
              Experienced in multiple <br className="hidden md:block" />
              medical practices
            </h2>
            <p className="text-[#6C87AE] text-base md:text-lg max-w-lg mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra turpis habitant eu sociis fermentum felis.
            </p>
            <button
              className="bg-gradient-to-tr from-[#3A8EF6] to-[#6F3AFA] w-full max-w-[291px] py-4 rounded-full text-white text-lg font-semibold mx-auto md:mx-0 flex items-center justify-center"
              type="button"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Book an Appointment
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src={visualImage} alt="Medical illustration" className="w-full h-auto hidden md:flex" />
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;