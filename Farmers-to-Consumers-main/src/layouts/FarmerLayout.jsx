import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  User,
  Menu,
  X,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";
import Header from "../components/Header";

const FarmerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", path: "/farmer", icon: LayoutDashboard },
    { name: "Products", path: "/farmer/products", icon: Package },
    { name: "Orders", path: "/farmer/orders", icon: ShoppingBag },
    { name: "Profile", path: "/farmer/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Farmer Portal
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6">
            <div className="px-6 space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 px-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  $2,450
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Package className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">Products</span>
                </div>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Customers</span>
                </div>
                <span className="text-sm font-medium text-gray-900">89</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Rating</span>
                </div>
                <span className="text-sm font-medium text-gray-900">4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          <div className="lg:hidden px-4 py-3 border-b border-gray-200">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default FarmerLayout;

