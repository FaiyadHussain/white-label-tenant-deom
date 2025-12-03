// src/components/DemoPanel.jsx
import React, { useState, useRef } from 'react';

const DemoPanel = ({ 
  themeColor = '#3B82F6', 
  logoUrl = null, 
  collegeName = "Your College",
  bgColor = 'light', 
  heroImage = null,
  onThemeChange = () => console.log('onThemeChange not provided'),
  onLogoChange = () => console.log('onLogoChange not provided'),
  onCollegeNameChange = () => console.log('onCollegeNameChange not provided'),
  onBgColorChange = () => console.log('onBgColorChange not provided'),
  onHeroImageChange = () => console.log('onHeroImageChange not provided'),
  onCircularImagesChange = () => console.log('onCircularImagesChange not provided'),
  onClose = () => console.log('onClose not provided')
}) => {
  const [tempColor, setTempColor] = useState(themeColor);
  const [tempCollegeName, setTempCollegeName] = useState(collegeName);
  const [logoPreview, setLogoPreview] = useState(logoUrl);
  const [heroImagePreview, setHeroImagePreview] = useState(heroImage);
  const [tempBgColor, setTempBgColor] = useState(bgColor);
  const [circularImages, setCircularImages] = useState([
    { id: 1, name: "", role: "Director", department: "", image: null },
    { id: 2, name: "", role: "Principal", department: "", image: null },
  ]);
  
  const fileInputRef = useRef(null);
  const heroFileInputRef = useRef(null);
  const circularFileInputRefs = useRef([]);

  const handleImageUpload = (event, type, index = null) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size too large. Please select a file smaller than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        console.log(`${type} image uploaded successfully`);
        
        if (type === 'logo') {
          setLogoPreview(imageUrl);
        } else if (type === 'hero') {
          setHeroImagePreview(imageUrl);
        } else if (type === 'circular' && index !== null) {
          const updatedImages = [...circularImages];
          updatedImages[index] = { ...updatedImages[index], image: imageUrl };
          setCircularImages(updatedImages);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (index, field, value) => {
    const updatedImages = [...circularImages];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setCircularImages(updatedImages);
  };

  const handleApplyDemo = () => {
    console.log('Applying demo changes...');
    
    // Apply college name if changed
    if (tempCollegeName !== collegeName && tempCollegeName.trim() !== '') {
      console.log('Applying new college name:', tempCollegeName);
      onCollegeNameChange(tempCollegeName);
    }

    // Apply logo if changed
    if (logoPreview !== logoUrl) {
      console.log('Applying new logo');
      onLogoChange(logoPreview);
    }

    // Apply hero image if changed
    if (heroImagePreview !== heroImage) {
      console.log('Applying new hero image');
      onHeroImageChange(heroImagePreview);
    }

    // Apply circular images with names
    const hasCircularImages = circularImages.some(img => img.image !== null || img.name.trim() !== '');
    if (hasCircularImages) {
      console.log('Applying circular images with names');
      onCircularImagesChange(circularImages);
    }

    // Apply theme color if changed
    if (tempColor !== themeColor) {
      onThemeChange(tempColor);
    }

    // Apply background color if changed
    if (tempBgColor !== bgColor) {
      onBgColorChange(tempBgColor);
    }

    onClose();
  };

  const handleUploadClick = (type, index = null) => {
    if (type === 'logo') {
      fileInputRef.current?.click();
    } else if (type === 'hero') {
      heroFileInputRef.current?.click();
    } else if (type === 'circular' && index !== null) {
      circularFileInputRefs.current[index]?.click();
    }
  };

  const handleRemoveImage = (type, e, index = null) => {
    e.stopPropagation();
    if (type === 'logo') {
      setLogoPreview(null);
    } else if (type === 'hero') {
      setHeroImagePreview(null);
    } else if (type === 'circular' && index !== null) {
      const updatedImages = [...circularImages];
      updatedImages[index] = { ...updatedImages[index], image: null };
      setCircularImages(updatedImages);
    }
  };

  const predefinedColors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'
  ];

  const bgColorOptions = [
    { value: 'light', label: 'Light Mode', icon: '☀️' },
    { value: 'dark', label: 'Dark Mode', icon: '🌙' },
    { value: 'gray', label: 'Gray Mode', icon: '⚪' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Customize Your Website</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Images and College Name */}
            <div className="lg:col-span-2 space-y-6">
              {/* College Name Input */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">College Name</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={tempCollegeName}
                    onChange={(e) => setTempCollegeName(e.target.value)}
                    placeholder="Enter your college name"
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                  <p className="text-xs text-gray-500">
                    This name will appear in the navigation bar and hero section
                  </p>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">College Logo</label>
                <div 
                  onClick={() => handleUploadClick('logo')}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
                >
                  {logoPreview ? (
                    <div className="space-y-3">
                      <img src={logoPreview} alt="Logo Preview" className="h-12 mx-auto object-contain" />
                      <div className="flex space-x-2 justify-center">
                        <p className="text-sm text-green-600 font-medium">✓ Logo Selected</p>
                        <button 
                          type="button"
                          onClick={(e) => handleRemoveImage('logo', e)}
                          className="text-sm text-red-600 font-medium hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-2xl">📁</div>
                      <p className="text-gray-600 text-sm font-medium">Upload Logo</p>
                      <p className="text-xs text-gray-500">PNG, JPG, SVG</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleImageUpload(e, 'logo')}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Hero Image Upload */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">Hero Image</label>
                <div 
                  onClick={() => handleUploadClick('hero')}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors min-h-[120px] flex items-center justify-center"
                >
                  {heroImagePreview ? (
                    <div className="space-y-2 w-full">
                      <div className="text-2xl">🖼️</div>
                      <div className="flex space-x-2 justify-center items-center">
                        <p className="text-sm text-green-600 font-medium">✓ Hero Image Selected</p>
                        <button 
                          type="button"
                          onClick={(e) => handleRemoveImage('hero', e)}
                          className="text-sm text-red-600 font-medium hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <img 
                          src={heroImagePreview} 
                          alt="Hero Preview" 
                          className="h-16 w-auto object-cover rounded border"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-2xl">🖼️</div>
                      <p className="text-gray-600 text-sm font-medium">Upload Hero Image</p>
                      <p className="text-xs text-gray-500">PNG, JPG (Max 5MB)</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={heroFileInputRef}
                  onChange={(e) => handleImageUpload(e, 'hero')}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Leadership Team Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">Leadership Team</label>
                <p className="text-xs text-gray-500 mb-3">
                  Add names and upload photos for your leadership team. These will appear below the hero section.
                </p>
                <div className="space-y-4">
                  {circularImages.map((person, index) => (
                    <div key={person.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        {/* Image Upload Section */}
                        <div className="flex-shrink-0">
                          <div 
                            onClick={() => handleUploadClick('circular', index)}
                            className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-full cursor-pointer hover:border-gray-400 transition-colors flex items-center justify-center overflow-hidden"
                            style={{ borderColor: person.image ? tempColor : undefined }}
                          >
                            {person.image ? (
                              <img 
                                src={person.image} 
                                alt={person.name || person.role}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-center p-2">
                                <div className="text-lg">👤</div>
                                <p className="text-xs text-gray-500 mt-1">Upload</p>
                              </div>
                            )}
                          </div>
                          <input
                            type="file"
                            ref={el => circularFileInputRefs.current[index] = el}
                            onChange={(e) => handleImageUpload(e, 'circular', index)}
                            accept="image/*"
                            className="hidden"
                          />
                          {person.image && (
                            <button 
                              type="button"
                              onClick={(e) => handleRemoveImage('circular', e, index)}
                              className="text-xs text-red-600 font-medium hover:text-red-700 mt-1 block mx-auto"
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        {/* Input Fields Section */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              {person.role} Name *
                            </label>
                            <input
                              type="text"
                              value={person.name}
                              onChange={(e) => handleNameChange(index, 'name', e.target.value)}
                              placeholder={`Enter ${person.role} name`}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Role
                            </label>
                            <input
                              type="text"
                              value={person.role}
                              onChange={(e) => handleNameChange(index, 'role', e.target.value)}
                              placeholder="Enter role"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Department
                            </label>
                            <input
                              type="text"
                              value={person.department}
                              onChange={(e) => handleNameChange(index, 'department', e.target.value)}
                              placeholder="Enter department"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  * Name is required to display the leadership team section
                </p>
              </div>
            </div>

            {/* Right Column - Colors */}
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">Theme Color</label>
                <div className="flex flex-wrap gap-2">
                  {predefinedColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setTempColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        tempColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={tempColor}
                    onChange={(e) => setTempColor(e.target.value)}
                    className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      value={tempColor}
                      onChange={(e) => setTempColor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                      placeholder="#3B82F6"
                    />
                    <p className="text-xs text-gray-500 mt-1">Enter hex code or pick color</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">Background Theme</label>
                <div className="grid grid-cols-3 gap-2">
                  {bgColorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setTempBgColor(option.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        tempBgColor === option.value 
                          ? 'border-gray-800 scale-105 shadow-md' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ 
                        backgroundColor: option.value === 'dark' ? '#000000' : 
                                       option.value === 'gray' ? '#f8fafc' : '#ffffff'
                      }}
                    >
                      <div className="text-center">
                        <div className="text-lg mb-1">{option.icon}</div>
                        <div className={`text-xs font-medium ${
                          option.value === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {option.label.split(' ')[0]}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">Quick Preview</label>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-center space-y-3">
                    {/* College Name Preview */}
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">College Name Preview:</p>
                      <h4 
                        className="text-lg font-bold truncate"
                        style={{ color: tempColor }}
                        title={tempCollegeName}
                      >
                        {tempCollegeName || "Your College Name"}
                      </h4>
                    </div>
                    
                    {/* Leadership Team Preview */}
                    <div>
                      <div className="flex justify-center space-x-4">
                        {circularImages.slice(0, 2).map((person, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-12 h-12 rounded-full border-2 mx-auto mb-1 flex items-center justify-center overflow-hidden"
                              style={{ borderColor: tempColor }}
                            >
                              {person.image ? (
                                <img 
                                  src={person.image} 
                                  alt={person.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-400 text-sm">👤</span>
                              )}
                            </div>
                            <p className="text-xs font-medium text-gray-900 truncate max-w-[80px]">
                              {person.name || 'Name'}
                            </p>
                            <p className="text-xs text-gray-500 truncate max-w-[80px]">
                              {person.role}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Leadership team preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyDemo}
              className="flex-1 px-4 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: tempColor }}
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPanel;