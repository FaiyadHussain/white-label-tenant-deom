// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';   // ✅ FIXED: Correct import (capital N)
import Hero from './components/Hero';
import Footer from './components/Footer';
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

  const handleThemeChange = (color) => setThemeColor(color);
  const handleLogoChange = (url) => setLogoUrl(url);
  const handleBgColorChange = (colorMode) => setBgColor(colorMode);

  const handleHeroImageChange = (imageUrl) => {
    console.log('Setting hero image in App:', imageUrl ? 'Image received' : 'No image');
    setHeroImage(imageUrl);
  };

  const handleCircularImagesChange = (images) => {
    console.log('Setting circular images in App:', images);
    setCircularImages(images);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Background classes
  const getBgClasses = () => {
    switch (bgColor) {
      case 'dark': return 'bg-gray-900 text-white';
      case 'gray': return 'bg-gray-50 text-gray-900';
      default: return 'bg-white text-gray-900';
    }
  };

  const getContentBgClasses = () => {
    switch (bgColor) {
      case 'dark': return 'bg-gray-800';
      case 'gray': return 'bg-white';
      default: return 'bg-gray-50';
    }
  };

  const getCardBgClasses = () => {
    switch (bgColor) {
      case 'dark': return 'bg-gray-700';
      case 'gray': return 'bg-white';
      default: return 'bg-white';
    }
  };

  const getTextColorClasses = () =>
    bgColor === 'dark' ? 'text-white' : 'text-gray-900';

  const getMutedTextColorClasses = () =>
    bgColor === 'dark' ? 'text-gray-300' : 'text-gray-600';

  const getBorderColorClasses = () =>
    bgColor === 'dark' ? 'border-gray-600' : 'border-gray-200';

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
      case 'courses': return <Courses {...pageProps} />;
      case 'materials': return <StudyMaterials {...pageProps} />;
      case 'tests': return <TestSeries {...pageProps} />;
      case 'results': return <Results {...pageProps} />;
      default: return <Hero {...pageProps} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getBgClasses()}`}>

      {/* ✅ FIXED: Proper React Component Tag */}
      <Navbar 
        themeColor={themeColor}
        logoUrl={logoUrl}
        bgColor={bgColor}
        heroImage={heroImage}
        onThemeChange={handleThemeChange}
        onLogoChange={handleLogoChange}
        onBgColorChange={handleBgColorChange}
        onHeroImageChange={handleHeroImageChange}
        onCircularImagesChange={handleCircularImagesChange}
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
    </div>
  );
}

export default App;
