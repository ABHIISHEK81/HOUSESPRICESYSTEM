import React, { useState } from 'react';
import { X, Mail, Phone, MessageSquare, Send } from 'lucide-react';

interface ContactPopupProps {
  onClose: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    alert('Message sent successfully! We\'ll get back to you soon.');
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <div className="text-sm text-gray-600">support@housepriceai.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-gray-900">Phone</div>
                <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
            
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              required
            />
            
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-3 py-2 enhanced-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              required
            />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500">
          We typically respond within 24 hours during business days
        </div>
      </div>
    </div>
  );
}