import React from 'react';
import Navbar from '../components/Navbar';
import { Clock, TrendingUp, TrendingDown, MapPin, Calendar } from 'lucide-react';

export default function PredictionHistory() {
  // Mock historical predictions
  const predictions = [
    {
      id: '1',
      address: '123 Oak Street, Downtown',
      predictedPrice: 425000,
      actualPrice: 420000,
      accuracy: 98.8,
      date: '2025-01-15',
      status: 'sold'
    },
    {
      id: '2',
      address: '456 Pine Avenue, Suburbs',
      predictedPrice: 315000,
      actualPrice: null,
      accuracy: null,
      date: '2025-01-14',
      status: 'pending'
    },
    {
      id: '3',
      address: '789 Elm Boulevard, Uptown',
      predictedPrice: 680000,
      actualPrice: 695000,
      accuracy: 97.8,
      date: '2025-01-12',
      status: 'sold'
    },
    {
      id: '4',
      address: '321 Maple Drive, Riverside',
      predictedPrice: 240000,
      actualPrice: 235000,
      accuracy: 97.9,
      date: '2025-01-10',
      status: 'sold'
    },
    {
      id: '5',
      address: '654 Cedar Lane, Historic District',
      predictedPrice: 550000,
      actualPrice: null,
      accuracy: null,
      date: '2025-01-08',
      status: 'pending'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getAccuracyColor = (accuracy: number | null) => {
    if (accuracy === null) return 'text-gray-500';
    if (accuracy >= 98) return 'text-green-600';
    if (accuracy >= 95) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    return status === 'sold' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const soldPredictions = predictions.filter(p => p.actualPrice !== null);
  const avgAccuracy = soldPredictions.reduce((sum, p) => sum + p.accuracy!, 0) / soldPredictions.length;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prediction History & Analytics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your prediction accuracy, analyze performance trends, and review historical property valuations
            </p>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Prediction History
          </h2>
          <p className="text-gray-600">
            Monitor your prediction accuracy and model performance metrics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Predictions</p>
                <p className="text-3xl font-bold text-gray-900">{predictions.length}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Average Accuracy</p>
                <p className="text-3xl font-bold text-green-600">{avgAccuracy.toFixed(1)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Properties Sold</p>
                <p className="text-3xl font-bold text-purple-600">{soldPredictions.length}</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Predictions Table */}
        <div className="enhanced-card rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Predictions</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Predicted Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actual Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {predictions.map((prediction) => (
                  <tr key={prediction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900">
                          {prediction.address}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatPrice(prediction.predictedPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {prediction.actualPrice ? formatPrice(prediction.actualPrice) : 'Pending'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {prediction.accuracy !== null ? (
                          <>
                            {prediction.accuracy > 98 ? (
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 text-yellow-500 mr-1" />
                            )}
                            <span className={`text-sm font-medium ${getAccuracyColor(prediction.accuracy)}`}>
                              {prediction.accuracy.toFixed(1)}%
                            </span>
                          </>
                        ) : (
                          <span className="text-sm text-gray-500">N/A</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(prediction.status)}`}>
                        {prediction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(prediction.date).toLocaleDateString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}