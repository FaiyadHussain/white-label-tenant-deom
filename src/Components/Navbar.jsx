// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DemoPanel from './DemoPanel';

const Navbar = ({
  themeColor,
  logoUrl,
  bgColor,
  heroImage,
  onThemeChange,
  onLogoChange,
  onBgColorChange,
  onHeroImageChange,
  onCircularImagesChange,
  currentPage,
  onPageChange,
  getCardBgClasses,
  getTextColorClasses,
  getBorderColorClasses
}) => {
  const [showDemoPanel, setShowDemoPanel] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenDemoPanel = () => {
    setShowDemoPanel(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening demo panel
  };

  const handleCloseDemoPanel = () => {
    setShowDemoPanel(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePageChange = (pageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'materials', label: 'Study Materials' },
    { id: 'tests', label: 'Test Series' },
    { id: 'results', label: 'Results' }
  ];

  return (
    <>
      <nav className={`border-b ${getBorderColorClasses()} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {logoUrl && (
                <img 
                  src={logoUrl} 
                  alt="Logo" 
                  className="h-8 w-auto sm:h-10" 
                />
              )}
              <h1 
                className="text-lg sm:text-xl font-bold"
                style={{ color: themeColor }}
              >
                {logoUrl ? 'Your College' : 'JEE & NEET Prep'}
              </h1>
            </div>

            {/* Center - Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`font-medium transition-colors text-sm lg:text-base ${
                    currentPage === item.id 
                      ? 'font-bold' 
                      : `${getTextColorClasses()} opacity-80 hover:opacity-100`
                  }`}
                  style={{
                    color: currentPage === item.id ? themeColor : undefined
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side - Customize Button & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Customize Button */}
              <button
                onClick={handleOpenDemoPanel}
                className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-white font-medium transition-all hover:opacity-90 text-sm sm:text-base"
                style={{ backgroundColor: themeColor }}
              >
                Customize
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: themeColor }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentPage === item.id 
                        ? 'font-bold' 
                        : `${getTextColorClasses()} opacity-80 hover:opacity-100`
                    }`}
                    style={{
                      color: currentPage === item.id ? themeColor : undefined,
                      backgroundColor: currentPage === item.id ? `${themeColor}10` : 'transparent'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Panel */}
      {showDemoPanel && (
        <DemoPanel
          themeColor={themeColor}
          logoUrl={logoUrl}
          bgColor={bgColor}
          heroImage={heroImage}
          onThemeChange={onThemeChange}
          onLogoChange={onLogoChange}
          onBgColorChange={onBgColorChange}
          onHeroImageChange={onHeroImageChange}
          onCircularImagesChange={onCircularImagesChange}
          onClose={handleCloseDemoPanel}
        />
      )}
    </>
  );
};

export default Navbar;