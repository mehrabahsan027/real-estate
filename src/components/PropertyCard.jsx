import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.address}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-indigo-600">${property.price.toLocaleString()}</span>
          <div className="text-gray-700 flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              {property.beds} Beds
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14z"></path></svg>
              {property.baths} Baths
            </span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-700 text-white py-2 rounded-md hover:bg-indigo-700 font-medium transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;