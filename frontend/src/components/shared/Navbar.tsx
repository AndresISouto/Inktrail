import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { links } from "../../const/links";
import { useUserStore } from "@/globalState/user";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/libros?title=${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-800"
              style={{ fontFamily: "Dancing Script" }}
            >
              InkTrail
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600 underline"
                      : "text-gray-700 px-3 py-2 rounded-md text-sm font-medium" +
                        "hover:underline hover:text-cyan-500 transition-all duration-300"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar libros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="pl-8 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <FiSearch
                className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
            {userId === null && (
              <Link key={"login"} to={"/login"}>
                Log in
              </Link>
            )}
            <Link
              key={"carrito"}
              to={"/cart"}
              className="text-gray-700 hover:text-gray-900 p-2 relative"
            >
              <FiShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Buscar libros..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    className="w-full pl-8 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <FiSearch
                    className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
                <Link
                  key={"cart"}
                  to={"/cart"}
                  className="text-gray-700 hover:text-gray-900 p-2 relative"
                >
                  <FiShoppingCart size={20} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
