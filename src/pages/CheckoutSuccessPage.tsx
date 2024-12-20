import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function CheckoutSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. We'll send you a confirmation email with your order details.
        </p>
        <div className="text-left mb-6">
          <h2 className="font-semibold mb-2">Shipping to:</h2>
          <p className="text-gray-600">
            {orderDetails.shippingDetails.firstName} {orderDetails.shippingDetails.lastName}<br />
            {orderDetails.shippingDetails.address}<br />
            {orderDetails.shippingDetails.city}, {orderDetails.shippingDetails.zipCode}<br />
            {orderDetails.shippingDetails.country}
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}