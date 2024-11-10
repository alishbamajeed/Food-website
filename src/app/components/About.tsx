"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaUtensils } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Counter Animation Hook with Types
const useCounter = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, start, duration]);
  return count;
};

const AboutSection = () => {
  const yearsOfExperience = useCounter(0, 15, 2000); // 2-second animation
  const masterChefs = useCounter(0, 50, 2000); // 2-second animation

  return (
    <motion.section
      className="bg-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row md:items-center">
        {/* Image Grid with 4 equal smaller images */}
        <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-2 lg:grid-cols-2 mb-5 md:mb-0 max-w-xs mx-auto md:max-w-md">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="relative rounded-lg overflow-hidden w-full h-32"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <Image
                src={`/about-${i}.jpg`}
                alt={`Image ${i}`}
                className="rounded-lg"
                fill
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Text and Counters Section */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left md:ml-8">
          <h3 className="text-orange-500 text-5xl md:text-7xl font-serif italic mb-4">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 flex items-center justify-center md:justify-start">
            Welcome to <span className="text-orange-500 mx-2"><FaUtensils /></span> Restoran
          </h2>

          {/* Short About Us Text */}
          <p className="text-gray-500 font-semibold mb-4">
            Welcome to <strong>Restoran</strong>&mdash;where food meets tradition and innovation! Our chefs bring years of expertise and passion to every dish, using fresh, locally sourced ingredients to create unforgettable meals.
          </p>
          <p className="text-gray-500 font-semibold mb-4">
            Whether you're here for a casual meal or a special occasion, we promise an exceptional dining experience with dishes that will leave you craving more.
          </p>

          {/* Counters */}
          <div className="flex justify-center md:justify-start space-x-8 mb-8 border-orange-600">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-4xl font-bold text-orange-500">
                {yearsOfExperience}
              </span>
              <p className="text-sm font-semibold text-gray-600">
                Years of <br /> EXPERIENCE
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="text-4xl font-bold text-orange-500">
                {masterChefs}
              </span>
              <p className="text-sm font-semibold text-gray-600">
                Popular <br /> MASTER CHEFS
              </p>
            </motion.div>
          </div>

          <Link href="/about">
            <motion.button
              className="px-8 py-4 font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              READ MORE
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
