import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Perfect Place?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Whether you're looking to buy, sell, or rent, RealEstatePro connects you with the best opportunities in the market.
        </p>
        <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 shadow-md transition duration-300">
            Explore Listings
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-700 shadow-md transition duration-300">
            Get a Free Valuation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;