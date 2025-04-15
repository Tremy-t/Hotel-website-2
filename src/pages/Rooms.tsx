import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      title: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80",
      price: "1,500",
      description: "Experience ultimate luxury in our flagship suite with panoramic ocean views.",
      amenities: ["King Size Bed", "Private Terrace", "Butler Service", "Jacuzzi"]
    },
    {
      title: "Ocean View Deluxe",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
      price: "800",
      description: "Spacious room with breathtaking views of the ocean.",
      amenities: ["Queen Size Bed", "Balcony", "Mini Bar", "Rain Shower"]
    },
    {
      title: "Garden Suite",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2070&q=80",
      price: "600",
      description: "Peaceful suite overlooking our manicured gardens.",
      amenities: ["King Size Bed", "Garden View", "Lounge Area", "Luxury Toiletries"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-serif mb-4">Our Luxurious Rooms</h1>
            <p className="text-xl max-w-2xl">Choose from our carefully curated selection of premium accommodations.</p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={room.image} alt={room.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-gold-600 text-white px-4 py-2 rounded-full">
                    ${room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="space-y-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <ChevronRight size={16} className="text-gold-600" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-gold-600 text-white px-6 py-3 rounded-full hover:bg-gold-700 transition-colors duration-200">
                    Book Now
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