import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `py-2 px-3 rounded transition-colors duration-300 font-medium ${
    isActive
      ? 'text-purple-700 border-b-4 border-purple-500 bg-purple-50'
      : 'hover:text-orange-500 hover:bg-orange-50 text-gray-800'
  }`;

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 border-b shadow-sm bg-white transition-all duration-300">
    <div className="text-3xl font-bold text-purple-700 hover:text-purple-800 transition-colors duration-300 cursor-pointer">Kaamigo</div>
    <div className="hidden md:flex space-x-2 text-base font-medium">
      <NavLink to="/" className={navLinkClass} end>Home</NavLink>
      <span className="py-2 px-3 text-gray-500 cursor-not-allowed">Explore</span>
      <span className="py-2 px-3 text-gray-500 cursor-not-allowed">About Us</span>
      <NavLink to="/partners" className={navLinkClass}>Partners</NavLink>
      <NavLink to="/coins" className={navLinkClass}>Coins</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
      <span className="py-2 px-3 text-gray-500 cursor-not-allowed">Blog</span>
    </div>
    <div className="flex items-center space-x-6">
      <button className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300 py-2 px-4 rounded hover:bg-orange-50">Login</button>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Sign Up</button>
    </div>
  </nav>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-32 text-center px-6">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6 animate-pulse">Reels Bhi. Rozgaar Bhi.</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your voice-first, reels-powered platform connecting talent with opportunities in Tier 2/3 India.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search for gigs or workers..."
            className="w-full px-6 py-4 border-2 border-purple-200 rounded-l-lg focus:outline-none focus:border-purple-500 transition-colors duration-300 text-lg"
          />
          <button className="bg-purple-600 text-white px-8 py-4 rounded-r-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Search
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6 flex-wrap gap-4">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            📥 Download the App
          </button>
          <button className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Join as a Freelancer / Client
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Why Kaamigo? Benefits for Everyone
        </h2>

        {/* For Clients */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-purple-700 mb-10">For Clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="border-2 border-orange-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="text-orange-500 mb-4 text-4xl">👤</div>
              <h4 className="font-bold mb-4 text-xl text-purple-700">Find Verified Talent</h4>
              <p className="text-base text-gray-600">Access a curated pool of skilled freelancers from Tier 2/3 India, verified for quality and reliability.</p>
            </div>
            <div className="border-2 border-orange-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="text-orange-500 mb-4 text-4xl">💼</div>
              <h4 className="font-bold mb-4 text-xl text-purple-700">Quick & Easy Hiring</h4>
              <p className="text-base text-gray-600">Streamlined process to post gigs, review applications, and hire talent efficiently, saving you time.</p>
            </div>
            <div className="border-2 border-orange-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="text-orange-500 mb-4 text-4xl">🎤</div>
              <h4 className="font-bold mb-4 text-xl text-purple-700">Voice-First Communication</h4>
              <p className="text-base text-gray-600">Connect with freelancers using voice notes and calls, bridging language barriers.</p>
            </div>
          </div>
        </div>

        {/* For Freelancers */}
        <div>
          <h3 className="text-3xl font-semibold text-center text-purple-700 mb-10">For Freelancers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="border-2 border-purple-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-purple-400 bg-gradient-to-br from-white to-purple-50">
              <div className="text-purple-500 mb-4 text-4xl">🎥</div>
              <h4 className="font-bold mb-4 text-xl text-orange-600">Showcase Your Skills with Reels</h4>
              <p className="text-base text-gray-600">Create engaging video reels to highlight your expertise and attract clients directly.</p>
            </div>
            <div className="border-2 border-purple-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-purple-400 bg-gradient-to-br from-white to-purple-50">
              <div className="text-purple-500 mb-4 text-4xl">📈</div>
              <h4 className="font-bold mb-4 text-xl text-orange-600">Flexible Work, Better Pay</h4>
              <p className="text-base text-gray-600">Discover diverse projects, set your own terms, and earn competitive rates in a growing market.</p>
            </div>
            <div className="border-2 border-purple-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-purple-400 bg-gradient-to-br from-white to-purple-50">
              <div className="text-purple-500 mb-4 text-4xl">🪙</div>
              <h4 className="font-bold mb-4 text-xl text-orange-600">Access Tier 2/3 Market</h4>
              <p className="text-base text-gray-600">Tap into a vast client base in emerging cities, unlocking new opportunities for growth and income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Reels Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-purple-50">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          See Skills in Action: Top Reels
        </h2>

        <div className="flex overflow-x-auto space-x-6 max-w-7xl mx-auto px-4 pb-6">
          {/*
            { title: 'Crafting Intuitive User Interfaces', name: 'Priya Sharma', views: '13.5K views' },
            { title: 'Captivating Voiceovers for Brands', name: 'Amit Singh', views: '9.8K views' },
            { title: 'Engaging Content that Converts', name: 'Sneha Patel', views: '7.5K views' },
            { title: 'Bringing Ideas to Life Through Design', name: 'Rohan Gupta', views: '5.2K views' },
          */}
          { [
            { title: 'Crafting Intuitive User Interfaces', name: 'Priya Sharma', views: '13.5K views' },
            { title: 'Captivating Voiceovers for Brands', name: 'Amit Singh', views: '9.8K views' },
            { title: 'Engaging Content that Converts', name: 'Sneha Patel', views: '7.5K views' },
            { title: 'Bringing Ideas to Life Through Design', name: 'Rohan Gupta', views: '5.2K views' },
          ].map((reel, index) => (
            <div key={index} className="min-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-200 hover:border-orange-400">
              <div className="bg-gradient-to-br from-purple-300 to-orange-300 h-48 rounded-t-xl"></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-purple-700">{reel.title}</h3>
                <p className="text-base text-gray-600 mb-1">{reel.name}</p>
                <p className="text-sm text-orange-500 font-medium">{reel.views}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/*
            {
              quote: "Kaamigo transformed our hiring. We found the perfect graphic designer in days, thanks to their innovative voice-first approach!",
              name: "Rakesh Kumar",
              role: "CEO, Technovate Solutions"
            },
            {
              quote: "As a freelancer, Kaamigo's reels feature helped me showcase my video editing skills like never before. My client base grew significantly!",
              name: "Sonia Verma",
              role: "Freelance Video Editor"
            },
            {
              quote: "The ease of communication on Kaamigo is unmatched. Hiring content writers for our regional campaigns has become so much simpler.",
              name: "Priya Singh",
              role: "Marketing Manager, Bharat Brands"
            },
            {
              quote: "I never thought I could find so many local clients. Kaamigo opened up a new market for my photography business in my hometown.",
              name: "Arjun Reddy",
              role: "Freelance Photographer"
            }
          */}
          { [
            {
              quote: "Kaamigo transformed our hiring. We found the perfect graphic designer in days, thanks to their innovative voice-first approach!",
              name: "Rakesh Kumar",
              role: "CEO, Technovate Solutions"
            },
            {
              quote: "As a freelancer, Kaamigo's reels feature helped me showcase my video editing skills like never before. My client base grew significantly!",
              name: "Sonia Verma",
              role: "Freelance Video Editor"
            },
            {
              quote: "The ease of communication on Kaamigo is unmatched. Hiring content writers for our regional campaigns has become so much simpler.",
              name: "Priya Singh",
              role: "Marketing Manager, Bharat Brands"
            },
            {
              quote: "I never thought I could find so many local clients. Kaamigo opened up a new market for my photography business in my hometown.",
              name: "Arjun Reddy",
              role: "Freelance Photographer"
            }
          ].map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-purple-400">
              <p className="italic mb-6 text-base text-gray-700">"{t.quote}"</p>
              <div className="font-semibold text-lg text-purple-700">{t.name}</div>
              <div className="text-sm text-orange-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-100 to-purple-100 border-t">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-purple-700">Get the Kaamigo App Today!</h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Experience voice-first freelancing on the go. Download our app for seamless connections and endless opportunities.
            </p>
            <div className="flex justify-center md:justify-start gap-6 flex-wrap">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                📱 Download on Android
              </button>
              <button className="border-2 border-purple-400 text-purple-700 px-8 py-4 rounded-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                🍏 Get on iOS (Coming Soon)
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="h-80 w-full bg-gradient-to-br from-purple-200 to-orange-200 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
export { Navbar };
