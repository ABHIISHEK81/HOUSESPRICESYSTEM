import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, MapPin, Shield, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning models using XGBoost and neural networks for accurate price predictions.'
    },
    {
      icon: Zap,
      title: 'Real-Time Analysis',
      description: 'Get instant property valuations with live market data and dynamic pricing algorithms.'
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Interactive heatmaps and geographic analysis for neighborhood price trends.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Historical trends, price forecasts, and comprehensive market analysis tools.'
    },
    {
      icon: Shield,
      title: 'Model Explainability',
      description: 'SHAP-based feature importance and transparent predictions you can trust.'
    },
    {
      icon: Users,
      title: 'Multi-User Dashboard',
      description: 'Personal prediction history, saved searches, and collaborative analysis.'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="glass-container shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">HousePriceAI</span>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Real-Time House Price
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Prediction System
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of advanced machine learning to get accurate, real-time property valuations. 
              Perfect for buyers, sellers, investors, and real estate professionals.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="glass-effect px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Features for Professional Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our system combines cutting-edge AI with intuitive design to deliver 
              the most accurate property valuations in the market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="enhanced-card p-6 feature-importance"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with Enterprise-Grade Technology
            </h2>
            <p className="text-lg text-gray-600">
              Powered by the latest advances in machine learning and web technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Python & ML', 'XGBoost', 'React.js', 'PostgreSQL', 'FastAPI', 'TensorFlow', 'AWS Cloud', 'Docker'].map((tech) => (
              <div key={tech} className="text-center p-4 enhanced-card">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{tech.charAt(0)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Real Estate Analysis?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of professionals who trust our AI-powered predictions 
            for accurate property valuations and market insights.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6" />
            <span className="font-bold text-xl">HousePriceAI</span>
          </div>
          <p className="text-gray-400">
            © 2025 HousePriceAI. Real-time house price prediction powered by advanced machine learning.
          </p>
        </div>
      </footer>
    </div>
  );
}