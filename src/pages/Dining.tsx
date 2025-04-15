import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Dining() {
  const restaurants = [
    {
      name: "La Vue",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2070&q=80",
      description: "Fine dining with panoramic ocean views",
      cuisine: "French Contemporary",
      price: "$$$$"
    },
    {
      name: "Sakura",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=2070&q=80",
      description: "Authentic Japanese cuisine",
      cuisine: "Japanese",
      price: "$$$"
    },
    {
      name: "The Garden",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2070&q=80",
      description: "Al fresco dining in our botanical gardens",
      cuisine: "Mediterranean",
      price: "$$$"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=2070&q=80"
            alt="Fine Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-serif mb-4">Culinary Excellence</h1>
            <p className="text-xl max-w-2xl">Experience world-class dining at our award-winning restaurants.</p>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif text-gray-900">{restaurant.name}</h3>
                    <span className="text-gold-600">{restaurant.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <p className="text-sm text-gray-500">Cuisine: {restaurant.cuisine}</p>
                  <button className="mt-6 w-full bg-gold-600 text-white px-6 py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Reserve a Table</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}