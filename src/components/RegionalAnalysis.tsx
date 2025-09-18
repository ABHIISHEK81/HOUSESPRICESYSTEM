import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { MapPin } from 'lucide-react';

export default function RegionalAnalysis() {
  const regionData = [
    { name: 'Urban Core', value: 35, avgPrice: 650000, color: '#3B82F6' },
    { name: 'Suburban North', value: 28, avgPrice: 450000, color: '#10B981' },
    { name: 'Suburban South', value: 22, avgPrice: 380000, color: '#F59E0B' },
    { name: 'Riverside', value: 10, avgPrice: 720000, color: '#8B5CF6' },
    { name: 'Rural Areas', value: 5, avgPrice: 280000, color: '#EF4444' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="enhanced-card rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MapPin className="h-6 w-6 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-900">Regional Analysis</h2>
      </div>

      <div className="mb-6">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={regionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {regionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: any) => [`${value}%`, 'Market Share']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        {regionData.map((region, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: region.color }}
              ></div>
              <div>
                <div className="font-medium text-gray-900">{region.name}</div>
                <div className="text-sm text-gray-500">{region.value}% of sales</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900">
                {formatPrice(region.avgPrice)}
              </div>
              <div className="text-sm text-gray-500">Avg Price</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <div className="text-xs text-green-600 font-medium mb-1">REGIONAL INSIGHTS</div>
        <div className="text-sm text-green-800">
          Urban Core continues to dominate with highest prices, while Suburban areas 
          show strong growth potential with increasing inventory.
        </div>
      </div>
    </div>
  );
}