import React from 'react';
import Navbar from '../components/Navbar';
import MarketTrends from '../components/MarketTrends';
import RegionalAnalysis from '../components/RegionalAnalysis';
import PriceForecast from '../components/PriceForecast';

export default function MarketAnalysis() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Market Analysis & Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive market trends, regional analysis, price forecasting, and investment insights powered by AI
            </p>
          </div>
          
          {/* Market Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">+12.8%</div>
              <div className="text-sm text-gray-600">YoY Growth</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">18 days</div>
              <div className="text-sm text-gray-600">Avg DOM</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-1">Low</div>
              <div className="text-sm text-gray-600">Inventory</div>
            </div>
            <div className="enhanced-card p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Seller's</div>
              <div className="text-sm text-gray-600">Market</div>
            </div>
          </div>
        </div>

        {/* Analysis Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Market Analysis & Insights
          </h2>
          <p className="text-gray-600">
            Real-time market data with predictive analytics and regional comparisons
          </p>
        </div>

        <div className="space-y-8">
          <MarketTrends />
          <div className="grid lg:grid-cols-2 gap-8">
            <RegionalAnalysis />
            <PriceForecast />
          </div>
        </div>
      </div>
    </div>
  );
}