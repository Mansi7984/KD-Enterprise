import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const mapSection = document.getElementById("map-location");
    if (location.hash === "#map-location" && mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for any queries, service requests, or support.
            We're here to help you with all your water purification needs.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+918487006000"
                className="hover:underline text-gray-600"
              >
                +91 8487006000
              </a>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kdenterprise1108@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-600"
              >
                kdenterprise1108@gmail.com
              </a>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Ahmedabad & Gandhinagar</p>
              <p className="text-gray-600">Gujarat, India</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9AM - 7PM</p>
              <p className="text-gray-600">Sun: 10AM - 5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                We'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select Service</option>
                    <option>RO Installation</option>
                    <option>Repair & Service</option>
                    <option>AMC Plan</option>
                    <option>Filter Replacement</option>
                    <option>Water Testing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer transform transition duration-500 hover:scale-101"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section id="map-location" className="py-13">
        <div className="container mx-auto px-4">
          <div className="w-full h-[450px]">
            <iframe
              title="KD Enterprise Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5911592405305!2d72.57195237430471!3d23.112057612984795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d5590e5ddf%3A0x9d891d12404facbe!2sK%20D%20Enterprise%20%7C%20RO%20and%20Chimney%20Sales%20and%20Service!5e0!3m2!1sen!2sin!4v1751978082501!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
