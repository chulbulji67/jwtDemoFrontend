import React from 'react';

const Home1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
      <div className="flex justify-center mb-6">
        <img src="data:image/jpeg;base64,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" alt="Book" className="w-24 h-24 mr-4" />
        <h2 className="text-3xl font-semibold text-gray-800">Welcome to Our Website!</h2>
      </div>
      <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec felis ac felis placerat tincidunt. Sed eu metus nec odio venenatis aliquet.</p>
      <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Learn More</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Sign Up</button>
      </div>
    </div>
  </div>
  );
}

export default Home1;