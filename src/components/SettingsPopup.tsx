import React, { useState } from 'react';
import { X, Settings, Moon, Sun, Bell, Globe, Palette } from 'lucide-react';

interface SettingsPopupProps {
  onClose: () => void;
}

export default function SettingsPopup({ onClose }: SettingsPopupProps) {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    currency: 'USD',
    language: 'en',
    theme: 'default'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = () => {
    // Simulate saving settings
    localStorage.setItem('housepriceai-settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Settings className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Appearance */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Appearance
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {settings.darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <span className="font-medium">Dark Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.darkMode}
                    onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                <select
                  className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={settings.theme}
                  onChange={(e) => handleSettingChange('theme', e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="professional">Professional</option>
                  <option value="modern">Modern</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h3>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* Localization */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Localization
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select
                  className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={settings.currency}
                  onChange={(e) => handleSettingChange('currency', e.target.value)}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD (C$)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 mt-8">
          <button
            onClick={saveSettings}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
          >
            Save Settings
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}