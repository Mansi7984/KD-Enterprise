import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      name: "Aqua 2090 RO",
      image: "/images/AQUA-2090-1.jpg",
      price: "₹14,499",
      features: [
        "RO + Copper + Alkaline",
        "10L Detachable Tank",
        "1 Year Warranty",
      ],
    },
    {
      name: "Aqua Mars RO",
      image: "/images/AQUA-Mars-1.jpg",
      price: "₹11,499",
      features: ["Advanced RO System", "8L Storage", "Unbreakable Cabinet"],
    },
    {
      name: "Aqua Jade RO",
      image: "/images/AQUA-Jade-1.jpg",
      price: "₹14,500",
      features: [
        "RO + UV + UF + TDS Control",
        "50L/hr High Purification Capacity",
        "2 Year Warranty",
      ],
    },
    {
      name: "Aqua 9090 RO",
      image: "/images/AQUA-9090-1.jpg",
      price: "₹11,129",
      features: [
        "7-stage RO + UV + Alkaline",
        "10-12L storage tank",
        "1 Year Warranty",
      ],
    },
  ];
  const handleOrderNow = (productName, productPrice, productImage) => {
    navigate(
      `/order?product=${encodeURIComponent(
        productName
      )}&price=${encodeURIComponent(productPrice)}&image=${encodeURIComponent(
        productImage
      )}`
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
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Top Selling RO Water Purifiers
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our wide range of water purification systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform transition duration-300 hover:scale-104"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-79 cursor-pointer"
                onClick={() => openModal(product)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  {product.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    handleOrderNow(product.name, product.price, product.image)
                  }
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/products">
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 cursor-pointer flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

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
    </section>
  );
};

export default Products;
