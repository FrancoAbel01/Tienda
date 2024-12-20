import React from 'react';
import { CartItem } from '../../types';

interface OrderSummaryProps {
  cart: CartItem[];
  total: number;
}

export function OrderSummary({ cart, total }: OrderSummaryProps) {
  const shipping = 0; // Free shipping
  const tax = total * 0.15; // 15% tax
  const finalTotal = total + tax + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                Qty: {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <span className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (15%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}