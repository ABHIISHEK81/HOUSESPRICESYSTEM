import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, MapPin, Shield, Zap, Users, BarChart3, Clock, Target, Award, ArrowUp, Home, Calculator, Search } from 'lucide-react';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning models using XGBoost and neural networks for accurate price predictions with 95%+ accuracy rates.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Analysis',
      description: 'Get instant property valuations with live market data and dynamic pricing algorithms updated every 15 minutes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Interactive heatmaps and geographic analysis for neighborhood price trends and market insights.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Market Forecasting',
      description: 'Historical trends, price forecasts, and comprehensive market analysis tools for informed decision making.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Model Explainability',
      description: 'SHAP-based feature importance and transparent predictions you can trust with detailed breakdowns.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Multi-User Dashboard',
      description: 'Personal prediction history, saved searches, and collaborative analysis tools for teams.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const suggestions = [
    'House Price Prediction',
    'Market Analysis Dashboard',
    'Property Valuation Tool',
    'Real Estate Analytics',
    'Investment Calculator'
  ];

  const stats = [
    { number: '95%+', label: 'Prediction Accuracy', icon: Target },
    { number: '50K+', label: 'Properties Analyzed', icon: MapPin },
    { number: '15min', label: 'Data Update Frequency', icon: Clock },
    { number: '24/7', label: 'System Availability', icon: Shield }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to dashboard with search query
      window.location.href = '/signup';
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="base44-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">HousePriceAI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="nav-link">Product</a>
              <a href="#how-it-works" className="nav-link">Resources</a>
              <a href="#testimonials" className="nav-link">Pricing</a>
              <a href="#footer" className="nav-link">Enterprise</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="nav-link"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="cta-button"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-7xl font-bold mb-8 leading-tight text-gray-900">
              Let's make your dream a{' '}
              <span className="gradient-text">reality.</span>
              <br />
              Right now.
            </h1>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-700">
              HousePriceAI lets you build fully-functional property valuations in minutes with just your words.
              <br />
              No coding necessary.
            </p>

            {/* Search Interface */}
            <div className="search-container">
              <div className="relative">
                <input
                  type="text"
                  className="search-input"
                  placeholder="What do you want to build?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  className="search-button"
                  onClick={handleSearch}
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600 mb-4">Not sure where to start? Try one of these:</p>
                <div className="suggestion-pills">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="pill"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-layer-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-layer-2 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Advanced AI-Powered Features
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our system combines cutting-edge artificial intelligence with intuitive design to deliver 
              the most accurate property valuations and market insights available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="section-layer-3 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              How It Works
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Get accurate property valuations in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Enter Property Details</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Input basic property information including location, size, bedrooms, bathrooms, and condition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">AI Analysis</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Our advanced ML models analyze your property against millions of data points and market trends.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">Get Instant Results</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Receive accurate price predictions with confidence scores and detailed market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-layer-1 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Built for Every Real Estate Professional
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Whether you're buying your first home or managing a portfolio of investments, 
              our platform provides the tools you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
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
            ].map((benefit, index) => (
              <div key={index} className="base44-card p-8 text-center hover-lift">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-layer-2 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-8">
              Trusted by Professionals
            </h2>
            <p className="text-2xl text-gray-600">
              See what real estate professionals are saying about our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'John Davis',
                role: 'Real Estate Agent',
                avatar: 'JD',
                quote: 'The accuracy of predictions has helped me price properties perfectly. My clients trust the data-driven approach.',
                color: 'from-blue-500 to-purple-600'
              },
              {
                name: 'Sarah Miller',
                role: 'Property Investor',
                avatar: 'SM',
                quote: 'This platform has revolutionized how I analyze investment opportunities. The ROI predictions are incredibly accurate.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                name: 'Mike Johnson',
                role: 'Home Buyer',
                avatar: 'MJ',
                quote: 'As a first-time buyer, this tool gave me confidence in my purchase decision. The market insights were invaluable.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((testimonial, index) => (
              <div key={index} className="base44-card p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-layer-3 py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold mb-10 text-gray-900">
            Ready to Transform Your Real Estate Analysis?
          </h2>
          <p className="text-2xl mb-16 leading-relaxed text-gray-700 max-w-4xl mx-auto">
            Join thousands of professionals who trust our AI-powered predictions 
            for accurate property valuations and market insights.
          </p>
          <div className="flex justify-center space-x-8">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-semibold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Your Free Trial Today
            </Link>
            <Link
              to="/login"
              className="bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-12 py-4 rounded-2xl font-semibold text-xl transition-all hover:shadow-lg"
            >
              View Live Demo
            </Link>
          </div>
          <p className="mt-8 text-lg text-gray-600">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="section-layer-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">HousePriceAI</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Advanced AI-powered real estate price prediction system for professionals and individuals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-900">Product</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link to="/signup" className="hover:text-gray-900 transition-colors">Features</Link></li>
                <li><Link to="/login" className="hover:text-gray-900 transition-colors">Demo</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-900">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6 text-gray-900">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              © 2025 HousePriceAI. All rights reserved. Real-time house price prediction powered by advanced machine learning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}