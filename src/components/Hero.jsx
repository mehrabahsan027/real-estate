import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white py-20 lg:h-[600px] flex flex-col justify-center items-center">
      <div className="container   mx-auto text-center px-4 ">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-intro ">
          Find Your Dream Home Today
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-intro animate-intro-delay-1">
          Explore thousands of properties for sale or rent, from cozy apartments to luxurious estates.
        </p>
        <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-intro animate-intro-delay-2">
          <button   className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-r from-indigo-600 to-cyan-700 hover:text-yellow-50 shadow-sm hover:shadow-amber-50 transition-all duration-300">
            <a href="#properties">Browse Properties</a>
            
          </button>
          {/* <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
            List Your Property
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;