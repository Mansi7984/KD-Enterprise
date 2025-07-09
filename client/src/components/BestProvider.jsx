import React from "react";
import { MapPin, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BestProvider = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Best RO Sales and Service Provider in
          </h2>
          <h3 className="text-3xl font-semibold text-blue-200">
            Ahmedabad & Gandhinagar
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-white">
          <div className="text-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-2">5000+</h4>
            <p className="text-blue-200">Happy Customers</p>
          </div>

          <div className="text-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-2">10+</h4>
            <p className="text-blue-200">Years Experience</p>
          </div>

          <div className="text-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-2">50+</h4>
            <p className="text-blue-200">Service Areas</p>
          </div>

          <div className="text-center transform transition duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-2">24/7</h4>
            <p className="text-blue-200">Support Available</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold mb-6">Why We're the Best Choice</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Authorized dealer for all major RO brands including Kent,
                    Aquaguard, Pureit, and more
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Same-day installation and repair services across Ahmedabad
                    and Gandhinagar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Competitive pricing with transparent quotes and no hidden
                    charges
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Extended warranty and comprehensive after-sales support</p>
                </div>
              </div>
            </div>
            <div className="text-center transform transition duration-300 hover:scale-102">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
                alt="Team of technicians"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 ">
          <Link to="/contact">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors cursor-pointer transform transition duration-300 hover:scale-105 flex items-center gap-2">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestProvider;
