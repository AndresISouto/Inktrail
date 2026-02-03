export interface Book {
  id: number;
  ISBN: string;
  BookTitle: string;
  BookAuthor: string;
  YearOfPublication: number;
  Price: number;
  Stock: number;
  Publisher: string;
  ImageURLS: string;
  ImageURLM: string;
  ImageURLL: string;
}
export interface PaginatedBooksResponse {
  content: Book[];
  first: boolean;
  last: boolean;
  number: number; // 0-based page index
  totalElements: number;
  totalPages: number;
  size: number;
}
