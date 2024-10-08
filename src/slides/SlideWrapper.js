import React from 'react';

const SlideWrapper = ({ children, title, className = '' }) => (
  <div className={`flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-green-900 ${className}`}>
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="w-full max-w-[1280px] aspect-[16/10] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-green-600 py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
        </div>
        <div className="p-3 sm:p-6 md:p-8 h-[calc(100%-5rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
    <div className="h-4 bg-green-600 w-full"></div>
  </div>
);

export default SlideWrapper;