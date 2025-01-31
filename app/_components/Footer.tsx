import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-neutral-300 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsam alias assumenda inventore eos nostrum asperiores velit porro qui excepturi tenetur soluta explicabo molestiae, facilis error est modi placeat quia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens </h3>
            <ul className="space-y-2">
              <li>
                <a href="/category/electronics" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  Electronics
                </a>
              </li>
              <li>
                <a href="/category/jwelery" className="text-NEUTRAL-300 hover:text-white transition-colors duration-300">
                  Jewelery
                </a>
              </li>
              <li>
                <a href="/category/men's%20clothing" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  men's clothing
                </a>
              </li>
              <li>
                <a href="/category/women's%20clothing" className="text-neutral-300 hover:text-white transition-colors duration-300">
                  woman's clothing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 neutral-300" />
                <a href="mailto:club.bac@gmail.com" className="neutral-300 hover:text-white transition-colors duration-300">
                  store.123@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-300" />
                <span className="text-neutral-300">+212 2222222</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-neutral-300" />
                <span className="text-neutral-300">Morocco</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-sm text-neutral-300">
              © 2025 ALL RHIGHTS RESERVED.
            </div>
            <div className="text-sm text-neutral-300">
              <p>Développé par  Mouad SADIK && Badreddine Ziane</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer