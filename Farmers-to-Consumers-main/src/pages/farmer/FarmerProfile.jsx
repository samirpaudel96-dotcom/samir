import { useState } from "react";
import {
  Edit,
  Save,
  X,
  MapPin,
  Phone,
  Mail,
  Award,
  Calendar,
} from "lucide-react";
import InputField from "../../components/InputField";
import ImageUpload from "../../components/ImageUpload";
import { farmers } from "../../data/dummyData";

const FarmerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Green Valley Farm",
    owner: "John Smith",
    location: "Santa Clara Valley, CA",
    description:
      "Family-owned organic farm specializing in fresh vegetables and herbs. Certified organic since 2015.",
    specialties: ["Organic Vegetables", "Fresh Herbs", "Seasonal Fruits"],
    established: 2010,
    certifications: ["USDA Organic", "Non-GMO Project Verified"],
    contact: {
      phone: "(555) 123-4567",
      email: "john@greenvalleyfarm.com",
    },
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
  });

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSpecialtyChange = (index, value) => {
    const newSpecialties = [...formData.specialties];
    newSpecialties[index] = value;
    setFormData((prev) => ({ ...prev, specialties: newSpecialties }));
  };

  const addSpecialty = () => {
    setFormData((prev) => ({
      ...prev,
      specialties: [...prev.specialties, ""],
    }));
  };

  const removeSpecialty = (index) => {
    const newSpecialties = formData.specialties.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, specialties: newSpecialties }));
  };

  const handleCertificationChange = (index, value) => {
    const newCertifications = [...formData.certifications];
    newCertifications[index] = value;
    setFormData((prev) => ({ ...prev, certifications: newCertifications }));
  };

  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, ""],
    }));
  };

  const removeCertification = (index) => {
    const newCertifications = formData.certifications.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({ ...prev, certifications: newCertifications }));
  };

  const handleSave = () => {
    // Mock save functionality
    console.log("Profile saved:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
    setFormData({
      name: "Green Valley Farm",
      owner: "John Smith",
      location: "Santa Clara Valley, CA",
      description:
        "Family-owned organic farm specializing in fresh vegetables and herbs. Certified organic since 2015.",
      specialties: ["Organic Vegetables", "Fresh Herbs", "Seasonal Fruits"],
      established: 2010,
      certifications: ["USDA Organic", "Non-GMO Project Verified"],
      contact: {
        phone: "(555) 123-4567",
        email: "john@greenvalleyfarm.com",
      },
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farm Profile</h1>
          <p className="text-gray-600 mt-1">
            Manage your farm information and settings
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Edit className="w-5 h-5" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleCancel}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={formData.image}
                  alt={formData.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                {isEditing && (
                  <div className="absolute bottom-0 right-0">
                    <ImageUpload
                      value={formData.image}
                      onChange={(value) => handleInputChange("image", value)}
                      className="w-8 h-8"
                    />
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {formData.name}
              </h2>
              <p className="text-gray-600 mb-4">by {formData.owner}</p>

              <div className="flex items-center justify-center space-x-1 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">
                  4.8 (127 reviews)
                </span>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Established {formData.established}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>{formData.certifications.length} Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Farm Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={!isEditing}
              />

              <InputField
                label="Owner Name"
                value={formData.owner}
                onChange={(e) => handleInputChange("owner", e.target.value)}
                disabled={!isEditing}
              />

              <InputField
                label="Location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                disabled={!isEditing}
                className="md:col-span-2"
              />

              <InputField
                label="Established Year"
                type="number"
                value={formData.established}
                onChange={(e) =>
                  handleInputChange("established", parseInt(e.target.value))
                }
                disabled={!isEditing}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                disabled={!isEditing}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Specialties
            </h3>

            <div className="space-y-3">
              {formData.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) =>
                      handleSpecialtyChange(index, e.target.value)
                    }
                    disabled={!isEditing}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                  {isEditing && (
                    <button
                      onClick={() => removeSpecialty(index)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}

              {isEditing && (
                <button
                  onClick={addSpecialty}
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  + Add Specialty
                </button>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Certifications
            </h3>

            <div className="space-y-3">
              {formData.certifications.map((certification, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={certification}
                    onChange={(e) =>
                      handleCertificationChange(index, e.target.value)
                    }
                    disabled={!isEditing}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
                  />
                  {isEditing && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}

              {isEditing && (
                <button
                  onClick={addCertification}
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  + Add Certification
                </button>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Phone Number"
                value={formData.contact.phone}
                onChange={(e) =>
                  handleInputChange("contact.phone", e.target.value)
                }
                disabled={!isEditing}
              />

              <InputField
                label="Email"
                type="email"
                value={formData.contact.email}
                onChange={(e) =>
                  handleInputChange("contact.email", e.target.value)
                }
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;

