import React, { useState } from "react";
import {
  useSearchParams,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Check, Phone, Mail } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const order = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    quantity: 1,
  });

  // Get product details from URL params
  const productName = searchParams.get("product") || "RO Water Purifier";
  const productPrice = searchParams.get("price") || "₹12,999";
  const productImage =
    searchParams.get("image") ||
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderInfo = {
      ...formData,
      productName,
      totalAmount,
    };

    toast.success("Order placed successfully!");

    setTimeout(() => {
      navigate("/payment", { state: orderInfo });
    }, 1500);
  };

  const totalAmount =
    parseInt(productPrice.replace("₹", "").replace(",", "")) *
    formData.quantity;

  const location = useLocation();
  const fromPage = location.state?.from || "home";

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4 py-8">
        <Link
          to={fromPage === "products" ? "/products" : "/"}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {fromPage === "products" ? "Back to Products" : "Back to Home"}
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Place Your Order
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Customer Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pincode"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-26 h-34 rounded-lg border border-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {productName}
                    </h3>
                    <p className="text-gray-600">
                      Quantity: {formData.quantity}
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                      {productPrice} each
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Installation:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                  <div className="text-sm text-green-700">
                    <p className="font-medium">What's Included:</p>
                    <ul className="mt-1 space-y-1">
                      <li>• Free installation & setup</li>
                      <li>• 1 year warranty</li>
                      <li>• Free delivery</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Need Help?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+918487006000" className="hover:underline">
                      +91 8487006000
                    </a>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kdenterprise1108@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      kdenterprise1108@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default order;
