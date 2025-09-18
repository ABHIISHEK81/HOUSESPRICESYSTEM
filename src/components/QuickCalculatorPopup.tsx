import React, { useState } from 'react';
import { X, Calculator, DollarSign, Home } from 'lucide-react';

interface QuickCalculatorPopupProps {
  onClose: () => void;
}

export default function QuickCalculatorPopup({ onClose }: QuickCalculatorPopupProps) {
  const [values, setValues] = useState({
    homePrice: 400000,
    downPayment: 20,
    interestRate: 6.5,
    loanTerm: 30
  });

  const calculateMortgage = () => {
    const principal = values.homePrice * (1 - values.downPayment / 100);
    const monthlyRate = values.interestRate / 100 / 12;
    const numPayments = values.loanTerm * 12;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return {
      monthlyPayment: monthlyPayment,
      totalInterest: (monthlyPayment * numPayments) - principal,
      downPaymentAmount: values.homePrice * (values.downPayment / 100)
    };
  };

  const results = calculateMortgage();

  const handleChange = (field: string, value: number) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Mortgage Calculator</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">Loan Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Home className="inline h-4 w-4 mr-1" />
                Home Price
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={values.homePrice}
                onChange={(e) => handleChange('homePrice', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Down Payment (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={values.downPayment}
                onChange={(e) => handleChange('downPayment', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={values.interestRate}
                onChange={(e) => handleChange('interestRate', parseFloat(e.target.value) || 0)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term (Years)
              </label>
              <select
                className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={values.loanTerm}
                onChange={(e) => handleChange('loanTerm', parseInt(e.target.value))}
              >
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={25}>25 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Breakdown</h3>
            
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-700">Monthly Payment</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600">
                    {formatCurrency(results.monthlyPayment)}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment</span>
                  <span className="font-semibold">{formatCurrency(results.downPaymentAmount)}</span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-semibold">
                    {formatCurrency(values.homePrice - results.downPaymentAmount)}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-semibold">
                    {formatCurrency(results.downPaymentAmount + (values.homePrice - results.downPaymentAmount) + results.totalInterest)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <div className="text-xs text-yellow-600 font-medium mb-1">ESTIMATE ONLY</div>
              <div className="text-sm text-yellow-800">
                This calculation doesn't include taxes, insurance, or PMI. 
                Consult with a lender for accurate quotes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}