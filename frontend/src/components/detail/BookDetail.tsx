import { Link, useParams } from "react-router";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { books } from "../../data/bookData";
import { slugify } from "../../utils/slugify";

export const BookDetail = () => {
  const { title } = useParams();

  // Find the book by comparing slugified titles
  const book = books.find(b => slugify(b.BookTitle) === title);

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Not Found</h1>
        <p className="text-gray-600 mb-6">The book you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700"
        >
          <FiArrowLeft />
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", book.BookTitle);
    // Add to cart logic here
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6"
        >
          <FiArrowLeft />
          Volver
        </Link>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Book Image */}
        <div className="flex justify-center">
          <img
            className="max-w-full h-auto rounded-lg shadow-lg max-h-[600px] object-cover"
            src={book.ImageURLL}
            alt={book.BookTitle}
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.BookTitle}</h1>

            <div className="space-y-3 mb-6">
              <div className="flex items-baseline">
                <span className="font-semibold text-gray-700 w-32">Author:</span>
                <span className="text-gray-600">{book.BookAuthor}</span>
              </div>

              <div className="flex items-baseline">
                <span className="font-semibold text-gray-700 w-32">Publisher:</span>
                <span className="text-gray-600">{book.Publisher}</span>
              </div>

              <div className="flex items-baseline">
                <span className="font-semibold text-gray-700 w-32">Year:</span>
                <span className="text-gray-600">{book.YearOfPublication}</span>
              </div>

              <div className="flex items-baseline">
                <span className="font-semibold text-gray-700 w-32">ISBN:</span>
                <span className="text-gray-600">{book.ISBN}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300 hover:bg-teal-700 hover:contrast-125"
            >
              <FiShoppingCart />
              Añadir al carrito
            </button>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold transition-colors duration-300 hover:bg-gray-50"
            >
              <FiArrowLeft />
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
