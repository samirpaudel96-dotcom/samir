import { useState } from "react";
import {
  TrendingUp,
  Package,
  Users,
  Star,
  DollarSign,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

const FarmerDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");

  const stats = [
    {
      title: "Total Revenue",
      value: "$2,450",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
    },
    {
      title: "Orders",
      value: "89",
      change: "+8.2%",
      changeType: "positive",
      icon: Package,
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Customers",
      value: "156",
      change: "+15.3%",
      changeType: "positive",
      icon: Users,
      color: "text-purple-600 bg-purple-100",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      changeType: "positive",
      icon: Star,
      color: "text-yellow-600 bg-yellow-100",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Emily Chen",
      items: ["Organic Tomatoes", "Fresh Carrots"],
      total: 12.97,
      status: "delivered",
      date: "2024-10-26",
    },
    {
      id: "ORD-002",
      customer: "Michael Rodriguez",
      items: ["Fresh Milk", "Cheddar Cheese"],
      total: 19.98,
      status: "processing",
      date: "2024-10-28",
    },
    {
      id: "ORD-003",
      customer: "Sarah Thompson",
      items: ["Organic Spinach", "Honeycrisp Apples"],
      total: 7.48,
      status: "shipped",
      date: "2024-10-27",
    },
  ];

  const topProducts = [
    { name: "Organic Tomatoes", sales: 45, revenue: 224.55 },
    { name: "Fresh Milk", sales: 32, revenue: 223.68 },
    { name: "Honeycrisp Apples", sales: 28, revenue: 97.72 },
    { name: "Organic Spinach", sales: 25, revenue: 99.75 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "text-green-600 bg-green-100";
      case "processing":
        return "text-blue-600 bg-blue-100";
      case "shipped":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your farm.
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      vs last period
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Orders
            </h2>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {order.items.join(", ")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${order.total.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Top Products
            </h2>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium text-green-600">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.sales} sales
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">
                    ${product.revenue.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-primary-100 rounded-lg">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Add Product</h3>
              <p className="text-sm text-gray-600">List a new product</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">View Orders</h3>
              <p className="text-sm text-gray-600">Manage your orders</p>
            </div>
          </button>

          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Edit className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Edit Profile</h3>
              <p className="text-sm text-gray-600">Update farm information</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;

