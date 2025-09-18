import React, { useState } from 'react';
import { X, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

interface HelpPopupProps {
  onClose: () => void;
}

export default function HelpPopup({ onClose }: HelpPopupProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate are the price predictions?",
      answer: "Our AI models achieve 95%+ accuracy by analyzing over 50 property features, comparable sales data, and current market conditions. The confidence score indicates prediction reliability."
    },
    {
      question: "What factors influence the price prediction?",
      answer: "Key factors include square footage, location, property condition, number of bedrooms/bathrooms, age, amenities like garage/pool, and local market trends."
    },
    {
      question: "How often is the data updated?",
      answer: "Our system updates market data every 15 minutes from multiple MLS sources, ensuring you get the most current pricing information available."
    },
    {
      question: "Can I save my prediction history?",
      answer: "Yes! Create an account to save unlimited predictions, track accuracy over time, and access detailed market analysis for your searches."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, we offer a fully responsive web application that works perfectly on all devices. A dedicated mobile app is coming soon!"
    },
    {
      question: "How do I interpret the feature importance chart?",
      answer: "The feature importance chart shows which property characteristics most influenced your price prediction, helping you understand what drives value in your area."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Help & FAQ</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Getting Started</h3>
            <p className="text-sm text-blue-800">
              Enter your property details in the prediction form, and our AI will analyze 
              the data to provide an instant price estimate with confidence score.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 mb-3">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Need More Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}