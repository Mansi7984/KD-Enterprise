import React from "react";
import { Droplets, Shield, Wrench, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookService = () => {
    navigate("/contact#contact-form");
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-13"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center w-full max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 drop-shadow-md transform transition duration-500 hover:scale-105 animate-fadeIn glow-text">
            KD ENTERPRISE RO
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 font-light">
            RO Water Purifier and Chimney Sales & Service
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            Experience pure water with our premium RO systems. We provide
            comprehensive sales, service, and maintenance solutions for all your
            water purification needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleBookService}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer hover:scale-105"
            >
              BOOK A SERVICE
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer hover:scale-105">
              GET FREE QUOTE
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pure Water</h3>
              <p className="text-sm opacity-90">
                99.9% pure and safe drinking water
              </p>
            </div>

            <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
              <p className="text-sm opacity-90">
                Professional installation and maintenance
              </p>
            </div>

            <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Repair</h3>
              <p className="text-sm opacity-90">
                Quick and reliable repair services
              </p>
            </div>

            <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Warranty</h3>
              <p className="text-sm opacity-90">
                Extended warranty on all products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
