import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
    >
      <div className="relative pt-[100%] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span className="font-medium">{product.rating.rate}</span>
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}