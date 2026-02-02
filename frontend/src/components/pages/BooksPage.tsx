import { fetchBooksPaginated } from "@/api/bookQueries";
import { useQuery } from "@tanstack/react-query";

export const BooksPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["allBooksPaged"],
    queryFn: () => fetchBooksPaginated(1),
  });
  console.log(data);

  return <h1>flsajfl</h1>;
};

