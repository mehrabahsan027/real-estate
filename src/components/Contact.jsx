import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it to the console.
    console.log('Form submitted:', formData);
    // You could also show a success message to the user here
    alert('Thank you for your message! We will get back to you shortly.'); // Using alert for simplicity, replace with custom modal in production
    setFormData({ name: '', email: '', phone: '', message: '' }); // Clear the form
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text
        ">
          Get In Touch With Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Information */}
          <div className="lg:w-1/2  text-white p-10 rounded-lg shadow-xl text-center lg:text-left bg-gradient-to-r from-indigo-600 to-cyan-700">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <p className="text-lg mb-4">
              We're here to help you with all your real estate needs. Feel free to reach out to us through any of the following channels.
            </p>
            <div className="space-y-4">
              <p className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                123 Real Estate Blvd, Cityville, Bangladesh
              </p>
              <p className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                info@realestatepro.com
              </p>
              <p className="flex items-center justify-center lg:justify-start text-lg">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +880 123 456 7890
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gradient-to-tl from-cyan-100 to-gray-200 p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., +880 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                  required
                ></textarea>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gradient-to-r from-indigo-600 to-cyan-700 transition duration-300 ease-in shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;