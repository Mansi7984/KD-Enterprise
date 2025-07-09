import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Award, Users, Clock, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About KD ENTERPRISE RO</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner for pure water solutions in Ahmedabad and
            Gandhinagar. We have been serving the community for over 10 years
            with quality products and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2014, KD ENTERPRISE RO has been at the forefront of
                providing clean, safe drinking water solutions to households and
                businesses across Ahmedabad and Gandhinagar. We started with a
                simple mission: to ensure every family has access to pure,
                healthy water.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have grown from a small local business to a
                trusted name in water purification, serving thousands of
                satisfied customers. Our commitment to quality, reliability, and
                customer satisfaction remains unchanged.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                alt="About Us"
                className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2</h3>
              <p className="text-gray-600">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide every household and business with access to pure,
                safe, and healthy drinking water through innovative RO
                technology, exceptional service, and unwavering commitment to
                quality.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading water purification company in Gujarat,
                recognized for our quality products, reliable service, and
                contribution to community health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
