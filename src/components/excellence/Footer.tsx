import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { Mail } from "lucide-react";
import { Heart } from "lucide-react";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excellence
            </h3>
            <p className="text-gray-400">
              Transforming businesses through innovation since 2010.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-blue-600" />
                <span>123 Business Street, New York</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={24} className="text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={24} className="text-blue-600" />
                <span>contact@company.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Consulting</li>
              <li>Development</li>
              <li>Support</li>
              <li>Training</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Connect</h4>

            <div className="flex gap-4 mb-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaLinkedin size={24} />
              <FaInstagram size={24} />
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={20} />
              <span>excellence@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2016 - {new Date().getFullYear()} Excellence.</p>
          <p className="flex items-center justify-center gap-1 ">Developed with <Heart size={20} className="text-red-600 fill-red-600" /> by Creyotech IT Services.</p>
        </div>
      </div>
    </footer>
  );
}