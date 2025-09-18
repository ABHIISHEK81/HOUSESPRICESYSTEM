import React from 'react';
import { Brain } from 'lucide-react';
import { Prediction } from '../types';

interface FeatureImportanceProps {
  prediction: Prediction;
}

export default function FeatureImportance({ prediction }: FeatureImportanceProps) {
  const maxImportance = Math.max(...prediction.featureImportance.map(f => f.importance));

  return (
    <div className="enhanced-card rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold text-gray-900">Feature Importance</h2>
      </div>

      <div className="space-y-4">
        {prediction.featureImportance.map((feature, index) => {
          const percentage = (feature.importance / maxImportance) * 100;
          
          return (
            <div key={index} className="feature-importance">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {feature.feature}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">
                    {typeof feature.value === 'string' ? feature.value : feature.value.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {(feature.importance * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <div className="text-xs text-purple-600 font-medium mb-1">SHAP EXPLANATION</div>
        <div className="text-sm text-purple-800">
          These scores represent how much each feature contributed to the final prediction. 
          Higher values indicate greater influence on the predicted price.
        </div>
      </div>
    </div>
  );
}