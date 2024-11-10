import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b132b] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Section */}
        <div>
          <h4 className="text-yellow-500 font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Reservation</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-yellow-500 font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-yellow-500" /> Pakistan,Karachi</li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2 text-yellow-500" /> +923182917446</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-yellow-500" /> alishbamajeed22@gmail.com</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/alishbah.rajput.12?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-yellow-500 text-white"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-yellow-500 text-white"><FaTwitter /></a>
            <a href="https://youtube.com/@codemastery021?si=o_NeUFWj7YyZwANL" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-yellow-500 text-white"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/alishba-majeed-5099b8310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-yellow-500 text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Opening Section */}
        <div>
          <h4 className="text-yellow-500 font-semibold text-lg mb-4">Opening</h4>
          <ul className="space-y-2">
            <li>Monday - Saturday</li>
            <li className="text-gray-300">09AM - 09PM</li>
            <li>Sunday</li>
            <li className="text-gray-300">10AM - 08PM</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-yellow-500 font-semibold text-lg mb-4">Newsletter</h4>
          <p className="text-gray-300 mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 rounded-r-md font-semibold"
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />
      
      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        © Alishba❤, All Rights Reserved. Designed by Next.js,TailwindCss
      </div>

      <div className="flex justify-center space-x-4 mt-4 text-gray-400 text-sm">
        <a href="#" className="hover:text-yellow-500">Home</a>
        <a href="#" className="hover:text-yellow-500">Cookies</a>
        <a href="#" className="hover:text-yellow-500">Help</a>
        <a href="#" className="hover:text-yellow-500">FAQs</a>
      </div>
    </footer>
  );
};

export default Footer;
