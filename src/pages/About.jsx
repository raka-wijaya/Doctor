import React from 'react';
import Image from '../assets/About/Group 9420.svg'

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative w-full md:w-1/2 hidden md:flex">
            <span className="absolute -top-6 -left-6 text-teal-300 text-4xl font-extralight rotate-45 z-0">+</span>
            <span className="absolute top-1/2 -right-6 text-blue-300 text-3xl font-extralight -rotate-45 z-0">+</span>
            <span className="absolute -bottom-6 left-1/4 text-blue-300 text-5xl font-extralight rotate-45 z-0">+</span>

              <img
                src={Image}
                alt="Seorang dokter pria tersenyum ramah"
                className="w-full h-auto rounded-2xl hidden md:flex"
                />
          </div>

          {/* Bagian Kanan: Teks dan Tombol */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-teal-500 font-semibold mb-2">About me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
              A dedicated doctor with the core mission to help
            </h2>
            <p className="text-gray-500 mb-8">
              Saya berkomitmen untuk memberikan perawatan kesehatan terbaik dengan penuh empati dan keahlian. Dengan pengalaman bertahun-tahun, saya berdedikasi untuk membantu setiap pasien mencapai kesehatan optimal.
            </p>
            
            <button
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold
                         bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                         transition duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm-2-8a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-2 0v-3h-1a1 1 0 01-1-1zm0-4a1 1 0 011-1h.01a1 1 0 010 2h-.01a1 1 0 01-1-1z" />
              </svg>
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;