import React, { useState } from "react";
import { Calendar, User, Phone, Mail, MapPin } from "lucide-react";

const BookService = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Service booking request submitted successfully!");
  };

  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Book A Service
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your RO service appointment and get expert assistance at
              your doorstep
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Service Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select service type</option>
                  <option value="installation">New Installation</option>
                  <option value="repair">Repair Service</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="filter-change">Filter Replacement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any specific requirements or issues..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors cursor-pointer transform transition duration-300 hover:scale-101"
              >
                Book Service Now
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                  <p className="text-gray-600">+91 8487006000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">kdenterprise1108@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Service Areas</h4>
                  <p className="text-gray-600">Ahmedabad - All areas</p>
                  <p className="text-gray-600">Gandhinagar - All areas</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    Emergency Repair Service
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    Water Quality Testing
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    Filter Replacement Guide
                  </a>
                  <a
                    href="#"
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    Warranty Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;
