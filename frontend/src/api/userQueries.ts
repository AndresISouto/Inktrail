import type { UserLogRequest, UserResponse } from "@/types/user.type";

export const userLogIn = async (
  user: UserLogRequest,
): Promise<UserResponse> => {
  const response = await fetch(`http://localhost:8080/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tell the server we're sending JSON
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};
