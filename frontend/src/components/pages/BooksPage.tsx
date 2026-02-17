import { fetchBooksPaginated, searchBooks } from "@/api/bookQueries";
import { useQuery } from "@tanstack/react-query";
import { BookCard } from "../shared/BookCard";
import type { Book, PaginatedBooksResponse } from "@/types/book.type";
import { Link, useSearchParams } from "react-router";
import { useEffect } from "react";

export const BooksPage = () => {
  const [searchParams] = useSearchParams();
  const currentPage: number = parseInt(searchParams.get("page") || "0");
  const searchQuery: string | null = searchParams.get("title");

  const { data, error, isPending, isError } = useQuery<PaginatedBooksResponse>({
    queryKey: ["books", searchQuery, currentPage],
    queryFn: (): Promise<PaginatedBooksResponse> =>
      searchQuery
        ? searchBooks(searchQuery, currentPage)
        : fetchBooksPaginated(currentPage),
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, searchQuery]);

  const getAdjacentPages = (current: number, total: number): number[] => {
    const pages: number[] = [];
    const start = Math.max(0, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="flex justify-between items-center px-8">
        <h2 className="font-semibold text-4xl p-4 m-4">
          {searchQuery
            ? `Resultados para "${searchQuery}"`
            : "Los Mejores libros"}
        </h2>
        {searchQuery && (
          <Link to="/libros" className="text-cyan-600 hover:underline text-sm">
            Limpiar búsqueda
          </Link>
        )}
      </div>
      {data.content.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No se encontraron libros para "{searchQuery}"
        </p>
      ) : (
        <article className="grid grid-cols-4 gap-4 place-items-center">
          {data.content.map((book: Book) => (
            <BookCard key={book.id} book={book}></BookCard>
          ))}
        </article>
      )}
      <section className="flex justify-center items-center gap-4 mt-8">
        <div className="flex gap-2">
          {getAdjacentPages(data.number, data.totalPages).map((pageNum) => (
            <Link
              key={pageNum}
              to={`/libros?page=${pageNum}${searchQuery ? `&q=${searchQuery}` : ""}`}
              className={`px-3 py-1 rounded-full ${
                pageNum === data.number
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pageNum + 1}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
