import { Link } from "react-router";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { links } from "../../const/links";

export const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-around">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">InkTrail Bookstore</h3>
            <p className="text-gray-300 mb-4">
              Tu puerta a una aventura literaria. <br />
              Descubre, explora y pierdete en este mundo
            </p>
          </div>

          {/* Quick Links */}
          <div className="mx-auto">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FiMail className="w-5 h-5 mr-3" />
                <span>notenemosemail@buenasuerte.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="w-5 h-5 mr-3" />
                <span>+34 123 456 789 </span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="w-5 h-5 mr-3" />
                <span>Somos una tienda online TT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2026 InkTrail. No tenemos ningun derecho en este pais...
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
