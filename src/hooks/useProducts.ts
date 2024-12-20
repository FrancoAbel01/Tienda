import { useState, useEffect } from 'react';
import { Product, Category } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products').then((res) => res.json()),
      fetch('https://fakestoreapi.com/products/categories').then((res) => res.json()),
    ]).then(([productsData, categoriesData]) => {
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    });
  }, []);

  return { products, categories, loading };
}