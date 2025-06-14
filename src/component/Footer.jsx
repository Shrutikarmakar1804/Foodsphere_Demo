import React from 'react';
import {
  FaInstagram, FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-20 lg:px-20 mt-10">
      <div className="max-w-8xl mx-auto grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-10">
        
        {/* Logo & Copyright */}
        <div className="col-span-2 lg:col-span-1">
          <div className="text-orange-500 font-bold text-2xl mb-2">FoodSphere</div>
          <p className="text-sm text-gray-500">© 2025 FoodSphere Limited</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <Link to="/about" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  About Us
            </Link>
           
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact us</h3>
          <ul className="space-y-1 text-sm">
             <Link to="/help" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                Help Center
            </Link>
           
           
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-semibold mb-2">Available in:</h3>
          <ul className="space-y-1 text-sm">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>
              <select className="border rounded px-2 py-1 mt-1 text-sm">
                <option>11 cities</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm mb-4">
            <Link to="/terms" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  Terms & Conditions
            </Link>
            <li>Privacy Policy</li>
          </ul>
          <h3 className="font-semibold mb-2">Social Links</h3>
          <div className="flex space-x-3 text-xl text-gray-600">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;