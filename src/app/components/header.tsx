"use client"

import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between">
          {/* Logo - Using image instead of SVG */}
            <div className="flex items-center">
            <Image 
            src="/images/logo.png" 
            alt="LaslesVPN Logo" 
            width={35} 
            height={35}
            className="object-contain"
            />
            <span className="ml-2 font-bold text-lg text-gray-900">LaslesVPN</span>
            </div>

          {/* Middle Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-900 font-medium">Sign In</button>
            <button className="px-6 py-2 bg-white text-red-500 border border-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Want anything to be easy with <span className="text-gray-900">LaslesVPN.</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
            </p>
            <button className="mt-8 px-8 py-3 bg-red-500 text-white rounded-md font-medium shadow-lg shadow-red-200 hover:bg-red-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img src="/images/il1.png" alt="Person using VPN service" className="w-full" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Users */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-red-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900">90+</h3>
              <p className="text-gray-600">Users</p>
            </div>
          </div>

          {/* Locations */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-red-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600">Locations</p>
            </div>
          </div>

          {/* Servers */}
          <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
            <div className="p-3 bg-red-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;