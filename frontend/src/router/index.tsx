import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../components/home/HomePage";
import { BookDetail } from "../components/detail/BookDetail";
import { BooksPage } from "../components/pages/BooksPage";
import { AboutPage } from "../components/pages/AboutPage";

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
    ],
  },
]);
