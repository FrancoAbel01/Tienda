import React from 'react';
import { Package, Calendar, MapPin } from 'lucide-react';

// In a real app, this would come from an API
const mockOrders = [
  {
    id: '1',
    date: '2024-03-15',
    status: 'Delivered',
    total: 249.97,
    items: [
      { id: 1, name: 'Premium T-Shirt', quantity: 2, price: 49.99 },
      { id: 2, name: 'Designer Jeans', quantity: 1, price: 149.99 },
    ],
    shippingAddress: '123 Main St, City, State 12345',
  },
  {
    id: '2',
    date: '2024-03-10',
    status: 'Processing',
    total: 89.98,
    items: [
      { id: 3, name: 'Casual Sneakers', quantity: 1, price: 89.98 },
    ],
    shippingAddress: '456 Oak Ave, Town, State 67890',
  },
];

export function OrderHistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {order.status}
                  </span>
                  <span className="font-semibold">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-gray-400" />
                      <span>{item.name}</span>
                      <span className="text-gray-500">× {item.quantity}</span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{order.shippingAddress}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}