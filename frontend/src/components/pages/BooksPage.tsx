export const BooksPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Book cards will be mapped here */}
        <p className="col-span-full text-gray-600 text-center py-12">
          Books coming soon...
        </p>
      </div>
    </div>
  );
};