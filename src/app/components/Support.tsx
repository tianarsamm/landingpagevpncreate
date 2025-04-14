// sponsor.tsx
"use client"

import React from 'react';

const Support = () => {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          {/* Single image containing all sponsor logos */}
          <img 
            src="/images/Sponsored.png" 
            alt="Sponsor logos including Netflix, Reddit, Amazon, Discord, and Spotify" 
            className="w-full max-w-4xl opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;