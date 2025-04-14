// plan.tsx
"use client"

import React, { useState } from 'react';

const Plan = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const plans = [
    {
      id: 1,
      name: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices"
      ]
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "$9",
      period: "/ mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere"
      ]
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$12",
      period: "/ mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
      <p className="text-gray-600 text-center mb-12 max-w-lg">
        Let's choose the package that is best for you and explore it happily and cheerfully.
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col bg-white rounded-lg p-8 border transition-all duration-300 w-full md:w-1/3 relative ${
              hoveredCard === plan.id
                ? "border-red-500 shadow-lg transform -translate-y-1"
                : "border-gray-200 hover:shadow-md"
            }`}
            onMouseEnter={() => setHoveredCard(plan.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-center mb-8">
              <div className="w-32">
                <img 
                  src="/images/Free.png" 
                  alt="Plan illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-center mb-6 text-black">{plan.name}</h2>
            
            <ul className="flex-grow mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                    hoveredCard === plan.id ? "bg-red-500" : "bg-green-500"
                  }`}>
                    <svg 
                      className="w-3 h-3 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-black">{plan.price} <span className="text-black text-base font-normal">{plan.period}</span></p>
            </div>
            
            <button
              className={`py-3 px-4 rounded-full text-center transition-all border ${
                hoveredCard === plan.id
                  ? "bg-red-500 text-white border-red-500 shadow-md"
                  : "bg-white text-red-500 border-red-500 hover:bg-red-50"
              }`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;