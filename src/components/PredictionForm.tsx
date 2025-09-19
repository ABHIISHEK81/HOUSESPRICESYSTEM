import React, { useState } from 'react';
import { MapPin, Home, Bath, Bed, Square, Loader } from 'lucide-react';

interface PredictionFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function PredictionForm({ onSubmit, isLoading }: PredictionFormProps) {
  const [formData, setFormData] = useState({
    address: '',
    area: 1500,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'house',
    location: 'suburban',
    condition: 'good',
    age: 10,
    hasGarage: true,
    hasPool: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="base44-card p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Home className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Property Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Property Address
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter property address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Square className="inline h-4 w-4 mr-1" />
              Square Footage
            </label>
            <input
              type="number"
              min="500"
              max="10000"
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.area}
              onChange={(e) => handleChange('area', parseInt(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Age (Years)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.age}
              onChange={(e) => handleChange('age', parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Bed className="inline h-4 w-4 mr-1" />
              Bedrooms
            </label>
            <select
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.bedrooms}
              onChange={(e) => handleChange('bedrooms', parseInt(e.target.value))}
            >
              <option value={1}>1 Bedroom</option>
              <option value={2}>2 Bedrooms</option>
              <option value={3}>3 Bedrooms</option>
              <option value={4}>4 Bedrooms</option>
              <option value={5}>5+ Bedrooms</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Bath className="inline h-4 w-4 mr-1" />
              Bathrooms
            </label>
            <select
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.bathrooms}
              onChange={(e) => handleChange('bathrooms', parseInt(e.target.value))}
            >
              <option value={1}>1 Bathroom</option>
              <option value={1.5}>1.5 Bathrooms</option>
              <option value={2}>2 Bathrooms</option>
              <option value={2.5}>2.5 Bathrooms</option>
              <option value={3}>3 Bathrooms</option>
              <option value={4}>4+ Bathrooms</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <select
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.propertyType}
              onChange={(e) => handleChange('propertyType', e.target.value)}
            >
              <option value="house">Single Family House</option>
              <option value="condo">Condominium</option>
              <option value="townhouse">Townhouse</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location Type
            </label>
            <select
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
            >
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Condition
          </label>
          <select
            className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.condition}
            onChange={(e) => handleChange('condition', e.target.value)}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Needs Work</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={formData.hasGarage}
              onChange={(e) => handleChange('hasGarage', e.target.checked)}
            />
            <span className="text-sm font-medium text-gray-700">Has Garage</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={formData.hasPool}
              onChange={(e) => handleChange('hasPool', e.target.checked)}
            />
            <span className="text-sm font-medium text-gray-700">Has Pool</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Analyzing Property...
            </div>
          ) : (
            'Get Price Prediction'
          )}
        </button>
      </form>
    </div>
  );
}