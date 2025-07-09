import React from "react";

const Brands = () => {
  const brands = [
    {
      name: "Kent",
      logo: "/images/KENT.png",
    },
    {
      name: "Aquaguard",
      logo: "/images/AQUAGUARD.png",
    },
    {
      name: "Pureit",
      logo: "/images/PUREIT.jpg",
    },
    {
      name: "LG",
      logo: "/images/LG.webp",
    },
    {
      name: "Blue Star",
      logo: "/images/BLUE-STAR.png",
    },
    {
      name: "Livpure",
      logo: "/images/LIVEPURE.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Brands We Repair and Service
          </h2>
          <p className="text-lg text-gray-600">
            Authorized service center for all major water purifier brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            We service all major brands with genuine parts and certified
            technicians
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Genuine Parts
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              Certified Service
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
              Quick Response
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Best Warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
