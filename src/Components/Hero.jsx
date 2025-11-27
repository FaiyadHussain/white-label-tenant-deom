// src/components/LandingPage.jsx
import React from 'react';
import {
  Brain,
  Sparkles,
  BarChart3,
  Timer,
  Target,
  BookOpenCheck,
  LineChart,
  ShieldCheck,
  Zap,
  Layers,
  Users,
  Trophy,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Award,
  TargetIcon,
} from 'lucide-react';

const LandingPage = ({
  themeColor = '#2563EB',
  logoUrl,
  heroImage,
  circularImages = [],
  bgColor = 'light', // Add bgColor prop
  getContentBgClasses = () => 'bg-white',
  getCardBgClasses = () => 'bg-gray-50 border border-gray-200',
  getTextColorClasses = () => 'text-gray-900',
  getMutedTextColorClasses = () => 'text-gray-600',
  getBorderColorClasses = () => 'border-gray-200', // Add border color helper
}) => {
  
  // Enhanced helper functions based on bgColor
  const enhancedGetContentBgClasses = () => {
    if (bgColor === 'dark') return 'bg-gray-900';
    if (bgColor === 'gray') return 'bg-gray-100';
    return 'bg-white';
  };

  const enhancedGetCardBgClasses = () => {
    if (bgColor === 'dark') return 'bg-gray-800 border-gray-700';
    if (bgColor === 'gray') return 'bg-white border-gray-300';
    return 'bg-gray-50 border-gray-200';
  };

  const enhancedGetTextColorClasses = () => {
    if (bgColor === 'dark') return 'text-white';
    if (bgColor === 'gray') return 'text-gray-900';
    return 'text-gray-900';
  };

  const enhancedGetMutedTextColorClasses = () => {
    if (bgColor === 'dark') return 'text-gray-300';
    if (bgColor === 'gray') return 'text-gray-600';
    return 'text-gray-600';
  };

  const enhancedGetBorderColorClasses = () => {
    if (bgColor === 'dark') return 'border-gray-700';
    if (bgColor === 'gray') return 'border-gray-300';
    return 'border-gray-200';
  };

  return (
    <div className={`min-h-screen ${enhancedGetContentBgClasses()} transition-colors duration-300`}>
      <Hero
        themeColor={themeColor}
        logoUrl={logoUrl}
        heroImage={heroImage}
        circularImages={circularImages}
        bgColor={bgColor}
        getContentBgClasses={enhancedGetContentBgClasses}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
        getBorderColorClasses={enhancedGetBorderColorClasses}
      />

      <StatsSection
        themeColor={themeColor}
        bgColor={bgColor}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
        getBorderColorClasses={enhancedGetBorderColorClasses}
      />

      <StudentParentStrip
        themeColor={themeColor}
        bgColor={bgColor}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
        getBorderColorClasses={enhancedGetBorderColorClasses}
      />

      <ExamFeatures
        themeColor={themeColor}
        bgColor={bgColor}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />

      <AIPoweredSection
        themeColor={themeColor}
        bgColor={bgColor}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />

      <MockTestFocusSection
        themeColor={themeColor}
        bgColor={bgColor}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />

      <ExamComparison
        themeColor={themeColor}
        bgColor={bgColor}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />

      <HowItWorksSection
        themeColor={themeColor}
        bgColor={bgColor}
        getCardBgClasses={enhancedGetCardBgClasses}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />

      <FinalCTASection
        themeColor={themeColor}
        bgColor={bgColor}
        getTextColorClasses={enhancedGetTextColorClasses}
        getMutedTextColorClasses={enhancedGetMutedTextColorClasses}
      />
    </div>
  );
};

// ================ HERO SECTION =================

