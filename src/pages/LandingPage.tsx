import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, MapPin, Shield, Zap, Users, BarChart3, Clock, Target, Award } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning models using XGBoost and neural networks for accurate price predictions with 95%+ accuracy rates.'
    },
    {
      icon: Zap,
      title: 'Real-Time Analysis',
      description: 'Get instant property valuations with live market data and dynamic pricing algorithms updated every 15 minutes.'
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Interactive heatmaps and geographic analysis for neighborhood price trends and market insights.'
    },
    {
      icon: TrendingUp,
      title: 'Market Forecasting',
      description: 'Historical trends, price forecasts, and comprehensive market analysis tools for informed decision making.'
    },
    {
      icon: Shield,
      title: 'Model Explainability',
      description: 'SHAP-based feature importance and transparent predictions you can trust with detailed breakdowns.'
    },
    {
      icon: Users,
      title: 'Multi-User Dashboard',
      description: 'Personal prediction history, saved searches, and collaborative analysis tools for teams.'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'For Buyers',
      description: 'Make informed decisions with accurate price predictions and market analysis before making offers.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'For Sellers',
      description: 'Price your property competitively with AI-driven valuations and market trend insights.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'For Investors',
      description: 'Identify profitable opportunities with comprehensive market analysis and ROI predictions.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Award,
      title: 'For Professionals',
      description: 'Enhance your services with professional-grade tools and detailed market reports.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '95%+', label: 'Prediction Accuracy', icon: Target },
    { number: '50K+', label: 'Properties Analyzed', icon: MapPin },
    { number: '15min', label: 'Data Update Frequency', icon: Clock },
    { number: '24/7', label: 'System Availability', icon: Shield }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="glass-container shadow-sm fixed w-full top-0 z-50">
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
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Real-Time House Price
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Prediction System
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of advanced machine learning to get accurate, real-time property valuations. 
              Perfect for buyers, sellers, investors, and real estate professionals seeking data-driven insights.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/login"
                className="glass-effect px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="enhanced-card p-6 text-center feature-importance">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our system combines cutting-edge artificial intelligence with intuitive design to deliver 
              the most accurate property valuations and market insights available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="enhanced-card p-8 feature-importance group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Built for Every Real Estate Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're buying your first home or managing a portfolio of investments, 
              our platform provides the tools you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="enhanced-card p-8 text-center feature-importance">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get accurate property valuations in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enter Property Details</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Input basic property information including location, size, bedrooms, bathrooms, and condition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our advanced ML models analyze your property against millions of data points and market trends.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Instant Results</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receive accurate price predictions with confidence scores and detailed market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Trusted by Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what real estate professionals are saying about our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="enhanced-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-gray-600">Real Estate Agent</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The accuracy of predictions has helped me price properties perfectly. My clients trust the data-driven approach."
              </p>
            </div>

            <div className="enhanced-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-gray-600">Property Investor</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "This platform has revolutionized how I analyze investment opportunities. The ROI predictions are incredibly accurate."
              </p>
            </div>

            <div className="enhanced-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-gray-600">Home Buyer</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a first-time buyer, this tool gave me confidence in my purchase decision. The market insights were invaluable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Transform Your Real Estate Analysis?
          </h2>
          <p className="text-2xl mb-12 leading-relaxed">
            Join thousands of professionals who trust our AI-powered predictions 
            for accurate property valuations and market insights.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Free Trial Today
            </Link>
            <Link
              to="/login"
              className="glass-effect px-10 py-4 rounded-lg font-semibold text-xl hover:bg-white hover:bg-opacity-20 transition-colors border border-white border-opacity-30"
            >
              View Live Demo
            </Link>
          </div>
          <p className="mt-8 text-lg opacity-90">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6" />
                <span className="font-bold text-xl">HousePriceAI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Advanced AI-powered real estate price prediction system for professionals and individuals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/signup" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Demo</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HousePriceAI. All rights reserved. Real-time house price prediction powered by advanced machine learning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}