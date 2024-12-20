import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-1">${item.price.toFixed(2)} each</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="p-1 hover:bg-gray-100 rounded ml-2 text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}