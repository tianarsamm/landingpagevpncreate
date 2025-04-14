// subscribe.tsx
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Subscribe = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content container */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Text */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Subscribe Now for<br />
              Get Special Features!
            </h2>
            <p className="text-gray-600 mt-2">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Right side - Button */}
          <div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            {/* Logo - Using image instead of SVG */}
            <div className="flex items-center mb-6">
              <Image 
                src="/images/logo.png" 
                alt="LaslesVPN Logo" 
                width={35} 
                height={35}
                className="object-contain"
              />
              <span className="ml-2 font-bold text-lg text-gray-900">LaslesVPN</span>
            </div>
            <p className="text-gray-600 mb-6">
              <strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-red-500 hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-red-500 hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 text-red-500 hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">©2020LaslesVPN</p>
          </div>

          {/* Product column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Download</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Locations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Server</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Countries</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Engage column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Engage</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">LaslesVPN ?</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Earn Money column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">Earn Money</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Affiliate</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">Become Partner</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;