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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Market Analysis & Insights
          </h1>
          <p className="text-gray-600">
            Comprehensive market trends, regional analysis, and price forecasting
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