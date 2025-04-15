import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Spa() {
  const treatments = [
    {
      name: "Royal Thai Massage",
      duration: "90 min",
      price: "250",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2070&q=80",
      description: "Traditional Thai massage combining pressure points and stretching techniques"
    },
    {
      name: "Diamond Facial",
      duration: "60 min",
      price: "200",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2070&q=80",
      description: "Luxury facial treatment using diamond dust and pure gold elements"
    },
    {
      name: "Couples Retreat",
      duration: "120 min",
      price: "400",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2070&q=80",
      description: "Romantic couples massage followed by private jacuzzi session"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-serif mb-4">Wellness & Relaxation</h1>
            <p className="text-xl max-w-2xl">Immerse yourself in a world of tranquility and rejuvenation.</p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={treatment.image} alt={treatment.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif text-gray-900">{treatment.name}</h3>
                    <span className="text-gold-600">${treatment.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Duration: {treatment.duration}</p>
                  <p className="text-gray-600">{treatment.description}</p>
                  <button className="mt-6 w-full bg-gold-600 text-white px-6 py-3 rounded-full hover:bg-gold-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Book Treatment</span>
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