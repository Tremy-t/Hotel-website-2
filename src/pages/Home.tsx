import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
              Experience Luxury<br />Like Never Before
            </h1>
            <p className="text-xl mb-8 max-w-2xl animate-fade-in-delay">
              Indulge in world-class amenities, breathtaking views, and unparalleled service at LuxeStay.
            </p>
            <button className="bg-gold-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-gold-700 transition-colors duration-200 animate-fade-in-delay-2">
              <span>Book Now</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Why Choose LuxeStay</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of luxury, comfort, and exceptional service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxurious Rooms",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=2070&q=80",
                description: "Elegantly designed rooms with premium amenities"
              },
              {
                title: "Fine Dining",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2070&q=80",
                description: "World-class restaurants with master chefs"
              },
              {
                title: "Wellness Spa",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2070&q=80",
                description: "Rejuvenate your body and mind"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">Experience Paradise</h2>
              <p className="text-gray-600 mb-8">
                Nestled in the heart of luxury, LuxeStay offers an unparalleled experience of comfort and elegance. Our commitment to excellence ensures that every moment of your stay is nothing short of extraordinary.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Concierge Service",
                  "Private Beach Access",
                  "Infinity Pool with Ocean View",
                  "Michelin-Star Restaurant"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ChevronRight className="text-gold-600" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1080&q=80"
                alt="Luxury Experience"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1080&q=80"
                alt="Hotel Amenities"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}