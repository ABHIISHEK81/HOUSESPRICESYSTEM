import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import PredictionHistory from './pages/PredictionHistory';
import MarketAnalysis from './pages/MarketAnalysis';
import FloatingButtons from './components/FloatingButtons';
import BackgroundParticles from './components/BackgroundParticles';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen">
            <BackgroundParticles />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/history" element={
                <ProtectedRoute>
                  <PredictionHistory />
                </ProtectedRoute>
              } />
              <Route path="/analysis" element={
                <ProtectedRoute>
                  <MarketAnalysis />
                </ProtectedRoute>
              } />
            </Routes>
            <FloatingButtons />
          </div>
        </Router>
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;