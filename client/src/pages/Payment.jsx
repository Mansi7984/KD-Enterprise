import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Payment = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-red-500 text-lg font-semibold">
          No order data found.
        </p>
      </div>
    );
  }

  const { name, totalAmount, productName } = orderData;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Proceed to Payment</h2>
        <p className="text-gray-700 mb-6">
          Hello <strong>{name}</strong>, you are ordering: <br />
          <strong>{productName}</strong>
        </p>
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Total Amount:{" "}
          <span className="text-red-600">₹{totalAmount.toLocaleString()}</span>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full cursor-pointer">
          Pay Now
        </button>

        <Link
          to="/"
          className="block mt-4 text-blue-600 hover:underline text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Payment;
