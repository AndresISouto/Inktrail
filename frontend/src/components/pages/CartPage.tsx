import { fetchCartById } from "@/api/cartQueries";
import { useUserStore } from "@/globalState/user";
import { useQuery } from "@tanstack/react-query";
import { FiShoppingCart, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export const CartPage = () => {
  const userId = useUserStore((s) => s.userId);
  const [orderItems, setOrderItems] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  const { data, error, isPending, isError } = useQuery({
    queryKey: ["cart", userId],
    queryFn: () => fetchCartById(userId),
  });

  useEffect(() => {
    if (data) {
      setOrderItems(data.orderItems || []);
      setTotal(data.total || 0);
    }
  }, [data]);

  const handleRemoveItem = (itemId: number) => {
    const itemToRemove = orderItems.find((item) => item.id === itemId);
    const itemPrice = itemToRemove.priceAtTime * itemToRemove.quantity || 0;

    setOrderItems((prev) => prev.filter((item) => item.id !== itemId));
    setTotal((prev) => prev - itemPrice);
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-xl text-gray-600">Cargando carrito...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600">{error.message}</p>
        <Link
          to="/"
          className="mt-4 flex items-center gap-2 text-teal-600 hover:underline"
        >
          <FiArrowLeft />
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6"
      >
        <FiArrowLeft />
        Continuar comprando
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <FiShoppingCart className="text-teal-600" />
        Mi Carrito
      </h1>

      {orderItems.length === 0 ? (
        <div className="text-center py-16">
          <FiShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">Tu carrito está vacío</p>
          <Link
            to="/libros"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Ver libros disponibles
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {orderItems.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.bookTitle}
                    </h3>
                    <p className="text-sm text-gray-600">{item.bookAuthor}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-teal-600 font-bold text-lg">
                      {item.priceAtTime} €
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">
                        Cantidad: {item.quantity}
                      </span>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:w-80">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Resumen del pedido
              </h2>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>{total}€</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="flex justify-between text-xl font-bold text-gray-800 mb-6">
                <span>Total</span>
                <span className="text-teal-600">{total}€</span>
              </div>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
