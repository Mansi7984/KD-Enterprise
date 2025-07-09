import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrench, TestTube, Filter, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Repair & Service",
      description:
        "Quick and reliable repair services for all major brands of water purifiers.",
      features: [
        "Same day service",
        "Genuine parts",
        "Skilled technicians",
        "Warranty on repairs",
      ],
    },

    {
      icon: Filter,
      title: "Filter Replacement",
      description:
        "High-quality replacement filters for all RO systems to ensure pure water output.",
      features: [
        "Genuine filters",
        "All brands available",
        "Home delivery",
        "Installation service",
      ],
    },
    {
      icon: TestTube,
      title: "Water Testing",
      description:
        "Comprehensive water quality testing to determine the best purification solution.",
      features: [
        "TDS testing",
        "pH level check",
        "Contamination analysis",
        "Detailed report",
      ],
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description:
        "24/7 emergency support for urgent water purifier issues and breakdowns.",
      features: [
        "24/7 availability",
        "Quick response",
        "Emergency repairs",
        "Phone support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete water purification solutions with professional
            installation, maintenance, and repair services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow transform transition duration-500 hover:scale-102"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your RO system serviced
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Call or book online for service request
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Visit</h3>
              <p className="text-gray-600">
                We schedule a convenient time for you
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Our technician provides quality service
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Complete testing and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
