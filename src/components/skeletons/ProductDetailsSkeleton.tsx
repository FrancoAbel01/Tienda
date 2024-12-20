import React from 'react';

export function ProductDetailsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="h-10 w-32 bg-gray-200 rounded mb-8 animate-pulse"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-8 animate-pulse">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
        </div>

        <div className="space-y-6 animate-pulse">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
          
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}