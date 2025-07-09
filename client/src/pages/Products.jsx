import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Droplets, Shield, Zap, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../data/products.js";

const Products = () => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderNow = (productName, productPrice, productImage) => {
    navigate(
      `/order?product=${encodeURIComponent(
        productName
      )}&price=${encodeURIComponent(productPrice)}&image=${encodeURIComponent(
        productImage
      )}`,
      { state: { from: "products" } }
    );
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our range of premium RO water purifiers designed to meet
            every need and budget. All products come with warranty and free
            installation.
          </p>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pure Water</h3>
              <p className="text-gray-600">
                99.9% pure and safe drinking water
              </p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">ISI certified and tested products</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
              <p className="text-gray-600">Low power consumption design</p>
            </div>
            <div className="text-center transform transition duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Warranty</h3>
              <p className="text-gray-600">Extended warranty on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform transition duration-500 hover:scale-102"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-79 cursor-pointer"
                  onClick={() => openModal(product)}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>

                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      handleOrderNow(product.name, product.price, product.image)
                    }
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg max-w-md w-91 relative p-6"
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-1.5 text-gray-500 hover:text-red-500 text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-85 rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h3>
            <div className="flex items-center mb-4">
              <span className="text-2xl text-red-600 font-semibold">
                {selectedProduct.price}
              </span>
              <span className="ml-3 text-lg line-through text-gray-400">
                {selectedProduct.originalPrice}
              </span>
            </div>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              {selectedProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() =>
                handleOrderNow(
                  selectedProduct.name,
                  selectedProduct.price,
                  selectedProduct.image
                )
              }
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer"
            >
              Order Now
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;
