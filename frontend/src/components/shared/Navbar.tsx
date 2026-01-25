import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { links } from '../../const/links'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Dancing Script' }}>
              InkTrail
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {
                links.map(link => (
                  <NavLink
                    key={link.id}
                    to={link.href}
                    className={({ isActive }) => (
                      isActive ? "text-cyan-600 underline" :
                        "text-gray-700 px-3 py-2 rounded-md text-sm font-medium" +
                        "hover:underline hover:text-cyan-500 transition-all duration-300"
                    )}
                  >{link.title}</NavLink>
                ))
              }
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <FiSearch size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900 p-2 relative">
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
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
              {
                links.map(link => (
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))
              }
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="text-gray-700 hover:text-gray-900 p-2">
                  <FiSearch size={20} />
                </button>
                <button className="text-gray-700 hover:text-gray-900 p-2 relative">
                  <FiShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
