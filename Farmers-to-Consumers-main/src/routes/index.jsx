import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ConsumerLayout from "../layouts/ConsumerLayout";
import FarmerLayout from "../layouts/FarmerLayout";
import BrowseProducts from "../pages/consumer/BrowseProducts";
import ProductDetail from "../pages/consumer/ProductDetail";
import Cart from "../pages/consumer/Cart";
import Checkout from "../pages/consumer/Checkout";
import OrderTracking from "../pages/consumer/OrderTracking";
import FarmerDashboard from "../pages/farmer/FarmerDashboard";
import FarmerProducts from "../pages/farmer/FarmerProducts";
import FarmerOrders from "../pages/farmer/FarmerOrders";
import FarmerProfile from "../pages/farmer/FarmerProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "consumer",
        element: <ConsumerLayout />,
        children: [
          {
            index: true,
            element: <BrowseProducts />,
          },
          {
            path: "products/:id",
            element: <ProductDetail />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "orders/:id",
            element: <OrderTracking />,
          },
        ],
      },
      {
        path: "farmer",
        element: <FarmerLayout />,
        children: [
          {
            index: true,
            element: <FarmerDashboard />,
          },
          {
            path: "products",
            element: <FarmerProducts />,
          },
          {
            path: "orders",
            element: <FarmerOrders />,
          },
          {
            path: "profile",
            element: <FarmerProfile />,
          },
        ],
      },
    ],
  },
]);

