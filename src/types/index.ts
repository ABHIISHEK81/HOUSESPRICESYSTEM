export interface Prediction {
  id: string;
  predictedPrice: number;
  confidence: number;
  features: PropertyFeatures;
  timestamp: string;
  featureImportance: FeatureImportance[];
}

export interface PropertyFeatures {
  address: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  location: string;
  condition: string;
  age: number;
  hasGarage: boolean;
  hasPool: boolean;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  value: string | number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}