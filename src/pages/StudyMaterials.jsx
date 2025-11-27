// src/pages/StudyMaterials.jsx
import React, { useState } from 'react';

const StudyMaterials = ({ 
  themeColor, 
  getContentBgClasses, 
  getCardBgClasses, 
  getTextColorClasses, 
  getMutedTextColorClasses,
  getBorderColorClasses 
}) => {
  const [selectedSubject, setSelectedSubject] = useState('physics');

  const materials = {
    physics: [
      { 
        title: "Mechanics Masterclass", 
        type: "PDF", 
        pages: 120, 
        downloads: "2.5k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Electromagnetism Notes", 
        type: "PDF", 
        pages: 85, 
        downloads: "1.8k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Modern Physics Guide", 
        type: "Video", 
        duration: "4.5h", 
        downloads: "3.2k", 
        price: "Premium",
        icon: "🎥"
      },
      { 
        title: "Optics & Waves", 
        type: "PDF", 
        pages: 95, 
        downloads: "1.2k", 
        price: "Free",
        icon: "📄"
      }
    ],
    chemistry: [
      { 
        title: "Organic Chemistry Complete", 
        type: "PDF", 
        pages: 150, 
        downloads: "3.1k", 
        price: "Premium",
        icon: "📄"
      },
      { 
        title: "Inorganic Chemistry Notes", 
        type: "PDF", 
        pages: 110, 
        downloads: "2.3k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Physical Chemistry Guide", 
        type: "Video", 
        duration: "6h", 
        downloads: "2.8k", 
        price: "Premium",
        icon: "🎥"
      },
      { 
        title: "NCERT Solutions", 
        type: "PDF", 
        pages: 200, 
        downloads: "4.5k", 
        price: "Free",
        icon: "📄"
      }
    ],
    mathematics: [
      { 
        title: "Calculus Mastery", 
        type: "PDF", 
        pages: 135, 
        downloads: "2.7k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Algebra Complete Guide", 
        type: "Video", 
        duration: "5.5h", 
        downloads: "2.1k", 
        price: "Premium",
        icon: "🎥"
      },
      { 
        title: "Coordinate Geometry", 
        type: "PDF", 
        pages: 95, 
        downloads: "1.9k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Probability & Statistics", 
        type: "PDF", 
        pages: 75, 
        downloads: "1.5k", 
        price: "Free",
        icon: "📄"
      }
    ],
    biology: [
      { 
        title: "Human Physiology", 
        type: "PDF", 
        pages: 180, 
        downloads: "3.8k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Botany Complete", 
        type: "Video", 
        duration: "7h", 
        downloads: "2.9k", 
        price: "Premium",
        icon: "🎥"
      },
      { 
        title: "Zoology Notes", 
        type: "PDF", 
        pages: 160, 
        downloads: "3.3k", 
        price: "Free",
        icon: "📄"
      },
      { 
        title: "Genetics & Evolution", 
        type: "PDF", 
        pages: 95, 
        downloads: "2.2k", 
        price: "Free",
        icon: "📄"
      }
    ]
  };

  const subjects = [
    { id: 'physics', name: 'Physics', icon: '⚛️' },
    { id: 'chemistry', name: 'Chemistry', icon: '🧪' },
    { id: 'mathematics', name: 'Mathematics', icon: '📐' },
    { id: 'biology', name: 'Biology', icon: '🔬' }
  ];

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${getContentBgClasses()}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${getTextColorClasses()}`}>Study Materials</h1>
          <p className={`text-xl max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Access comprehensive study resources, notes, and video lectures curated by expert faculty
          </p>
        </div>

        {/* Subject Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                selectedSubject === subject.id 
                  ? 'text-white shadow-lg scale-105' 
                  : `${getTextColorClasses()} ${getCardBgClasses()} shadow hover:shadow-md`
              }`}
              style={{
                backgroundColor: selectedSubject === subject.id ? themeColor : 'transparent'
              }}
            >
              <span>{subject.icon}</span>
              <span>{subject.name}</span>
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials[selectedSubject].map((material, index) => (
            <div key={index} className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${getCardBgClasses()} ${getTextColorClasses()}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{material.icon}</span>
                    <h3 className="text-lg font-bold">{material.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm" style={{ color: themeColor }}>
                    <span className="flex items-center space-x-1">
                      <span>{material.type}</span>
                    </span>
                    <span>{material.pages ? `${material.pages} pages` : material.duration}</span>
                    <span>📥 {material.downloads}</span>
                  </div>
                </div>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    material.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {material.price}
                </span>
              </div>
              
              <div className="flex space-x-3">
                <button className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${getBorderColorClasses()} border hover:opacity-80`}>
                  Preview
                </button>
                <button 
                  className="flex-1 px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: themeColor }}
                >
                  {material.price === 'Free' ? 'Download' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📚', title: 'Comprehensive Notes', desc: 'Covering all topics with detailed explanations' },
            { icon: '🎥', title: 'Video Lectures', desc: 'Learn from expert faculty anytime, anywhere' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Access materials on all devices' }
          ].map((feature, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${getCardBgClasses()}`}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${getTextColorClasses()}`} style={{ color: themeColor }}>
                {feature.title}
              </h3>
              <p className={getMutedTextColorClasses()}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;