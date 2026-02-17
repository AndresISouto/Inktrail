export const fetchCartById = async (id: number | null) => {
  const response = await fetch(`http://localhost:8080/api/orders/user/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("USER_NOT_FOUND");
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const addToCart = async (userId: number, bookId: number) => {
  const request = { userId: userId, bookId: bookId };
  const response = await fetch(`http://localhost:8080/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tell the server we're sending JSON
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};
