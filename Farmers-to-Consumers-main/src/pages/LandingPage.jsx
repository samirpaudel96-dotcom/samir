import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Leaf,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { testimonials } from "../data/dummyData";

const LandingPage = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm Fresh",
      description:
        "Direct from local farms to your table. No middlemen, maximum freshness.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "Every product comes with our freshness guarantee and quality promise.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Same-day or next-day delivery to ensure your produce stays fresh.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Browse Products",
      description: "Explore fresh produce from local farmers in your area",
    },
    {
      step: "2",
      title: "Add to Cart",
      description: "Select your favorite items and add them to your cart",
    },
    {
      step: "3",
      title: "Checkout",
      description: "Complete your order with secure checkout process",
    },
    {
      step: "4",
      title: "Enjoy Fresh",
      description: "Receive your order and enjoy farm-fresh produce",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Fresh From <span className="text-green-600">Farmers</span> to
                You
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect directly with local farmers and get the freshest,
                highest-quality produce delivered to your doorstep. Support
                sustainable agriculture while enjoying farm-to-table freshness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consumer"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  Shop Fresh Produce
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/farmer"
                  className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200"
                >
                  Join as Farmer
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop"
                  alt="Fresh vegetables from local farm"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FarmFresh?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to bringing you the best of local agriculture with
              transparency, quality, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting fresh produce from local farmers has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full text-xl font-bold">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who love fresh, local
              produce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Farm Fresh?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start your journey with fresh, local produce today. Join our
            community of health-conscious consumers and sustainable farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consumer"
              className="bg-white text-green-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/farmer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 inline-flex items-center justify-center"
            >
              Become a Farmer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

