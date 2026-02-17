import type { PaginatedBooksResponse, Book } from "@/types/book.type";

export const fetchBooksPaginated = async (
  page: number,
): Promise<PaginatedBooksResponse> => {
  const response = await fetch(`http://localhost:8080/api/books?page=${page}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("BOOK_NOT_FOUND");
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const fetchBookById = async (id: number): Promise<Book> => {
  const response = await fetch(`http://localhost:8080/api/books/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("BOOK_NOT_FOUND");
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const searchBooks = async (
  query: string,
  page: number = 0,
): Promise<PaginatedBooksResponse> => {
  const response = await fetch(
    `http://localhost:8080/api/books/search?title=${query}&page=${page}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
