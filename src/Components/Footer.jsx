// src/components/Footer.jsx
import React from 'react';

const Footer = ({ 
  themeColor, 
  logoUrl,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses 
}) => {
  
  const getFooterBgClass = () => {
    switch (bgColor) {
      case 'dark':
        return 'bg-gray-800';
      case 'gray':
        return 'bg-gray-900';
      default:
        return 'bg-gray-900';
    }
  };

  return (
    <footer className={`transition-colors duration-300 ${getFooterBgClass()} text-white`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="College Logo" 
              className="h-12 mx-auto mb-4 object-contain"
            />
          ) : (
            <div className="text-2xl font-bold mb-4">JEE & NEET Prep</div>
          )}
          <p className="text-gray-400 max-w-2xl mx-auto">
            {logoUrl 
              ? "Your trusted partner for medical and engineering entrance preparation"
              : "Demo website for JEE and NEET coaching institutes"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: themeColor }}>
              Contact Info
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>📞 +91 9876543210</p>
              <p>✉️ contact@example.com</p>
              <p>📍 Education Hub, Learning City</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: themeColor }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: themeColor }}>
              Demo Features
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Custom Logo Upload</li>
              <li>✓ Theme Color Change</li>
              <li>✓ Background Modes</li>
              <li>✓ Real-time Preview</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
  <p className="text-gray-400">
    © 2025 . All rights reserved.
  </p>

  <div className="flex items-center justify-center gap-3 mt-3">
  
  <p className="text-sm font-medium bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
    Powered by 
    <span className="font-semibold bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 bg-clip-text text-transparent ml-1">
    Brihathi Technology Services
    </span>
  </p>

  <img
    src="/brihathi-logo.png"
    alt="Brihathi Logo"
    className="w-10 h-10 object-contain drop-shadow-[0_0_6px_rgba(0,150,255,0.7)] brightness-110"
  />
</div>

</div>


      </div>
    </footer>
  );
};

export default Footer;