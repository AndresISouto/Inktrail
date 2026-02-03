import type { PaginatedBooksResponse } from "@/types/book.type";

export const fetchBooksPaginated = async (
  page: number,
): Promise<PaginatedBooksResponse> => {
  const response = await fetch(`http://localhost:8080/api/books?page=${page}`);

  return response.json();
};
