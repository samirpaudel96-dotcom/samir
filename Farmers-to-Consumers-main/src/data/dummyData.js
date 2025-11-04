// Dummy data for the Farmers to Consumers platform

export const farmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    owner: "John Smith",
    location: "Santa Clara Valley, CA",
    rating: 4.8,
    reviewCount: 127,
    image: "https://via.placeholder.com/400x300?text=Farm+Image",
    description:
      "Family-owned organic farm specializing in fresh vegetables and herbs. Certified organic since 2015.",
    specialties: ["Organic Vegetables", "Fresh Herbs", "Seasonal Fruits"],
    established: 2010,
    certifications: ["USDA Organic", "Non-GMO Project Verified"],
    contact: {
      phone: "(555) 123-4567",
      email: "john@greenvalleyfarm.com",
    },
  },
  {
    id: 2,
    name: "Sunrise Orchards",
    owner: "Maria Garcia",
    location: "Napa Valley, CA",
    rating: 4.9,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
    description:
      "Premium fruit orchard producing the finest apples, pears, and stone fruits. Sustainable farming practices.",
    specialties: ["Apples", "Pears", "Stone Fruits"],
    established: 2005,
    certifications: ["Sustainable Agriculture", "Local Grown"],
    contact: {
      phone: "(555) 234-5678",
      email: "maria@sunriseorchards.com",
    },
  },
  {
    id: 3,
    name: "Mountain View Dairy",
    owner: "Robert Johnson",
    location: "Sonoma County, CA",
    rating: 4.7,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
    description:
      "Artisanal dairy farm producing fresh milk, cheese, and yogurt. Grass-fed cows in open pastures.",
    specialties: ["Fresh Milk", "Artisanal Cheese", "Greek Yogurt"],
    established: 1998,
    certifications: ["Grass-Fed", "Hormone-Free"],
    contact: {
      phone: "(555) 345-6789",
      email: "robert@mountainviewdairy.com",
    },
  },
  {
    id: 4,
    name: "Coastal Gardens",
    owner: "Sarah Williams",
    location: "Monterey Bay, CA",
    rating: 4.6,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    description:
      "Coastal farm growing fresh leafy greens and root vegetables. Sea-salt enriched soil for unique flavors.",
    specialties: ["Leafy Greens", "Root Vegetables", "Microgreens"],
    established: 2012,
    certifications: ["Coastal Certified", "Pesticide-Free"],
    contact: {
      phone: "(555) 456-7890",
      email: "sarah@coastalgardens.com",
    },
  },
];

