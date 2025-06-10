import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">RealEstatePro</h3>
          <p className="text-sm">
            Your trusted partner in real estate. Helping you find your dream home or sell your property with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="#properties" className="hover:text-white transition duration-200">Properties</a></li>
           
            <li className="mb-2"><a href="#about" className="hover:text-white transition duration-200">About Us</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm mb-2">123 Real Estate Blvd, Cityville, Bangladesh</p>
          <p className="text-sm mb-2">Email: info@realestatepro.com</p>
          <p className="text-sm">Phone: +880 123 456 7890</p>
        </div>

        {/* Social Media (Placeholders) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <i className="fab fa-facebook-f text-xl"></i> {/* You'd need Font Awesome or similar */}
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <i className="fab fa-twitter text-xl"></i>
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
              <i className="fab fa-linkedin-in text-xl"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;