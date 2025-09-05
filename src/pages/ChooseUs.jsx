import React from 'react';
import { IoTimerOutline } from "react-icons/io5";
import ImageChoose from '../assets/Choose/pexels-gustavo-fring-4173251.jpg'

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12 px-4 md:py-24">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-6">
        <h1 className="font-sans font-medium text-xl md:text-2xl text-[#00BFA5]">
          Why Dr. Matthew Anderson?
        </h1>
        <div className="relative w-full max-w-4xl">
          <img
            src={ImageChoose}
            alt="Dr. Matthew Anderson"
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <h2 className="font-sans font-semibold text-2xl md:text-4xl text-[#031432] max-w-2xl mx-auto leading-tight">
            A dedicated doctor with the core mission to help
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6C87AE] text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum.
            Tellus quam mauris aenean turpis vulputate sodales nullam lobortis.
            Vulputate tortor tincidun.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-8 w-full justify-center">
          <div className="w-full md:w-auto rounded-xl bg-gradient-to-tr from-[#1678F2] to-[#65A8FB] p-1">
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-lg border border-white/50 bg-transparent">
              <IoTimerOutline size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-sans font-semibold text-base md:text-lg text-white">
                  +15 years of experience
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto rounded-xl bg-gradient-to-tr from-[#1678F2] to-[#65A8FB] p-1">
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-lg border border-white/50 bg-transparent">
              <IoTimerOutline size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-sans font-semibold text-base md:text-lg text-white">
                  Urgent 24 hour service
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto rounded-xl bg-gradient-to-tr from-[#1678F2] to-[#65A8FB] p-1">
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-lg border border-white/50 bg-transparent">
              <IoTimerOutline size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-sans font-semibold text-base md:text-lg text-white">
                  High quality care
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;