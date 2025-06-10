import React, { useState } from 'react'; // Import useState
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const FeaturedProperties = () => {
  // State to control how many properties are shown
  // Initially, show only the first 6 properties
  const initialPropertyCount = 6;
  const [visibleProperties, setVisibleProperties] = useState(
    properties.slice(0, initialPropertyCount)
  );
  // State to track if all properties are currently displayed
  const [showAll, setShowAll] = useState(false);

  const handleViewAllProperties = () => {
    setVisibleProperties(properties); // Show all properties
    setShowAll(true); // Update state to indicate all are shown
  };

  return (
    <section id="properties" className="py-16 bg-gradient-to-t from-cyan-100 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {/* Show button only if not all properties are already visible */}
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewAllProperties}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              View All Properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;