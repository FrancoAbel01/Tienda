import React from 'react';

export function CartCounter({ count }: { count: number }) {
  return (
    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {count}
    </span>
  );
}