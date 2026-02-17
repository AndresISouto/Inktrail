import { Banner } from "./Banner";
import { BookCard } from "../shared/BookCard";
import { useQuery } from "@tanstack/react-query";
import type { PaginatedBooksResponse } from "@/types/book.type";
import { fetchBooksPaginated } from "@/api/bookQueries";

export const HomePage = () => {
  const { data, error, isPending, isError } = useQuery<PaginatedBooksResponse>({
    queryKey: ["books"],
    queryFn: (): Promise<PaginatedBooksResponse> => fetchBooksPaginated(1),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <Banner></Banner>
      <section>
        <h2 className="text-center font-semibold text-4xl p-4 m-4">
          Los mas vendidos
        </h2>
        <article className=" grid grid-cols-4 place-items-center">
          {data.content.map((book) => (
            <BookCard key={book.id} book={book}></BookCard>
          ))}
        </article>
      </section>
    </>
  );
};
