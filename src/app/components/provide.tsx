import React from 'react';

const Provide: React.FC = () => {
  const features = [
    "Powerful online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits."
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/images/il2.png" 
              alt="Person using VPN service with laptop" 
              className="max-w-full"
            />
          </div>

          {/* Right Side - Features */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Provide Many Features You Can Use
            </h2>
            <p className="text-gray-600 mb-8">
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;