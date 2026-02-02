export const fetchBooksPaginated = async (page: number) => {
  const response = await fetch(`http://localhost:8080/api/books?page=${page}`);

  return response.json();
};
