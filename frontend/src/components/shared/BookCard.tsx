import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import type { Book } from "../../types/book.type";
import { slugify } from "../../utils/slugify";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const bookSlug = slugify(book.BookTitle);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log("Added to cart:", book.BookTitle);
  };

  return (
    <Link
      to={`/book/${bookSlug}/${book.id}`}
      className="block transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <article className="p-4 border border-gray-200 rounded-lg shadow-lg flex flex-col items-center text-center w-56 cursor-pointer">
        <img
          className="h-64 w-48 object-cover rounded mb-4 shadow-md"
          src={book.ImageURLM}
          alt={book.BookTitle}
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
          {book.BookTitle}
        </h2>
        <p className="text-sm text-gray-600">Author: {book.BookAuthor}</p>
        <p className="text-sm text-gray-600">Publisher: {book.Publisher}</p>
        <p className="text-sm text-gray-600">Year: {book.YearOfPublication}</p>
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-4 bg-teal-600 py-2 px-4 rounded-3xl my-2 text-white cursor-pointer transition-colors duration-300 hover:bg-teal-700 hover:contrast-125"
        >
          <FiShoppingCart />
          Añadir al carrito
        </button>
      </article>
    </Link>
  );
};
