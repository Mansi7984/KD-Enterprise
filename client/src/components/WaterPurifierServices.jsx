import React from "react";
import { ArrowRight, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterPurifierServices = () => {
  const navigate = useNavigate();

  const handleBookService = () => {
    navigate("/contact#contact-form");
  };

  const services = [
    "Water Quality Testing",
    "Filter Replacement",
    "System Maintenance",
    "Emergency Repairs",
    "Installation Services",
    "Annual Service Plans",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Water Purifier Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete maintenance and service solutions for all types of water
            purifiers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 ">
              <div className="text-center transform transition duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Quick Service
                </h4>
                <p className="text-sm text-gray-600">Same day service</p>
              </div>

              <div className="text-center transform transition duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Guaranteed</h4>
                <p className="text-sm text-gray-600">100% satisfaction</p>
              </div>

              <div className="text-center transform transition duration-200 hover:scale-105">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Expert Team
                </h4>
                <p className="text-sm text-gray-600">Certified technicians</p>
              </div>
            </div>

            <button
              onClick={handleBookService}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer hover:scale-104 flex items-center gap-2"
            >
              Book Service Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative transform transition duration-300 hover:scale-104">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
                alt="Water purifier service technician"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Professional Service Team
                </h3>
                <p className="text-gray-600">
                  Our certified technicians provide expert service and
                  maintenance for all major water purifier brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterPurifierServices;
