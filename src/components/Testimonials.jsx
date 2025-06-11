import React from 'react';

const testimonialsData = [
  {
    id: 1,
    quote: "Finding our dream home was effortless with RealEstatePro. Their agents were incredibly supportive and knowledgeable!",
    author: "Sarah J.",
    location: "New York, USA",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    
  },
  {
    id: 2,
    quote: "The process of selling my property was so smooth. RealEstatePro handled everything efficiently and professionally.",
    author: "David L.",
    location: "New Jersey, USA",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  
  },
  {
    id: 3,
    quote: "I highly recommend RealEstatePro! Their diverse listings and transparent communication made my apartment search a breeze.",
    author: "Priya K.",
    location: "California, USA",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
   
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-gradient-to-tl from-cyan-100 to-purple-50  text-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-indigo-500"
                />
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;