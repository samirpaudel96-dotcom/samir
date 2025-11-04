import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  MapPin,
  Calendar,
  Truck,
  Shield,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { products, farmers } from "../../data/dummyData";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));
  const farmer = farmers.find((f) => f.id === product?.farmerId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <button onClick={() => navigate("/consumer")} className="btn-primary">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    navigate("/consumer/cart");
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/consumer")}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Additional Images Placeholder */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              by {product.farmerName}
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-1">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{farmer?.location}</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
              <span className="text-lg text-gray-600">/{product.unit}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Freshness guaranteed</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Harvest Date</span>
              </div>
              <p className="text-gray-600">
                {new Date(product.harvestDate).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Delivery</span>
              </div>
              <p className="text-gray-600">Same day available</p>
            </div>
          </div>

          {/* Nutrition Facts */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Nutrition Facts
            </h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-medium">
                    {product.nutritionFacts.calories}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-medium">
                    {product.nutritionFacts.protein}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbs</span>
                  <span className="font-medium">
                    {product.nutritionFacts.carbs}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fiber</span>
                  <span className="font-medium">
                    {product.nutritionFacts.fiber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-900">Quantity</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </span>
            </button>

            <div className="flex items-center justify-center space-x-2 mt-3 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Freshness guaranteed or your money back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Info Section */}
      {farmer && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About the Farmer
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start space-x-6">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {farmer.name}
                </h3>
                <p className="text-gray-600 mb-3">{farmer.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Est. {farmer.established}</span>
                  <span>•</span>
                  <span>{farmer.location}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(farmer.rating)}
                    <span>{farmer.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

