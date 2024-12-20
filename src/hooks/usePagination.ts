import { useState, useMemo, useEffect } from 'react';
import { Product } from '../types';

interface UsePaginationProps {
  items: Product[];
  itemsPerPage: number;
  filters?: {
    category: string | null;
    search: string;
  };
}

export function usePagination({ items, itemsPerPage, filters }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when filters change or items length changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters?.category, filters?.search, items.length]);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    const validPage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(validPage);
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
  };
}