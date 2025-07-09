import React from "react";
import { Check, Star, Award } from "lucide-react";

const MaintenancePlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹999",
      period: "per year",
      color: "border-gray-300",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      features: [
        "2 service visits per year",
        "Filter replacement (basic)",
        "Water quality testing",
        "Phone support",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹1,999",
      period: "per year",
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true,
      features: [
        "4 service visits per year",
        "All filter replacements",
        "Priority support",
        "Free minor repairs",
        "Annual system checkup",
      ],
    },
    {
      name: "Gold Plan",
      price: "₹2,999",
      period: "per year",
      color: "border-yellow-500",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      features: [
        "6 service visits per year",
        "Premium filter replacements",
        "24/7 emergency support",
        "Free all repairs",
        "Extended warranty",
        "Water quality certification",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Annual Maintenance Plans
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect maintenance plan for your RO system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 ${plan.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  {plan.price}
                </div>
                <div className="text-gray-600">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-colors`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Our Maintenance Plans?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Certified technicians with 10+ years experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    Genuine parts and filters guaranteed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">
                    24/7 customer support available
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&h=300&fit=crop&crop=center"
                alt="RO maintenance service"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;
