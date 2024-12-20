import React from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { CategoryFilter } from '../components/CategoryFilter';
import { SearchBar } from '../components/SearchBar';
import { Pagination } from '../components/Pagination';
import { useProducts } from '../hooks/useProducts';
import { useCartContext } from '../context/CartContext';
import { useFilters } from '../hooks/useFilters';
import { usePagination } from '../hooks/usePagination';

const ITEMS_PER_PAGE = 8;

export function HomePage() {
  const { products, categories, loading } = useProducts();
  const { addToCart } = useCartContext();
  const { searchQuery, selectedCategory, setSearchQuery, setSelectedCategory, filteredProducts } = 
    useFilters(products);
  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination({
    items: filteredProducts,
    itemsPerPage: ITEMS_PER_PAGE,
    filters: {
      category: selectedCategory,
      search: searchQuery,
    },
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid 
        products={paginatedItems} 
        onAddToCart={addToCart} 
        loading={loading}
      />
      {filteredProducts.length > ITEMS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </main>
  );
}