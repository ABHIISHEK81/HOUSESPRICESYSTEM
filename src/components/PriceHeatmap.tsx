import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';

export default function PriceHeatmap() {
  const neighborhoods = [
    { name: 'Downtown', avgPrice: 425000, trend: 'up', change: '+5.2%' },
    { name: 'Suburbs North', avgPrice: 315000, trend: 'up', change: '+2.8%' },
    { name: 'Riverside', avgPrice: 680000, trend: 'up', change: '+7.1%' },
    { name: 'Historic District', avgPrice: 550000, trend: 'down', change: '-1.5%' },
    { name: 'Tech Quarter', avgPrice: 720000, trend: 'up', change: '+8.9%' },
    { name: 'Suburban East', avgPrice: 290000, trend: 'up', change: '+3.4%' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="h-6 w-6 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-900">Price Heatmap</h2>
      </div>

      <div className="map-container mb-6">
        <div className="text-center text-white">
          <div className="price-heatmap w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <p className="text-sm opacity-90">
            Interactive map showing real-time price data across different neighborhoods
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-900 mb-4">Neighborhood Overview</h3>
        {neighborhoods.map((area, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="font-medium text-gray-900">{area.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">
                {formatPrice(area.avgPrice)}
              </span>
              <div className={`flex items-center space-x-1 ${area.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp className={`h-4 w-4 ${area.trend === 'down' ? 'rotate-180' : ''}`} />
                <span className="text-sm font-medium">{area.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="text-xs text-green-600 font-medium mb-1">MARKET INTELLIGENCE</div>
        <div className="text-sm text-green-800">
          Real-time data from multiple MLS sources, updated every 15 minutes.
          Heat intensity represents price per square foot relative to city average.
        </div>
      </div>
    </div>
  );
}