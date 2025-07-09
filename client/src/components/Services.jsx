import React from "react";
import { Settings, Wrench, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLearnMore = () => {
    if (location.pathname === "/services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/services");
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            RO System Services and Sales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive RO water purifier solutions including
            installation, maintenance, and repair services for homes and
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Professional Installation
                </h3>
                <p className="text-gray-600">
                  Expert installation of RO systems with proper setup and
                  configuration for optimal performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Repair & Maintenance
                </h3>
                <p className="text-gray-600">
                  Regular maintenance and quick repair services to keep your RO
                  system running efficiently.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock customer support for any issues or emergency
                  repairs.
                </p>
              </div>
            </div>

            <button
              onClick={handleLearnMore}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer hover:scale-105 flex items-center gap-2"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="lg:pl-8 transform transition duration-300 hover:scale-104">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=500&h=400&fit=crop&crop=center"
                alt="RO Water Purifier System"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Premium RO Systems
              </h3>
              <p className="text-gray-600 mb-6">
                State-of-the-art reverse osmosis systems that remove 99.9% of
                contaminants, providing you with the purest water for your
                family.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Multi-stage filtration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Energy efficient</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Long-lasting filters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Smart monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
