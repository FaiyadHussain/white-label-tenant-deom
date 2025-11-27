// src/pages/Results.jsx
import React, { useState } from 'react';

const Results = ({ 
  themeColor, 
  getContentBgClasses, 
  getCardBgClasses, 
  getTextColorClasses, 
  getMutedTextColorClasses,
  getBorderColorClasses 
}) => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const results = {
    '2024': [
      { name: "Aarav Sharma", rank: 45, exam: "JEE Advanced", college: "IIT Bombay", score: "98.5%" },
      { name: "Priya Patel", rank: 78, exam: "JEE Advanced", college: "IIT Delhi", score: "97.2%" },
      { name: "Rahul Kumar", rank: 112, exam: "NEET UG", college: "AIIMS Delhi", score: "99.1%" },
      { name: "Sneha Reddy", rank: 234, exam: "JEE Main", college: "NIT Trichy", score: "95.8%" },
      { name: "Vikram Singh", rank: 89, exam: "NEET UG", college: "Maulana Azad", score: "98.3%" },
      { name: "Ananya Das", rank: 156, exam: "JEE Advanced", college: "IIT Madras", score: "96.5%" }
    ],
    '2023': [
      { name: "Rohan Mehta", rank: 23, exam: "JEE Advanced", college: "IIT Bombay", score: "99.2%" },
      { name: "Neha Gupta", rank: 67, exam: "NEET UG", college: "AIIMS Delhi", score: "98.7%" },
      { name: "Karan Malhotra", rank: 145, exam: "JEE Main", college: "NIT Surathkal", score: "96.1%" }
    ],
    '2022': [
      { name: "Divya Joshi", rank: 34, exam: "JEE Advanced", college: "IIT Delhi", score: "98.8%" },
      { name: "Arjun Nair", rank: 89, exam: "NEET UG", college: "Grant Medical", score: "97.5%" }
    ]
  };

  const statistics = {
    totalStudents: 1250,
    selectionRate: "96.2%",
    top100: 45,
    averageScore: "92.7%"
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${getContentBgClasses()}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${getTextColorClasses()}`}>Our Results</h1>
          <p className={`text-xl max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Celebrating the success stories of our students who made it to top engineering and medical colleges
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Students", value: statistics.totalStudents.toLocaleString(), icon: "👨‍🎓" },
            { label: "Selection Rate", value: statistics.selectionRate, icon: "🎯" },
            { label: "Top 100 Ranks", value: statistics.top100, icon: "🏆" },
            { label: "Average Score", value: statistics.averageScore, icon: "📊" }
          ].map((stat, index) => (
            <div key={index} className={`rounded-xl shadow-lg p-6 text-center ${getCardBgClasses()} ${getTextColorClasses()}`}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div 
                className="text-2xl font-bold mb-1"
                style={{ color: themeColor }}
              >
                {stat.value}
              </div>
              <div className={getMutedTextColorClasses()}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-8">
          <div className={`rounded-full p-1 shadow-lg ${getCardBgClasses()}`}>
            {['2024', '2023', '2022'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedYear === year 
                    ? 'text-white shadow-lg' 
                    : `${getTextColorClasses()}`
                }`}
                style={{
                  backgroundColor: selectedYear === year ? themeColor : 'transparent'
                }}
              >
                {year} Results
              </button>
            ))}
          </div>
        </div>

        {/* Results Table */}
        <div className={`rounded-xl shadow-lg overflow-hidden ${getCardBgClasses()}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr 
                  className="text-white text-left"
                  style={{ backgroundColor: themeColor }}
                >
                  <th className="px-6 py-4 font-semibold">Student Name</th>
                  <th className="px-6 py-4 font-semibold">Rank</th>
                  <th className="px-6 py-4 font-semibold">Exam</th>
                  <th className="px-6 py-4 font-semibold">College</th>
                  <th className="px-6 py-4 font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {results[selectedYear].map((result, index) => (
                  <tr 
                    key={index} 
                    className={`border-b transition-colors ${
                      index % 2 === 0 ? getContentBgClasses() : getCardBgClasses()
                    } ${getBorderColorClasses()} ${getTextColorClasses()}`}
                  >
                    <td className="px-6 py-4 font-medium">{result.name}</td>
                    <td className="px-6 py-4">
                      <span 
                        className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                        style={{ backgroundColor: themeColor }}
                      >
                        #{result.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">{result.exam}</td>
                    <td className="px-6 py-4 font-medium">{result.college}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold" style={{ color: themeColor }}>
                        {result.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold text-center mb-8 ${getTextColorClasses()}`}>
            🎉 Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Aarav Sharma",
                college: "IIT Bombay - Computer Science",
                quote: "The test series and doubt sessions helped me identify my weak areas and improve systematically.",
                image: "👨‍💻"
              },
              {
                name: "Priya Patel",
                college: "AIIMS Delhi - MBBS",
                quote: "The biology notes and regular tests were exactly what I needed to crack NEET with a great rank.",
                image: "👩‍⚕️"
              }
            ].map((story, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-6 ${getCardBgClasses()} ${getTextColorClasses()}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{story.image}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                    <p 
                      className="font-semibold mb-3"
                      style={{ color: themeColor }}
                    >
                      {story.college}
                    </p>
                    <p className={`italic ${getMutedTextColorClasses()}`}>"{story.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;