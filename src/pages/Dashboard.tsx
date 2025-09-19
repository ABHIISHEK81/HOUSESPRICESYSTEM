import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PredictionForm from '../components/PredictionForm';
import PredictionResults from '../components/PredictionResults';
import FeatureImportance from '../components/FeatureImportance';
import PriceHeatmap from '../components/PriceHeatmap';
import { Prediction } from '../types';

export default function Dashboard() {
  const [currentPrediction, setCurrentPrediction] = useState<Prediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredictionSubmit = async (formData: any) => {
    setIsLoading(true);
    
    // Simulate ML model prediction
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate realistic prediction based on form data
    const basePrice = 150000;
    const areaMultiplier = formData.area * 120;
    const bedroomBonus = formData.bedrooms * 15000;
    const bathroomBonus = formData.bathrooms * 8000;
    const locationMultiplier = formData.location === 'urban' ? 1.3 : formData.location === 'suburban' ? 1.1 : 0.9;
    const conditionMultiplier = formData.condition === 'excellent' ? 1.2 : formData.condition === 'good' ? 1.0 : 0.8;
    
    const predictedPrice = Math.round((basePrice + areaMultiplier + bedroomBonus + bathroomBonus) * locationMultiplier * conditionMultiplier);
    
    const prediction: Prediction = {
      id: Date.now().toString(),
      predictedPrice,
      confidence: 0.87 + Math.random() * 0.1,
      features: formData,
      timestamp: new Date().toISOString(),
      featureImportance: [
        { feature: 'Square Footage', importance: 0.35, value: formData.area },
        { feature: 'Location Type', importance: 0.28, value: formData.location },
        { feature: 'Property Condition', importance: 0.15, value: formData.condition },
        { feature: 'Number of Bedrooms', importance: 0.12, value: formData.bedrooms },
        { feature: 'Number of Bathrooms', importance: 0.10, value: formData.bathrooms }
      ]
    };
    
    setCurrentPrediction(prediction);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Price Prediction Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enter property details to get instant, accurate price predictions with detailed analysis and market insights
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">95%+</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">15min</div>
              <div className="text-sm text-gray-600">Data Updates</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Properties</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            House Price Prediction Dashboard
          </h2>
          <p className="text-gray-600">
            Get instant predictions with confidence scores and feature importance analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Prediction Form */}
          <div className="space-y-6">
            <PredictionForm onSubmit={handlePredictionSubmit} isLoading={isLoading} />
            {currentPrediction && <FeatureImportance prediction={currentPrediction} />}
          </div>

          {/* Right Column: Results and Heatmap */}
          <div className="space-y-6">
            <PredictionResults prediction={currentPrediction} isLoading={isLoading} />
            <PriceHeatmap />
          </div>
        </div>
      </div>
    </div>
  );
}