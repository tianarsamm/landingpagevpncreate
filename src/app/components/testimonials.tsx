// testimonials.tsx
"use client"

import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "/images/robert.png",
      comment: "\"Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best\"."
    },
    {
      id: 2,
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      image: "/images/christy.png",
      comment: "\"I like it because I like to travel far and still can connect with high speed\"."
    },
    {
      id: 3,
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      image: "/images/young.png",
      comment: "\"This is very unusual for my business that currently requires a virtual private network that has high security\"."
    },
    {
      id: 4,
      name: "Alexander Han",
      location: "Tokyo, Japan",
      rating: 4.5,
      image: "/images/young.png",
      comment: "\"I've been using this VPN service for over a year now and I'm extremely satisfied with the reliability and speed it provides\"."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Thousands of<br />Happy Customer
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Added padding to handle overflow from the hover effect */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full min-w-full md:min-w-[33.333%] px-3"
                >
                  {/* Added margin for hover space and z-index for proper layering */}
                  <div className="p-2 h-full">
                    <div 
                      className={`bg-white p-8 rounded-lg border-2 ${activeIndex === index ? '' : 'border-gray-200'} h-full
                        transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg hover:z-10 hover:scale-105`}
                    >
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}'s profile picture`}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-lg text-black">{testimonial.name}</h4>
                            <p className="text-gray-500 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 font-semibold text-gray-500">{testimonial.rating}</span>
                          <svg 
                            className="w-5 h-5 text-yellow-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-700">{testimonial.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-10 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-red-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-end mt-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-red-500 text-red-500 flex items-center justify-center mr-4 hover:bg-red-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;