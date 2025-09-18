import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';

export default function MarketTrends() {
  const monthlyData = [
    { month: 'Jan', avgPrice: 420000, volume: 1200, inventory: 2800 },
    { month: 'Feb', avgPrice: 435000, volume: 1350, inventory: 2600 },
    { month: 'Mar', avgPrice: 448000, volume: 1580, inventory: 2400 },
    { month: 'Apr', avgPrice: 465000, volume: 1720, inventory: 2200 },
    { month: 'May', avgPrice: 478000, volume: 1850, inventory: 2000 },
    { month: 'Jun', avgPrice: 490000, volume: 1920, inventory: 1900 },
    { month: 'Jul', avgPrice: 502000, volume: 1980, inventory: 1850 },
    { month: 'Aug', avgPrice: 515000, volume: 2100, inventory: 1800 },
    { month: 'Sep', avgPrice: 528000, volume: 2200, inventory: 1750 },
    { month: 'Oct', avgPrice: 535000, volume: 2050, inventory: 1900 },
    { month: 'Nov', avgPrice: 540000, volume: 1800, inventory: 2100 },
    { month: 'Dec', avgPrice: 545000, volume: 1650, inventory: 2300 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Market Trends</h2>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>Last 12 Months</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Price Trend */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Average Home Prices</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis 
                stroke="#666"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: any) => [`$${value.toLocaleString()}`, 'Avg Price']}
                labelStyle={{ color: '#666' }}
              />
              <Line 
                type="monotone" 
                dataKey="avgPrice" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Volume */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Volume & Inventory</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                formatter={(value: any, name: string) => [
                  value.toLocaleString(), 
                  name === 'volume' ? 'Sales Volume' : 'Inventory'
                ]}
                labelStyle={{ color: '#666' }}
              />
              <Legend />
              <Bar dataKey="volume" fill="#10B981" name="Sales Volume" />
              <Bar dataKey="inventory" fill="#F59E0B" name="Inventory" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Summary */}
      <div className="mt-8 grid md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-600">YoY Growth</div>
          <div className="text-2xl font-bold text-blue-700">+12.8%</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-green-600">Avg Days on Market</div>
          <div className="text-2xl font-bold text-green-700">18 days</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-yellow-600">Inventory Levels</div>
          <div className="text-2xl font-bold text-yellow-700">Low</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-purple-600">Market Status</div>
          <div className="text-2xl font-bold text-purple-700">Seller's</div>
        </div>
      </div>
    </div>
  );
}