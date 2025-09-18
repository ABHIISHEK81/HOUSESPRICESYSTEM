import React from 'react';
import { DollarSign, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Prediction } from '../types';

interface PredictionResultsProps {
  prediction: Prediction | null;
  isLoading: boolean;
}

export default function PredictionResults({ prediction, isLoading }: PredictionResultsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600';
    if (confidence >= 0.8) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 0.8) return CheckCircle;
    return AlertCircle;
  };

  if (isLoading) {
    return (
      <div className="enhanced-card rounded-xl p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-20 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="enhanced-card rounded-xl p-6 text-center">
        <DollarSign className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-600 mb-2">
          Ready for Prediction
        </h3>
        <p className="text-gray-500">
          Fill out the property details form to get an AI-powered price prediction
        </p>
      </div>
    );
  }

  const ConfidenceIcon = getConfidenceIcon(prediction.confidence);

  return (
    <div className="enhanced-card rounded-xl overflow-hidden">
      {/* Header */}
      <div className="prediction-card p-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <h2 className="text-xl font-semibold mb-1">Predicted Price</h2>
            <div className="text-3xl font-bold">
              {formatPrice(prediction.predictedPrice)}
            </div>
          </div>
          <TrendingUp className="h-10 w-10 opacity-80" />
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <ConfidenceIcon className={`h-5 w-5 ${getConfidenceColor(prediction.confidence)}`} />
            </div>
            <div className="text-sm text-gray-500">Confidence Score</div>
            <div className={`text-lg font-semibold ${getConfidenceColor(prediction.confidence)}`}>
              {(prediction.confidence * 100).toFixed(1)}%
            </div>
          </div>

          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Price per Sq Ft</div>
            <div className="text-lg font-semibold text-gray-900">
              {formatPrice(Math.round(prediction.predictedPrice / prediction.features.area))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Property Summary</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <div>📍 {prediction.features.address || 'Address not specified'}</div>
            <div>🏠 {prediction.features.area} sq ft • {prediction.features.bedrooms} bed • {prediction.features.bathrooms} bath</div>
            <div>📊 {prediction.features.propertyType} • {prediction.features.location} • {prediction.features.condition} condition</div>
            {prediction.features.hasGarage && <div>🚗 Garage included</div>}
            {prediction.features.hasPool && <div>🏊 Pool included</div>}
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-xs text-blue-600 font-medium mb-1">MODEL INSIGHTS</div>
          <div className="text-sm text-blue-800">
            This prediction is based on advanced ML algorithms analyzing over 50 property features,
            comparable sales data, and current market conditions in your area.
          </div>
        </div>
      </div>
    </div>
  );
}