const Hero = ({
  themeColor,
  logoUrl,
  heroImage,
  circularImages = [],
  bgColor,
  getContentBgClasses,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
  getBorderColorClasses,
}) => {
  const hasCircularContent =
    circularImages &&
    circularImages.some(
      (person) => person && (person.image || (person.name && person.name.trim() !== '')),
    );

  // Dynamic styles based on background color
  const trustBadgeBg = bgColor === 'dark' ? 'bg-gray-800' : 'bg-blue-50';
  const trustBadgeBorder = bgColor === 'dark' ? 'border-gray-700' : 'border-blue-200';
  const trustBadgeText = bgColor === 'dark' ? 'text-blue-400' : 'text-blue-600';
  
  const featureCardBg = bgColor === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const featureCardBorder = bgColor === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
 <section className={`relative py-6  ${getContentBgClasses()}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 text-center lg:text-left">
        {/* Trust Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${trustBadgeBg} border ${trustBadgeBorder} mb-6`}>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" style={{ color: themeColor }} />
            <span className={`text-sm font-semibold ${trustBadgeText}`}>TRUSTED PLATFORM</span>
          </div>
          <div className={`w-1 h-1 rounded-full ${bgColor === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
          <span className={`text-sm ${getMutedTextColorClasses()}`}>10,000+ Active Students</span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${getTextColorClasses()}`}
        >
          Master
          <span className="block mt-3" style={{ color: themeColor }}>
            Competitive Exams
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed ${getMutedTextColorClasses()}`}
        >
          AI-powered mock test and practice platform for{' '}
          <span className={`font-semibold ${getTextColorClasses()}`}>
            JEE Main, JEE Advanced, and NEET UG
          </span>{' '}
          with precision analytics, adaptive learning, and in-depth performance tracking.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Brain, text: 'AI-Powered Analytics' },
            { icon: Target, text: 'Adaptive Tests' },
            { icon: BarChart3, text: 'Real-time Tracking' },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl ${featureCardBg} border ${featureCardBorder}`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${themeColor}20` }}
              >
                <item.icon className="w-4 h-4" style={{ color: themeColor }} />
              </div>
              <span className={`text-sm font-medium ${getTextColorClasses()}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            className="group relative px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            style={{ backgroundColor: themeColor }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Start Free AI Trial</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-2 ${getBorderColorClasses()} hover:border-gray-400 flex items-center justify-center gap-3 bg-transparent`}
            style={{
              color: getTextColorClasses(),
            }}
          >
            <BookOpenCheck className="w-5 h-5" />
            <span>View Demo Tests</span>
          </button>
        </div>

        {/* Trust Note */}
        <p
          className={`text-sm ${getMutedTextColorClasses()} flex items-center justify-center lg:justify-start gap-2`}
        >
          <CheckCircle className="w-4 h-4 text-green-600" />
          No credit card required • 7-day full access • Instant activation
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:w-1/2">
        {/* Main Hero Image */}
        <div className="flex justify-center mb-4">
          {heroImage ? (
            <div className={`relative rounded-2xl overflow-hidden shadow-xl border ${getBorderColorClasses()} w-full max-w-lg`}>
              <img
                src={heroImage}
                alt="AI Powered Exam Preparation Platform"
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div
              className={`relative rounded-2xl p-12 text-center ${getCardBgClasses()} border-2 border-dashed ${getBorderColorClasses()} w-full max-w-lg`}
            >
              <div className="space-y-4">
                <div
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${themeColor}20` }}
                >
                  <TargetIcon className="w-8 h-8" style={{ color: themeColor }} />
                </div>
                <h3 className={`text-2xl font-bold ${getTextColorClasses()}`}>
                  Exam Preparation Platform
                </h3>
                <p className={`text-lg ${getMutedTextColorClasses()}`}>
                  Upload your platform screenshot
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Status Below Image - Only show if hero image is uploaded */}
        {heroImage && (
          <div className={`rounded-xl p-4 border ${getBorderColorClasses()} shadow-lg mb-6 w-full max-w-lg mx-auto ${bgColor === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className={`text-sm font-semibold ${getTextColorClasses()}`}>Live NEET/JEE Mock Test</p>
                  <p className={`text-xs ${getMutedTextColorClasses()}`}>2,847 students participating</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-bold text-sm">87% Avg. Score</p>
                <p className={`text-xs ${getMutedTextColorClasses()}`}>This session</p>
              </div>
            </div>
          </div>
        )}

        {/* Leadership Team Section */}
        {hasCircularContent && (
          <div className="text-center">
            <h3 className={`text-xl font-bold mb-4 ${getTextColorClasses()}`}>
              Our Leadership Team
            </h3>
            <p className={`text-sm mb-6 ${getMutedTextColorClasses()}`}>
              Meet the experienced educators and mentors behind our success
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {circularImages.map((person, index) => (
                <div key={person.id || index} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full mb-2 flex items-center justify-center overflow-hidden border-2`}
                    style={{ borderColor: themeColor }}
                  >
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full ${bgColor === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center`}>
                        <span className="text-gray-400 text-lg">👤</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className={`text-xs font-semibold ${getTextColorClasses()}`}>
                      {person.name || person.role}
                    </p>
                    {person.name && person.role && (
                      <p className={`text-xs ${getMutedTextColorClasses()}`}>{person.role}</p>
                    )}
                    {person.department && (
                      <p className={`text-xs ${getMutedTextColorClasses()}`}>
                        {person.department}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Instruction - Only show if no content */}
        {!hasCircularContent && (
          <div className="text-center">
            <p className={`text-xs ${getMutedTextColorClasses()}`}>
              Add team members in customize panel to show leadership team
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
  );
};

// ================ STATS SECTION =================

const StatsSection = ({ themeColor, bgColor, getTextColorClasses, getMutedTextColorClasses, getBorderColorClasses }) => {
  const stats = [
    { number: '75,000+', label: 'NEET Questions', icon: BookOpenCheck },
    { number: '30,000+', label: 'JEE Questions', icon: Layers },
    { number: '50,000+', label: 'Mock Tests Taken', icon: Target },
    { number: '98.2%', label: 'Accuracy Rate', icon: Award },
  ];

  const sectionBg = bgColor === 'dark' ? 'bg-gray-800' : bgColor === 'gray' ? 'bg-gray-200' : 'bg-gray-50';
  const cardBg = bgColor === 'dark' ? 'bg-gray-700' : 'bg-white';
  const cardBorder = bgColor === 'dark' ? 'border-gray-600' : 'border-gray-200';

  return (
    <section className={`py-16 ${sectionBg} border-y ${getBorderColorClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${cardBg} border ${cardBorder} flex items-center justify-center group-hover:${bgColor === 'dark' ? 'border-gray-500' : 'border-gray-300'} transition-colors shadow-sm`}>
                <stat.icon className="w-6 h-6" style={{ color: themeColor }} />
              </div>
              <div className={`text-3xl lg:text-4xl font-bold mb-2 ${getTextColorClasses()}`}>
                {stat.number}
              </div>
              <div className={`text-sm ${getMutedTextColorClasses()}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================ STUDENT / PARENT STRIP =================

const StudentParentStrip = ({
  themeColor,
  bgColor,
  getTextColorClasses,
  getMutedTextColorClasses,
  getBorderColorClasses,
}) => {
  const sectionBg = bgColor === 'dark' ? 'bg-gray-900' : 'bg-white';
  
  return (
    <section className={`py-14 ${sectionBg} border-b ${getBorderColorClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* For Students */}
        <div>
          <h3
            className={`text-xl font-bold mb-3 flex items-center gap-2 ${getTextColorClasses()}`}
          >
            <Target className="w-5 h-5" style={{ color: themeColor }} />
            For JEE & NEET Aspirants
          </h3>
          <p className={`text-sm mb-4 ${getMutedTextColorClasses()}`}>
            You get serious mock tests, smart analytics, and clear next steps instead of random
            question solving and guesswork.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Daily practice, weekly mock tests, and full exam simulations to keep prep
                consistent.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Clear view of strong and weak chapters so you know exactly what to revise next.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Real exam-like environment that reduces fear and exam-day surprises.
              </span>
            </li>
          </ul>
        </div>

        {/* For Parents */}
        <div>
          <h3
            className={`text-xl font-bold mb-3 flex items-center gap-2 ${getTextColorClasses()}`}
          >
            <Users className="w-5 h-5" style={{ color: themeColor }} />
            For Parents & Guardians
          </h3>
          <p className={`text-sm mb-4 ${getMutedTextColorClasses()}`}>
            You get transparency and control – see how consistently your child is practising and how
            their scores are moving over time.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Simple progress reports that show trends, not just isolated marks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Clarity on mock test count, study streaks, and topic coverage for JEE and NEET.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span className={getMutedTextColorClasses()}>
                Peace of mind that effort is going into the right exams with the right pattern.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// ================ EXAM FEATURES =================

const ExamFeatures = ({
  themeColor,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const features = [
    {
      Icon: Brain,
      title: 'AI-Powered Performance Analysis',
      description:
        'Get detailed insights into your strengths, weaknesses, and preparation strategy with machine learning algorithms.',
    },
    {
      Icon: Timer,
      title: 'Real Exam Simulation',
      description:
        'Experience actual exam environment with timed tests, question patterns, and difficulty matching real JEE/NEET.',
    },
    {
      Icon: TrendingUp,
      title: 'Adaptive Learning Path',
      description:
        'Personalized study plans that adapt to your performance, focusing on areas that need maximum improvement.',
    },
    {
      Icon: BarChart3,
      title: 'Detailed Analytics Dashboard',
      description:
        'Track progress with comprehensive metrics including accuracy, speed, percentile ranking, and topic mastery.',
    },
    {
      Icon: Target,
      title: 'Smart Question Bank',
      description:
        'Access to 75,000+ NEET and 30,000+ JEE questions with varying difficulty levels and detailed solutions.',
    },
    {
      Icon: Award,
      title: 'Performance Benchmarking',
      description:
        'Compare your performance with toppers and understand where you stand in the competition.',
    },
  ];

  const sectionBg = bgColor === 'dark' ? 'bg-gray-900' : 'bg-white';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextColorClasses()}`}>
            Advanced Exam Preparation
            <span className="block mt-2" style={{ color: themeColor }}>
              Powered by AI
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Comprehensive platform designed specifically for JEE and NEET aspirants with
            cutting-edge technology and data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl ${getCardBgClasses()} hover:transform hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${themeColor}15` }}
              >
                <feature.Icon className="w-6 h-6" style={{ color: themeColor }} />
              </div>

              <h3 className={`text-xl font-bold mb-3 ${getTextColorClasses()}`}>
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed ${getMutedTextColorClasses()}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================ AI POWERED SECTION =================

const AIPoweredSection = ({
  themeColor,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const sectionBg = bgColor === 'dark' ? 'bg-gray-800' : bgColor === 'gray' ? 'bg-gray-200' : 'bg-gray-50';
  const badgeBg = bgColor === 'dark' ? 'bg-gray-700' : 'bg-blue-50';
  const badgeBorder = bgColor === 'dark' ? 'border-gray-600' : 'border-blue-200';
  const badgeText = bgColor === 'dark' ? 'text-blue-400' : 'text-blue-600';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeBg} border ${badgeBorder} mb-6`}>
              <Sparkles className="w-4 h-4" style={{ color: themeColor }} />
              <span className={`text-sm font-semibold ${badgeText}`}>
                AI-POWERED PLATFORM
              </span>
            </div>

            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${getTextColorClasses()}`}>
              Smart Learning
              <span className="block mt-2" style={{ color: themeColor }}>
                Meets Exam Excellence
              </span>
            </h2>

            <p className={`text-lg mb-8 leading-relaxed ${getMutedTextColorClasses()}`}>
              Our AI algorithms analyze every aspect of your preparation to provide personalized
              recommendations, adaptive difficulty levels, and precise performance tracking for
              optimal results.
            </p>

            <div className="space-y-4">
              {[
                'Real-time performance analytics and insights after every mock test.',
                'Adaptive test difficulty based on your current level and target score.',
                'Personalized weak area identification for each subject and chapter.',
                'Smart revision scheduling, reminders, and re-tests of previously weak topics.',
                'Comparative analysis with topper strategies and average student behavior.',
                'Separate AI models tuned for JEE Main, JEE Advanced, and NEET patterns.',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className={`text-sm ${getTextColorClasses()}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {[
              {
                Icon: Brain,
                title: 'Intelligent Analytics',
                description:
                  'Deep learning algorithms track 50+ parameters to provide comprehensive performance insights.',
              },
              {
                Icon: Target,
                title: 'Precision Targeting',
                description:
                  'Focus on exactly what matters with AI-driven topic priority and difficulty adjustment.',
              },
              {
                Icon: TrendingUp,
                title: 'Progress Optimization',
                description:
                  'Continuous improvement tracking with predictive analysis for better score forecasting.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${getCardBgClasses()} border-l-4`}
                style={{ borderLeftColor: themeColor }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${themeColor}15` }}
                  >
                    <item.Icon className="w-5 h-5" style={{ color: themeColor }} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${getTextColorClasses()}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${getMutedTextColorClasses()}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================ MOCK TEST FOCUS =================

const MockTestFocusSection = ({
  themeColor,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const pillars = [
    {
      tag: 'JEE Main',
      label: 'Speed + Accuracy Engine',
      bullets: [
        'Topic-wise and full-length JEE Main mock tests with real exam interface.',
        'Auto-calibrated difficulty to improve speed without dropping accuracy.',
        'Instant scorecards with section-wise analysis for Physics, Chemistry, and Maths.',
      ],
    },
    {
      tag: 'JEE Advanced',
      label: 'Concept Depth Drills',
      bullets: [
        'Advanced pattern questions: single correct, multiple correct, integer type, comprehension.',
        'Logic-heavy problems that train you to think like an IIT paper setter.',
        'Detailed step-by-step solutions to strengthen theory and application.',
      ],
    },
    {
      tag: 'NEET UG',
      label: 'High-Yield NEET Mocks',
      bullets: [
        'NEET-specific full mocks with correct PCB weightage and negative marking.',
        'Question mix tuned to previous-year trend and NCERT focus areas.',
        'Session-wise reports to track improvement in Biology-heavy scoring.',
      ],
    },
  ];

  const extras = [
    'Create your own custom mock test from chapters and difficulty you choose.',
    'Attempt bilingual tests (English/Hinglish) for JEE and NEET where enabled.',
    'Save "starred" questions to revisit just before the actual exam day.',
    'Parent view to see how many mocks are completed and how scores are moving.',
    'Switch easily between practice mode and strict exam mode with negative marking.',
    'View history of all attempts to see how your rank estimate changes over time.',
  ];

  const sectionBg = bgColor === 'dark' ? 'bg-gray-800' : bgColor === 'gray' ? 'bg-gray-200' : 'bg-gray-50';
  const extraCardBg = bgColor === 'dark' ? 'bg-gray-700' : 'bg-white';
  const extraCardBorder = bgColor === 'dark' ? 'border-gray-600' : 'border-gray-200';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextColorClasses()}`}>
            Built Around
            <span className="block mt-2" style={{ color: themeColor }}>
              Serious Mock Test Practice
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Every feature in the platform is designed to make your JEE Main, JEE Advanced, and NEET
            mock tests feel like the real exam – and to turn every attempt into clear improvement.
          </p>
        </div>

        {/* 3 mock pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((item) => (
            <div
              key={item.tag}
              className={`p-6 rounded-2xl ${getCardBgClasses()} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${themeColor}10`, color: themeColor }}
                >
                  {item.tag}
                </span>
                <Clock className="w-4 h-4 text-gray-400" />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${getTextColorClasses()}`}>
                {item.label}
              </h3>
              <ul className="space-y-2">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${getMutedTextColorClasses()}`}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra features for mocks */}
        <div className={`p-6 md:p-8 rounded-2xl ${extraCardBg} border ${extraCardBorder}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6" style={{ color: themeColor }} />
              <h3 className={`text-xl font-bold ${getTextColorClasses()}`}>
                More Than Just Question Solving
              </h3>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className={getMutedTextColorClasses()}>
                Designed to build exam temperament, not just marks.
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {extras.map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <span className={`text-sm ${getMutedTextColorClasses()}`}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ================ EXAM COMPARISON =================

const ExamComparison = ({
  themeColor,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const exams = [
    {
      name: 'NEET UG',
      icon: BookOpenCheck,
      questions: '75,000+',
      features: [
        'Physics, Chemistry, Biology focus',
        'NEET pattern-specific tests',
        'Biology emphasis with diagrams',
        'Previous year question analysis',
      ],
    },
    {
      name: 'JEE Main',
      icon: Target,
      questions: '20,000+',
      features: [
        'Physics, Chemistry, Mathematics',
        'JEE Main pattern tests',
        'Speed and accuracy focus',
        'Chapter-wise weightage analysis',
      ],
    },
    {
      name: 'JEE Advanced',
      icon: Trophy,
      questions: '10,000+',
      features: [
        'Advanced level questions',
        'Complex problem solving',
        'Theoretical depth testing',
        'IIT-level difficulty matching',
      ],
    },
  ];

  const sectionBg = bgColor === 'dark' ? 'bg-gray-900' : 'bg-white';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextColorClasses()}`}>
            Comprehensive Exam
            <span className="block mt-2" style={{ color: themeColor }}>
              Preparation Suite
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${getMutedTextColorClasses()}`}>
            Tailored preparation strategies for each exam with specialized content and testing
            methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl ${getCardBgClasses()} hover:transform hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:${bgColor === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}
            >
              <div className="text-center mb-8">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${themeColor}15` }}
                >
                  <exam.icon className="w-6 h-6" style={{ color: themeColor }} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${getTextColorClasses()}`}>
                  {exam.name}
                </h3>
                <div
                  className="text-lg font-semibold px-3 py-1 rounded-full inline-block"
                  style={{ backgroundColor: `${themeColor}10`, color: themeColor }}
                >
                  {exam.questions} Questions
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {exam.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${getMutedTextColorClasses()}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: `${themeColor}10`,
                  border: `1px solid ${themeColor}30`,
                  color: themeColor,
                }}
              >
                Explore {exam.name} Prep
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================ HOW IT WORKS =================

const HowItWorksSection = ({
  themeColor,
  bgColor,
  getCardBgClasses,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const steps = [
    {
      step: '01',
      Icon: BookOpenCheck,
      title: 'Take Smart Tests',
      description:
        'Choose from full-length mocks, chapter-wise tests, or custom practice sessions tailored to your needs.',
    },
    {
      step: '02',
      Icon: Brain,
      title: 'Get AI Analysis',
      description:
        'Receive comprehensive performance breakdown with insights on accuracy, speed, and topic mastery.',
    },
    {
      step: '03',
      Icon: Target,
      title: 'Improve Strategically',
      description:
        'Follow personalized recommendations and adaptive learning paths to target weak areas effectively.',
    },
  ];

  const sectionBg = bgColor === 'dark' ? 'bg-gray-800' : bgColor === 'gray' ? 'bg-gray-200' : 'bg-gray-50';
  const stepBg = bgColor === 'dark' ? 'bg-gray-700' : 'bg-white';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getTextColorClasses()}`}>
            Simple 3-Step Process to
            <span className="block mt-2" style={{ color: themeColor }}>
              Exam Success
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className={`hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 ${bgColor === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} transform -translate-y-1/2`}></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 relative z-10 border-2 border-white shadow-lg"
                style={{ backgroundColor: stepBg, borderColor: themeColor }}
              >
                <span className="font-bold text-lg" style={{ color: themeColor }}>
                  {step.step}
                </span>
              </div>

              <div
                className={`p-8 rounded-2xl ${getCardBgClasses()} group-hover:transform group-hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${themeColor}15` }}
                >
                  <step.Icon className="w-5 h-5" style={{ color: themeColor }} />
                </div>

                <h3 className={`text-xl font-bold mb-4 ${getTextColorClasses()}`}>
                  {step.title}
                </h3>

                <p className={`text-sm leading-relaxed ${getMutedTextColorClasses()}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================ FINAL CTA =================

const FinalCTASection = ({
  themeColor,
  bgColor,
  getTextColorClasses,
  getMutedTextColorClasses,
}) => {
  const sectionBg = bgColor === 'dark' ? 'bg-gray-900' : 'bg-white';
  const badgeBg = bgColor === 'dark' ? 'bg-gray-800' : 'bg-blue-50';
  const badgeBorder = bgColor === 'dark' ? 'border-gray-700' : 'border-blue-200';
  const badgeText = bgColor === 'dark' ? 'text-blue-400' : 'text-blue-600';

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeBg} border ${badgeBorder} mb-6`}>
          <Sparkles className="w-4 h-4" style={{ color: themeColor }} />
          <span className="text-sm font-semibold" style={{ color: themeColor }}>
            READY TO EXCEL?
          </span>
        </div>

        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${getTextColorClasses()}`}
        >
          Start Your
          <span className="block mt-3" style={{ color: themeColor }}>
            Success Journey
          </span>
        </h2>

        <p
          className={`text-xl max-w-2xl mx-auto mb-8 leading-relaxed ${getMutedTextColorClasses()}`}
        >
          Join thousands of successful JEE and NEET aspirants who transformed their preparation with
          AI-powered insights and strategic learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            className="group relative px-10 py-5 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            style={{ backgroundColor: themeColor }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Start 1 Free Mock-Test</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className={`px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 border-2 ${bgColor === 'dark' ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'} flex items-center justify-center gap-3 bg-transparent`}
            style={{
              color: getTextColorClasses(),
            }}
          >
            <BookOpenCheck className="w-5 h-5" />
            <span>View Platform Demo</span>
          </button>
        </div>

        <div
          className={`text-sm ${getMutedTextColorClasses()} flex items-center justify-center gap-6 flex-wrap`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Full access to all features</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;