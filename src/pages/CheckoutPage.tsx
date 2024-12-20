import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { OrderSummary } from '../components/checkout/OrderSummary';

export function CheckoutPage() {
  const { cart, total, clearCart } = useCartContext();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Your cart is empty</h2>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckout = (formData: CheckoutFormData) => {
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success', { 
        state: { 
          orderDetails: {
            items: cart,
            total,
            shippingDetails: formData
          }
        }
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm onSubmit={handleCheckout} />
        <OrderSummary cart={cart} total={total} />
      </div>
    </div>
  );
}