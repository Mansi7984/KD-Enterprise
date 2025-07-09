import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = () => {
    if (location.pathname === "/services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/services");
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="logo position-relative">
                <button
                  onClick={handleLogoClick}
                  rel="home"
                  aria-current="page"
                  className="cursor-pointer bg-transparent border-none p-0 m-0"
                >
                  <img
                    src="images/logo.png"
                    className="img-fluid d-block"
                    style={{ width: "230px", height: "80px" }}
                    alt="KD-Enterprise RO"
                  />
                </button>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of RO water purifier sales, service, and
              maintenance in Ahmedabad and Gandhinagar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/16RXGeJfkb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/thekdenterprise?utm_source=qr&igsh=eDNrdWl1NHp6b2Iz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleServiceClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  RO Installation
                </button>
              </li>
              <li>
                <button
                  onClick={handleServiceClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  System Repair
                </button>
              </li>
              <li>
                <button
                  onClick={handleServiceClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Maintenance Plans
                </button>
              </li>
              <li>
                <button
                  onClick={handleServiceClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Filter Replacement
                </button>
              </li>
              <li>
                <button
                  onClick={handleServiceClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Water Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 8487006000</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">kdenterprise1108@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Ahmedabad & Gandhinagar</p>
                  <p className="text-gray-400">Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KD ENTERPRISE RO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Warranty Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
