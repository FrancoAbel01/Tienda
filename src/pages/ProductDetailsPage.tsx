import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useProduct } from '../hooks/useProduct';
import { useCartContext } from '../context/CartContext';
import { ProductDetailsSkeleton } from '../components/skeletons/ProductDetailsSkeleton';

export function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(Number(id));
  const { addToCart } = useCartContext();

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8">
          <div className="aspect-square relative">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="font-medium text-lg">{product.rating.rate}</span>
              </div>
              <span className="text-gray-500">
                {product.rating.count} reviews
              </span>
            </div>
            <p className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="prose prose-sm text-gray-500 mb-8">
            <p>{product.description}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}