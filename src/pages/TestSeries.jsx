// src/pages/TestSeries.jsx
import React, { useState } from 'react';

const TestSeries = ({ 
  themeColor, 
  getContentBgClasses, 
  getCardBgClasses, 
  getTextColorClasses, 
  getMutedTextColorClasses,
  getBorderColorClasses 
}) => {
  const [activeTab, setActiveTab] = useState('jee');

  const testSeries = {
    jee: [
      {
        name: "JEE Main Grand Test Series",
        tests: 50,
        duration: "6 Months",
        price: "₹5,000",
        features: ["Full Syllabus Tests", "All India Ranking", "Detailed Solutions", "Performance Analytics"],
        popularity: "🔥 Best Seller"
      },
      {
        name: "JEE Advanced Mock Series",
        tests: 30,
        duration: "4 Months",
        price: "₹7,000",
        features: ["Advanced Level Questions", "IIT Pattern", "Topic-wise Tests", "Doubt Support"],
        popularity: "⭐ Most Popular"
      },
      {
        name: "JEE Main + Advanced Combo",
        tests: 80,
        duration: "12 Months",
        price: "₹10,000",
        features: ["Both Main & Advanced", "Comprehensive Coverage", "Personalized Feedback", "Video Solutions"],
        popularity: "💎 Premium"
      }
    ],
    neet: [
      {
        name: "NEET UG Test Series",
        tests: 45,
        duration: "6 Months",
        price: "₹6,000",
        features: ["Biology Focused", "NCERT Based", "Previous Year Pattern", "Rank Predictor"],
        popularity: "🔥 Best Seller"
      },
      {
        name: "NEET Chapter-wise Tests",
        tests: 60,
        duration: "8 Months",
        price: "₹4,500",
        features: ["Topic-wise Practice", "Instant Results", "Weakness Analysis", "Revision Tests"],
        popularity: "📚 Systematic"
      },
      {
        name: "NEET Super 100 Tests",
        tests: 100,
        duration: "12 Months",
        price: "₹12,000",
        features: ["Comprehensive Coverage", "All India Ranking", "Expert Mentorship", "College Predictor"],
        popularity: "💎 Premium"
      }
    ]
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${getContentBgClasses()}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${getTextColorClasses()}`}>Test Series</h1>
          <p className={`text-xl max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Practice with simulated exams and get detailed performance analysis
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className={`rounded-full p-1 shadow-lg ${getCardBgClasses()}`}>
            {[
              { id: 'jee', name: 'JEE Test Series', icon: '🚀' },
              { id: 'neet', name: 'NEET Test Series', icon: '🏥' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'text-white shadow-lg' 
                    : `${getTextColorClasses()}`
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? themeColor : 'transparent'
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Test Series Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testSeries[activeTab].map((series, index) => (
            <div key={index} className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${getCardBgClasses()} ${getTextColorClasses()}`}>
              {/* Popularity Badge */}
              {series.popularity && (
                <div 
                  className="text-center py-2 text-white text-sm font-semibold"
                  style={{ backgroundColor: themeColor }}
                >
                  {series.popularity}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{series.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className={getMutedTextColorClasses()}>Total Tests:</span>
                    <span className="font-semibold">{series.tests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={getMutedTextColorClasses()}>Duration:</span>
                    <span className="font-semibold">{series.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={getMutedTextColorClasses()}>Price:</span>
                    <span className="text-2xl font-bold" style={{ color: themeColor }}>
                      {series.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${getTextColorClasses()}`}>Features:</h4>
                  <ul className="space-y-2">
                    {series.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm" style={{ color: themeColor }}>
                        <span className="mr-2">✓</span>
                        <span className={getMutedTextColorClasses()}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: themeColor }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={`mt-16 rounded-xl shadow-lg p-8 ${getCardBgClasses()}`}>
          <h2 className={`text-2xl font-bold text-center mb-8 ${getTextColorClasses()}`}>
            Why Choose Our Test Series?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '📊', title: 'Detailed Analytics', desc: 'In-depth performance reports' },
              { icon: '🏆', title: 'All India Rank', desc: 'Compare with thousands of students' },
              { icon: '🎯', title: 'Personalized Feedback', desc: 'Identify strengths & weaknesses' },
              { icon: '⏰', title: 'Flexible Timing', desc: 'Take tests at your convenience' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className={`font-semibold mb-2 ${getTextColorClasses()}`} style={{ color: themeColor }}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${getMutedTextColorClasses()}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;