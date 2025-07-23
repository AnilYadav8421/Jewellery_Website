import React from 'react';

const Title = ({ text }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-gray-800">
        {text}
      </h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></div>
    </div>
  );
};

export default Title;
