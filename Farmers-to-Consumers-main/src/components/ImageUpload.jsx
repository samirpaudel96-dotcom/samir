import { useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

const ImageUpload = ({
  label,
  value,
  onChange,
  error,
  required = false,
  className = "",
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB
  ...props
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(value);

  const handleFile = (file) => {
    if (file && file.size <= maxSize) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        onChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onChange(null);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive
            ? "border-green-500 bg-primary-50"
            : error
            ? "border-red-300 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto h-32 w-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="text-sm text-gray-600">
              <label className="cursor-pointer">
                <span className="font-medium text-green-600 hover:text-green-500">
                  Click to upload
                </span>
                <span className="ml-1">or drag and drop</span>
                <input
                  type="file"
                  accept={accept}
                  onChange={handleChange}
                  className="hidden"
                  {...props}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageUpload;

