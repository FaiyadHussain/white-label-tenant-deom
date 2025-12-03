// src/pages/Courses.jsx
import React from 'react';

const Courses = ({ 
  themeColor, 
  getContentBgClasses, 
  getCardBgClasses, 
  getTextColorClasses, 
  getMutedTextColorClasses,
  getBorderColorClasses 
}) => {
  const courses = {
    jee: [
      {
        title: "JEE Main Crash Course",
        duration: "6 Months",
      
        features: ["Daily Live Classes", "100+ Mock Tests", "Doubt Sessions", "Study Material"],
        bestFor: "Class 12 Students",
        popularity: "🔥 Best Seller"
      },
      {
        title: "JEE Advanced Program",
        duration: "12 Months",
      
        features: ["Advanced Problem Solving", "IIT Level Tests", "Personal Mentorship", "Revision Bootcamps"],
        bestFor: "Serious Aspirants",
        popularity: "⭐ Most Popular"
      },
      {
        title: "JEE Foundation (9-10)",
        duration: "24 Months",
 
        features: ["Concept Building", "Olympiad Preparation", "Regular Assessments", "Parent-Teacher Meetings"],
        bestFor: "Class 9-10 Students",
        popularity: "📚 Foundation"
      }
    ],
    neet: [
      {
        title: "NEET UG Crash Course",
        duration: "6 Months",
    
        features: ["Biology Focus", "NCERT Revision", "Medical Entrance Tests", "Practical Knowledge"],
        bestFor: "Class 12 Students",
        popularity: "🔥 Best Seller"
      },
      {
        title: "NEET Foundation",
        duration: "24 Months",

        features: ["Biology Excellence", "Chemistry Lab Sessions", "Physics Demonstrations", "Career Guidance"],
        bestFor: "Class 9-10 Students",
        popularity: "📚 Foundation"
      },
      {
        title: "NEET Repeater Course",
        duration: "1 Year",
   
        features: ["Intensive Revision", "Previous Year Analysis", "Time Management", "Stress Management"],
        bestFor: "Dropper Students",
        popularity: "🔄 Repeater"
      }
    ]
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${getContentBgClasses()}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${getTextColorClasses()}`}>Our Courses</h1>
          <p className={`text-xl max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Comprehensive programs designed by IIT & AIIMS alumni to help you crack competitive exams
          </p>
        </div>

        {/* JEE Courses */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div 
              className="px-6 py-3 rounded-full text-white text-lg font-bold flex items-center space-x-2"
              style={{ backgroundColor: themeColor }}
            >
              <span>🚀</span>
              <span>JEE Courses</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.jee.map((course, index) => (
              <div key={index} className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${getCardBgClasses()} ${getTextColorClasses()}`}>
                <div 
                  className="h-2"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <div className="p-6">
                  {course.popularity && (
                    <div className="text-center mb-3">
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        {course.popularity}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className={getMutedTextColorClasses()}>Duration: {course.duration}</span>
                    <span className="text-2xl font-bold" style={{ color: themeColor }}>
                      {course.price}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${getTextColorClasses()}`}>Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm" style={{ color: themeColor }}>
                          <span className="mr-2">✓</span>
                          <span className={getMutedTextColorClasses()}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-3 rounded-lg mb-4 ${getBorderColorClasses()} border`}>
                    <span className={`text-sm font-medium ${getMutedTextColorClasses()}`}>
                      Best for: {course.bestFor}
                    </span>
                  </div>
                  
                  <button 
                    className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: themeColor }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEET Courses */}
        <section>
          <div className="flex items-center justify-center mb-8">
            <div 
              className="px-6 py-3 rounded-full text-white text-lg font-bold flex items-center space-x-2"
              style={{ backgroundColor: themeColor }}
            >
              <span>🏥</span>
              <span>NEET Courses</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.neet.map((course, index) => (
              <div key={index} className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${getCardBgClasses()} ${getTextColorClasses()}`}>
                <div 
                  className="h-2"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <div className="p-6">
                  {course.popularity && (
                    <div className="text-center mb-3">
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                        {course.popularity}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className={getMutedTextColorClasses()}>Duration: {course.duration}</span>
                    <span className="text-2xl font-bold" style={{ color: themeColor }}>
                      {course.price}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 ${getTextColorClasses()}`}>Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm" style={{ color: themeColor }}>
                          <span className="mr-2">✓</span>
                          <span className={getMutedTextColorClasses()}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`p-3 rounded-lg mb-4 ${getBorderColorClasses()} border`}>
                    <span className={`text-sm font-medium ${getMutedTextColorClasses()}`}>
                      Best for: {course.bestFor}
                    </span>
                  </div>
                  
                  <button 
                    className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: themeColor }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'IIT & AIIMS Alumni' },
            { icon: '📚', title: 'Study Material', desc: 'Comprehensive Notes' },
            { icon: '🎥', title: 'Live Classes', desc: 'Interactive Sessions' },
            { icon: '📱', title: 'Mobile App', desc: 'Learn Anywhere' }
          ].map((feature, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${getCardBgClasses()} ${getTextColorClasses()}`}>
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: themeColor }}>{feature.title}</h3>
              <p className={`text-sm ${getMutedTextColorClasses()}`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;