export const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    farmerId: 1,
    farmerName: "Green Valley Farm",
    price: 4.99,
    unit: "per lb",
    category: "Vegetables",
    image:
      "https://i0.wp.com/katiespring.com/wp-content/uploads/2018/02/P1130463.jpg?resize=1024%2C682&ssl=1",
    description:
      "Fresh, vine-ripened organic tomatoes perfect for salads, sauces, and cooking.",
    inStock: true,
    stockQuantity: 50,
    harvestDate: "2024-10-25",
    nutritionFacts: {
      calories: 18,
      protein: "0.9g",
      carbs: "3.9g",
      fiber: "1.2g",
    },
    rating: 4.7,
    reviewCount: 23,
  },
  {
    id: 2,
    name: "Honeycrisp Apples",
    farmerId: 2,
    farmerName: "Sunrise Orchards",
    price: 3.49,
    unit: "per lb",
    category: "Fruits",
    image:
      "https://www.trees.com/wp-content/uploads/products/medium/1000/HoneycrispAppleTree2.webp",
    description:
      "Crisp, sweet Honeycrisp apples picked at peak ripeness. Perfect for snacking or baking.",
    inStock: true,
    stockQuantity: 75,
    harvestDate: "2024-10-20",
    nutritionFacts: {
      calories: 52,
      protein: "0.3g",
      carbs: "13.8g",
      fiber: "2.4g",
    },
    rating: 4.9,
    reviewCount: 31,
  },
  {
    id: 3,
    name: "Fresh Whole Milk",
    farmerId: 3,
    farmerName: "Mountain View Dairy",
    price: 6.99,
    unit: "per gallon",
    category: "Dairy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKo0rI5YOmSLtUx91UsQObxAcHKtp6MAsBw&s",
    description:
      "Fresh, creamy whole milk from grass-fed cows. Pasteurized but not homogenized.",
    inStock: true,
    stockQuantity: 30,
    harvestDate: "2024-10-28",
    nutritionFacts: {
      calories: 150,
      protein: "8g",
      carbs: "12g",
      fiber: "0g",
    },
    rating: 4.8,
    reviewCount: 18,
  },
  {
    id: 4,
    name: "Organic Spinach",
    farmerId: 4,
    farmerName: "Coastal Gardens",
    price: 3.99,
    unit: "per bunch",
    category: "Leafy Greens",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkvRQewafke20hSOOxPZFDcff_5ZNhkjhEw&s",
    description:
      "Fresh, tender organic spinach leaves. Perfect for salads, smoothies, and cooking.",
    inStock: true,
    stockQuantity: 40,
    harvestDate: "2024-10-27",
    nutritionFacts: {
      calories: 23,
      protein: "2.9g",
      carbs: "3.6g",
      fiber: "2.2g",
    },
    rating: 4.6,
    reviewCount: 15,
  },
  {
    id: 5,
    name: "Artisanal Cheddar Cheese",
    farmerId: 3,
    farmerName: "Mountain View Dairy",
    price: 12.99,
    unit: "per lb",
    category: "Dairy",
    image:
      "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_240,q_auto:low,w_400/v1/ATK%20Reviews/2022/Artisanal%20Cheddar/SPS_Cheddar_Cheeses_64301-1",
    description:
      "Aged cheddar cheese with rich, complex flavors. Made from grass-fed cow's milk.",
    inStock: true,
    stockQuantity: 20,
    harvestDate: "2024-09-15",
    nutritionFacts: {
      calories: 113,
      protein: "7g",
      carbs: "1g",
      fiber: "0g",
    },
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: 6,
    name: "Organic Carrots",
    farmerId: 1,
    farmerName: "Green Valley Farm",
    price: 2.99,
    unit: "per lb",
    category: "Vegetables",
    image:
      "https://happyharvestfarms.com/blog/wp-content/uploads/2024/01/Health-Benefits-of-Carrots.jpg",
    description:
      "Sweet, crunchy organic carrots grown in rich, organic soil. Great for snacking or cooking.",
    inStock: true,
    stockQuantity: 60,
    harvestDate: "2024-10-26",
    nutritionFacts: {
      calories: 41,
      protein: "0.9g",
      carbs: "9.6g",
      fiber: "2.8g",
    },
    rating: 4.5,
    reviewCount: 19,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "The quality of produce from these local farmers is incredible! Everything is so fresh and flavorful. I love knowing exactly where my food comes from.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Oakland, CA",
    rating: 5,
    text: "As a chef, I demand the highest quality ingredients. This platform connects me directly with farmers who share my commitment to excellence.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    location: "Berkeley, CA",
    rating: 5,
    text: "Supporting local farmers while getting the freshest produce delivered to my door - it's a win-win! The transparency is amazing.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export const orders = [
  {
    id: "ORD-001",
    customerId: 1,
    customerName: "Emily Chen",
    farmerId: 1,
    farmerName: "Green Valley Farm",
    items: [
      { productId: 1, name: "Organic Tomatoes", quantity: 2, price: 4.99 },
      { productId: 6, name: "Organic Carrots", quantity: 1, price: 2.99 },
    ],
    total: 12.97,
    status: "delivered",
    orderDate: "2024-10-25",
    deliveryDate: "2024-10-26",
    deliveryAddress: "123 Main St, San Francisco, CA 94102",
  },
  {
    id: "ORD-002",
    customerId: 2,
    customerName: "Michael Rodriguez",
    farmerId: 3,
    farmerName: "Mountain View Dairy",
    items: [
      { productId: 3, name: "Fresh Whole Milk", quantity: 1, price: 6.99 },
      {
        productId: 5,
        name: "Artisanal Cheddar Cheese",
        quantity: 1,
        price: 12.99,
      },
    ],
    total: 19.98,
    status: "processing",
    orderDate: "2024-10-28",
    deliveryDate: "2024-10-30",
    deliveryAddress: "456 Oak Ave, Oakland, CA 94601",
  },
];

export const categories = [
  { id: 1, name: "Vegetables", icon: "🥕", count: 2 },
  { id: 2, name: "Fruits", icon: "🍎", count: 1 },
  { id: 3, name: "Dairy", icon: "🥛", count: 2 },
  { id: 4, name: "Leafy Greens", icon: "🥬", count: 1 },
];
