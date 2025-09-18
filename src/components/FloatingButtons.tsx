import React, { useState } from 'react';
import { MessageCircle, HelpCircle, Settings, Phone, Mail, Calculator } from 'lucide-react';
import ContactPopup from './ContactPopup';
import HelpPopup from './HelpPopup';
import SettingsPopup from './SettingsPopup';
import QuickCalculatorPopup from './QuickCalculatorPopup';

export default function FloatingButtons() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (popupType: string) => {
    setActivePopup(popupType);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
      <div className="floating-buttons">
        <button
          className="floating-btn primary"
          onClick={() => openPopup('calculator')}
          title="Quick Calculator"
        >
          <Calculator className="h-6 w-6" />
        </button>
        
        <button
          className="floating-btn"
          onClick={() => openPopup('contact')}
          title="Contact Support"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
        
        <button
          className="floating-btn"
          onClick={() => openPopup('help')}
          title="Help & FAQ"
        >
          <HelpCircle className="h-6 w-6" />
        </button>
        
        <button
          className="floating-btn"
          onClick={() => openPopup('settings')}
          title="Settings"
        >
          <Settings className="h-6 w-6" />
        </button>
      </div>

      {activePopup === 'contact' && <ContactPopup onClose={closePopup} />}
      {activePopup === 'help' && <HelpPopup onClose={closePopup} />}
      {activePopup === 'settings' && <SettingsPopup onClose={closePopup} />}
      {activePopup === 'calculator' && <QuickCalculatorPopup onClose={closePopup} />}
    </>
  );
}