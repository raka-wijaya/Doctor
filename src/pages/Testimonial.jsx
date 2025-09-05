import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import samyWhite from '../assets/Testimoni/Ellipse 17.svg';
import arthurNorthon from '../assets/Testimoni/Ellipse 17 (1).svg';
import kevinSmith from '../assets/Testimoni/Ellipse 17 (2).svg';
import amandaJackson from '../assets/Testimoni/Ellipse 17 (3).svg';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    name: "Samy White",
    title: "Cardiology Patient",
    image: samyWhite
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    name: "Arthur Northon",
    title: "Nutrion Patient",
    image: arthurNorthon
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    name: "Kevin Smith",
    title: "Orthopedics Patient",
    image: kevinSmith
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    name: "Amanda Jackson",
    title: "Ophthalmology Patient",
    image: amandaJackson
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Menentukan jumlah slide yang terlihat berdasarkan ukuran layar
  // Anda bisa menggunakan state atau window.innerWidth, tapi ini lebih sederhana
  const slidesPerView = window.innerWidth >= 768 ? 2 : 1;
  const maxSlides = testimonials.length - slidesPerView;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === maxSlides ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides : prev - 1));
  };

  return (
    <div className="bg-[#F2F7FF] py-12 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="font-sans font-semibold text-3xl md:text-4xl text-[#031432]">
            What our great customers say about Dr.{" "}
            <br className="hidden md:inline" /> Matthew Anderson
          </h1>
          <p className="font-sans text-base text-[#6C87AE] max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-16">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-white w-12 h-12 rounded-full text-[#031432] flex items-center justify-center shadow-md mr-4 md:mr-8 transition-colors hover:bg-gray-200"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden w-full max-w-4xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              // Menggunakan persentase pergeseran yang dinamis
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesPerView)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  // Menggunakan width penuh di mobile dan setengah di desktop
                  className="flex-none w-full md:w-1/2 p-2"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-md h-full flex flex-col justify-between">
                    <p className="font-sans font-light text-base text-[#031432] mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-4 items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h2 className="font-sans font-medium text-base text-[#00BFA5]">
                          {testimonial.name}
                        </h2>
                        <p className="font-sans text-xs text-[#6C87AE]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-white w-12 h-12 rounded-full text-[#031432] flex items-center justify-center shadow-md ml-4 md:ml-8 transition-colors hover:bg-gray-200"
            aria-label="Next Testimonial"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;