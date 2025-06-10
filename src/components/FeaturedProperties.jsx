import React from 'react';
import PropertyCard from './PropertyCard'; // Assuming you have this component
import { properties } from '../data/properties.js';


const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-16 bg-gradient-to-t from-cyan-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12
        bg-gradient-to-r from-indigo-500  to-cyan-800 text-transparent bg-clip-text
        ">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 cursor-pointer">
            View All Properties
          </button>
        </div> 
      </div>
    </section>
  );
};

export default FeaturedProperties;