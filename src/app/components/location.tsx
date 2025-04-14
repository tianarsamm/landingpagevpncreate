// location.tsx
"use client"

import React from 'react';

const Location = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white text-black">
      <h1 className="text-3xl font-bold text-center mb-2">Huge Global Network</h1>
      <h2 className="text-3xl font-bold text-center mb-6">of Fast VPN</h2>
      
      <p className="text-gray-600 text-center mb-16 max-w-lg">
        See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.
      </p>
      
      <div className="relative w-full max-w-4xl">
        {/* World map image - using placeholder for demonstration */}
        <img 
          src="/images/global.png" 
          alt="World map showing VPN locations" 
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Location;