import { Star, MapPin, Phone, Mail, Award } from "lucide-react";

const FarmerCard = ({ farmer, onViewProfile }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div
      className="card hover:shadow-lg transition-all duration-200 cursor-pointer group"
      onClick={() => onViewProfile(farmer.id)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={farmer.image}
          alt={farmer.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
          <div className="flex items-center space-x-1">
            {renderStars(farmer.rating)}
            <span className="text-sm font-medium text-gray-700">
              {farmer.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
            {farmer.name}
          </h3>
          <p className="text-sm text-gray-500">by {farmer.owner}</p>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{farmer.location}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          {farmer.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {farmer.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 text-green-700 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">
              {farmer.certifications.length} Certifications
            </span>
          </div>
          <span className="text-sm text-gray-500">
            Est. {farmer.established}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;

