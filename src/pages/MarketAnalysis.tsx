import React from 'react';
import Navbar from '../components/Navbar';
import MarketTrends from '../components/MarketTrends';
import RegionalAnalysis from '../components/RegionalAnalysis';
import PriceForecast from '../components/PriceForecast';

export default function MarketAnalysis() {
  return (
    <div className="min-h-screen section-layer-3">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12 pt-16">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Market Analysis & Intelligence
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive market trends, regional analysis, price forecasting, and investment insights powered by AI
            </p>
          </div>
          
          {/* Market Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="stats-card hover-lift">
              <div className="text-3xl font-bold text-green-600 mb-2">+12.8%</div>
              <div className="text-gray-600 font-medium">YoY Growth</div>
            </div>
            <div className="stats-card hover-lift">
              <div className="text-3xl font-bold text-blue-600 mb-2">18 days</div>
              <div className="text-gray-600 font-medium">Avg DOM</div>
            </div>
            <div className="stats-card hover-lift">
              <div className="text-3xl font-bold text-yellow-600 mb-2">Low</div>
              <div className="text-gray-600 font-medium">Inventory</div>
            </div>
            <div className="stats-card hover-lift">
              <div className="text-3xl font-bold text-purple-600 mb-2">Seller's</div>
              <div className="text-gray-600 font-medium">Market</div>
            </div>
          </div>
        </div>

        {/* Analysis Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Market Analysis & Insights
          </h2>
          <p className="text-gray-600 text-lg">
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