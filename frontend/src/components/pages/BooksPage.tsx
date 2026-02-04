import { fetchBooksPaginated } from "@/api/bookQueries";
import { useQuery } from "@tanstack/react-query";
import { BookCard } from "../shared/BookCard";
import type { Book, PaginatedBooksResponse } from "@/types/book.type";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useSearchParams } from "react-router";
import { useEffect } from "react";

export const BooksPage = () => {
  const [searchParams] = useSearchParams();
  const currentPage: number = parseInt(searchParams.get("page") || "0");

  const { data, error, isPending, isError } = useQuery<PaginatedBooksResponse>({
    queryKey: ["allBooksPaged", currentPage],
    queryFn: (): Promise<PaginatedBooksResponse> =>
      fetchBooksPaginated(currentPage),
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

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
      <h2 className="text-center font-semibold text-4xl p-4 m-4">
        Los Mejores libros
      </h2>
      <article className="grid grid-cols-4 gap-4 place-items-center">
        {data.content.map((book: Book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </article>
      <section className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={data.first}
          className={`p-1 rounded-full ${data.first ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-2">
          {getAdjacentPages(data.number, data.totalPages).map((pageNum) => (
            <Link
              key={pageNum}
              to={`/libros?page=${pageNum}`}
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

        <button
          disabled={data.last}
          className={`p-1 rounded-full ${data.last ? "bg-gray-300 " : "bg-blue-500 hover:bg-blue-600"}`}
        >
          <FaArrowRight />
        </button>
      </section>
    </>
  );
};
