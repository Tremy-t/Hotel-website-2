import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">LuxeStay</h3>
            <p className="text-gray-400">Experience luxury living at its finest.</p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Rooms & Suites', path: '/rooms' },
                { name: 'Dining', path: '/dining' },
                { name: 'Spa & Wellness', path: '/spa' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Avenue</li>
              <li>Beverly Hills, CA 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@luxestay.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none" />
              <button className="bg-gold-600 text-white px-4 py-2 rounded-r-lg hover:bg-gold-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxeStay. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://github.com/Tremy-t" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              Created by Tremy-t
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}