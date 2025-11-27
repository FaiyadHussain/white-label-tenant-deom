// src/App.jsx
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Courses from './pages/Courses';
import StudyMaterials from './pages/StudyMaterials';
import TestSeries from './pages/TestSeries';
import Results from './pages/Results';

function App() {
  const [themeColor, setThemeColor] = useState('#3B82F6');
  const [logoUrl, setLogoUrl] = useState('');
  const [bgColor, setBgColor] = useState('light');
  const [heroImage, setHeroImage] = useState('');
  const [circularImages, setCircularImages] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const handleThemeChange = (color) => {
    setThemeColor(color);
  };

  const handleLogoChange = (url) => {
    setLogoUrl(url);
  };

  const handleBgColorChange = (colorMode) => {
    setBgColor(colorMode);
  };

  const handleHeroImageChange = (imageUrl) => {
    console.log('Setting hero image in App:', imageUrl ? 'Image received' : 'No image');
    setHeroImage(imageUrl);
  };

  // Add handler for circular images
  const handleCircularImagesChange = (images) => {
    console.log('Setting circular images in App:', images);
    setCircularImages(images);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get background classes based on selected mode
  const getBgClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gray':
        return 'bg-gray-50 text-gray-900';
      default:
        return 'bg-white text-gray-900';
    }
  };

  const getContentBgClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'bg-gray-800';
      case 'gray':
        return 'bg-white';
      default:
        return 'bg-gray-50';
    }
  };

  const getCardBgClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'bg-gray-700';
      case 'gray':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  };

  const getTextColorClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  const getMutedTextColorClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'text-gray-300';
      default:
        return 'text-gray-600';
    }
  };

  const getBorderColorClasses = () => {
    switch (bgColor) {
      case 'dark':
        return 'border-gray-600';
      default:
        return 'border-gray-200';
    }
  };

  const renderCurrentPage = () => {
    const pageProps = {
      themeColor,
      logoUrl,
      bgColor,
      heroImage,
      circularImages,
      getBgClasses,
      getContentBgClasses,
      getCardBgClasses,
      getTextColorClasses,
      getMutedTextColorClasses,
      getBorderColorClasses
    };

    switch (currentPage) {
      case 'courses':
        return <Courses {...pageProps} />;
      case 'materials':
        return <StudyMaterials {...pageProps} />;
      case 'tests':
        return <TestSeries {...pageProps} />;
      case 'results':
        return <Results {...pageProps} />;
      default:
        return <Hero {...pageProps} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getBgClasses()}`}>
      <Navbar 
        themeColor={themeColor}
        logoUrl={logoUrl}
        bgColor={bgColor}
        heroImage={heroImage}
        onThemeChange={handleThemeChange}
        onLogoChange={handleLogoChange}
        onBgColorChange={handleBgColorChange}
        onHeroImageChange={handleHeroImageChange}
        onCircularImagesChange={handleCircularImagesChange} // Add this line
        currentPage={currentPage}
        onPageChange={handlePageChange}
        getCardBgClasses={getCardBgClasses}
        getTextColorClasses={getTextColorClasses}
        getBorderColorClasses={getBorderColorClasses}
      />
      {renderCurrentPage()}
      <Footer 
        themeColor={themeColor} 
        logoUrl={logoUrl}
        bgColor={bgColor}
        heroImage={heroImage}
        getCardBgClasses={getCardBgClasses}
        getTextColorClasses={getTextColorClasses}
        getMutedTextColorClasses={getMutedTextColorClasses}
      />

      {/* Debug info - remove in production */}
      {/* <div className="fixed bottom-4 left-4 bg-black text-white p-3 rounded-lg text-xs z-50">
        <div><strong>Debug Info:</strong></div>
        <div>Hero Image: {heroImage ? '✓ Set' : '✗ Not set'}</div>
        <div>Logo: {logoUrl ? '✓ Set' : '✗ Not set'}</div>
        <div>Circular Images: {circularImages.filter(img => img.image).length}</div>
        <div>Theme: {themeColor}</div>
        <div>BG Mode: {bgColor}</div>
      </div> */}
    </div>
  );
}

export default App;