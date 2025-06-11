import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-t from-cyan-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12
        
        bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text ">
          About RealEstatePro
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1709715357519-2a84f9765e57?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="RealEstatePro Team"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left md:text-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Your Trusted Real Estate Partner
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 ">
              At RealEstatePro, we make finding your perfect home simple and stress-free. Our mission is to deliver exceptional service, expert guidance, and a seamless experience for buyers, sellers, and renters.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With deep market knowledge and innovative technology, our dedicated team ensures you achieve your real estate goals with confidence.
            </p>
            <ul className="text-gray-800 list-disc list-inside space-y-2 mb-6 text-center lg:text-left mx-auto lg:mx-0 max-w-md font-medium">
              <li>Client-Focused: Your priorities come first.</li>
              <li>Market Expertise: Insight into local trends.</li>
              <li>Transparency: Clear, honest communication.</li>
              <li>Innovation: Cutting-edge tools for results.</li>
            </ul>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
              Discover Our Values
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;