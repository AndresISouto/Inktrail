import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../components/home/HomePage";
import { BookDetail } from "../components/detail/BookDetail";
import { BooksPage } from "../components/pages/BooksPage";
import { AboutPage } from "../components/pages/AboutPage";
import { LoginPage } from "@/components/pages/LoginPage";
import { SignInPage } from "@/components/pages/SignInPage";
import { CartPage } from "@/components/pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "book/:title/:id",
        element: <BookDetail></BookDetail>,
      },
      {
        path: "libros",
        element: <BooksPage></BooksPage>,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "cart",
        element: <CartPage></CartPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <SignInPage></SignInPage>,
  },
]);
