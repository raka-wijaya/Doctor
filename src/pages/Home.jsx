import React from 'react';
import Image from '../assets/Home/Object.svg';
import { Clock, CheckCircle, Plus } from 'lucide-react';
import About from './About';
import ServicesSection from './Service';
import AppointmentsBanner from './Banner';
import WhyChooseUs from './ChooseUs';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
    <div className="bg-blue-50 text-gray-800 font-sans">
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-24 md:pb-40 px-4">

        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-teal-500 font-semibold mb-2">Dr. Matthew Anderson</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Trusted and Dedicated Doctor
            </h1>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
              Providing comprehensive, personalized and dedicated healthcare services to meet the needs of each patient.
            </p>
            <button
              className="flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-lg mx-auto md:mx-0"
              aria-label="Buat Janji Temu"
            >
              <span className="mr-2">Make an Appointment</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm-2-8a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-2 0v-3h-1a1 1 0 01-1-1zm0-4a1 1 0 011-1h.01a1 1 0 010 2h-.01a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={Image}
              alt="Seorang dokter berinteraksi dengan karakter pasien, menunjukkan layanan kesehatan yang peduli dan modern."
              className="w-full h-auto hidden md:flex"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 -mt-16 md:-mt-24 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-100 text-blue-500 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">24 Hour Service</h3>
              <p className="text-gray-500 text-sm">
                We are ready to serve you anytime, day or night.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-100 text-blue-500 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">8 Years of Experience</h3>
              <p className="text-gray-500 text-sm">
                Our team has years of experience in providing the best care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-100 text-blue-500 mb-4">
                <Plus className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">High Quality Care</h3>
              <p className="text-gray-500 text-sm">
                We are committed to providing the highest standards of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <About/>
    <ServicesSection/>
    <AppointmentsBanner/>
    <WhyChooseUs/>
    <Testimonial/>
    </>
  );
};

export default Home;