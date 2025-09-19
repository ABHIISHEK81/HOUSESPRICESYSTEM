import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Italic as Crystal, TrendingUp } from 'lucide-react';

export default function PriceForecast() {
  const forecastData = [
    { period: 'Q4 2024', actual: 545000, predicted: null },
    { period: 'Q1 2025', actual: null, predicted: 558000 },
    { period: 'Q2 2025', actual: null, predicted: 572000 },
    { period: 'Q3 2025', actual: null, predicted: 585000 },
    { period: 'Q4 2025', actual: null, predicted: 597000 },
    { period: 'Q1 2026', actual: null, predicted: 608000 }
  ];

  const combinedData = forecastData.map(item => ({
    ...item,
    price: item.actual || item.predicted
  }));

  const currentPrice = 545000;
  const projectedPrice = 608000;
  const growth = ((projectedPrice - currentPrice) / currentPrice) * 100;

  return (
    <div className="base44-card p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Crystal className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Price Forecast</h2>
      </div>

      <div className="mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={combinedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="period" stroke="#666" />
            <YAxis 
              stroke="#666"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value: any) => [`$${value.toLocaleString()}`, 'Price']}
              labelStyle={{ color: '#666' }}
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              connectNulls={false}
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-600">Current Avg Price</div>
          <div className="text-xl font-bold text-blue-700">
            ${currentPrice.toLocaleString()}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-purple-600">12-Month Forecast</div>
          <div className="text-xl font-bold text-purple-700">
            ${projectedPrice.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Projected Growth</span>
        </div>
        <div className="text-lg font-bold text-green-600">
          +{growth.toFixed(1)}%
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <div className="text-xs text-purple-600 font-medium mb-1">AI FORECAST MODEL</div>
        <div className="text-sm text-purple-800">
          Predictions based on economic indicators, population growth, interest rates, 
          and historical market patterns using ensemble ML models.
        </div>
      </div>
    </div>
  );
}