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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            House Price Prediction Dashboard
          </h1>
          <p className="text-gray-600">
            Enter property details to get AI-powered price predictions with detailed analysis
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