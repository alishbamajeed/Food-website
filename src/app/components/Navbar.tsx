"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 p-6 transition duration-300 ${isScrolled ? 'bg-slate-900' : 'bg-slate-800 bg-opacity-50'}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-16">
        {/* Logo and Icon */}
        <div className="flex items-center space-x-2 text-orange-500">
          <FaUtensils className="text-3xl md:text-5xl" />
          <h1 className="text-2xl md:text-5xl font-bold">Restoran</h1>
        </div>

        {/* Hamburger Icon */}
        <button className="text-yellow-50 md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ml-auto space-x-6 text-sm tracking-wide uppercase text-yellow-50">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/about" className="hover:text-orange-500">About</Link>
          <Link href="/services" className="hover:text-orange-500">Services</Link>
          <Link href="/menu" className="hover:text-orange-500">Menu</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-slate-900 text-yellow-50 text-center py-4 space-y-4 md:hidden">
            <Link href="/" className="block hover:text-orange-500" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="block hover:text-orange-500" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="block hover:text-orange-500" onClick={toggleMenu}>Services</Link>
            <Link href="/menu" className="block hover:text-orange-500" onClick={toggleMenu}>Menu</Link>
            <Link href="/contact" className="block hover:text-orange-500" onClick={toggleMenu}>Contact</Link>
          </nav>
        )}

        {/* Book a Table Button */}
        <Link href="/book" className="hidden md:block ml-6">
          <button className="px-6 py-2 font-semibold text-white bg-orange-500 hover:bg-orange-600">
            Book a Table
          </button>
        </Link>
      </div>
    </div>
  );
}
