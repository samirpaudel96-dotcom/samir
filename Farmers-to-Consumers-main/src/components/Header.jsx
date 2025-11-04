import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState("consumer"); // Mock user role
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.itemCount);

  const isActive = (path) => location.pathname === path;

  const consumerNavItems = [
    { name: "Browse Products", path: "/consumer" },
    { name: "Cart", path: "/consumer/cart" },
  ];

  const farmerNavItems = [
    { name: "Dashboard", path: "/farmer" },
    { name: "Products", path: "/farmer/products" },
    { name: "Orders", path: "/farmer/orders" },
  ];

  const navItems = userRole === "consumer" ? consumerNavItems : farmerNavItems;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FarmFresh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-green-600 bg-primary-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Role Toggle */}
            <div className="hidden sm:flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUserRole("consumer")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  userRole === "consumer"
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Consumer
              </button>
              <button
                onClick={() => setUserRole("farmer")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  userRole === "farmer"
                    ? "bg-white text-green-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Farmer
              </button>
            </div>

            {/* Cart Icon (Consumer only) */}
            {userRole === "consumer" && (
              <Link
                to="/consumer/cart"
                className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>
            )}

            {/* User Profile */}
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {/* Mobile Role Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setUserRole("consumer")}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    userRole === "consumer"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Consumer
                </button>
                <button
                  onClick={() => setUserRole("farmer")}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    userRole === "farmer"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Farmer
                </button>
              </div>

              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-green-600 bg-primary-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

