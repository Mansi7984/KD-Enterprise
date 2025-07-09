import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Filters = () => {
  const filters = [
    {
      name: "Sediment Filter",
      image:
        "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=250&h=200&fit=crop&crop=center",
      price: "₹299",
      description: "Removes dirt, dust and large particles",
    },
    {
      name: "Carbon Filter",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=250&h=200&fit=crop&crop=center",
      price: "₹399",
      description: "Removes chlorine and bad taste",
    },
    {
      name: "RO Membrane",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=250&h=200&fit=crop&crop=center",
      price: "₹899",
      description: "High-quality reverse osmosis membrane",
    },
    {
      name: "Post Carbon Filter",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=250&h=200&fit=crop&crop=center",
      price: "₹349",
      description: "Final stage water polishing filter",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">RO Filters and Products</h2>
          <p className="text-lg text-gray-300">
            High-quality replacement filters for all RO systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors transform transition duration-300 hover:scale-103"
            >
              <img
                src={filter.image}
                alt={filter.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{filter.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {filter.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-400">
                    {filter.price}
                  </span>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
                    Order Now
                  </button>
                </div>
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
    </section>
  );
};

export default Filters;
