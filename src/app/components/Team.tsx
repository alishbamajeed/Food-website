"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  { id: 1, name: 'John Doe', designation: 'Head Chef', image: '/team-1.jpg' },
  { id: 2, name: 'Alex Smith', designation: 'Sous Chef', image: '/team-2.jpg' },
  { id: 3, name: 'Michael Johnson', designation: 'Pastry Chef', image: '/team-3.jpg' },
  { id: 4, name: 'Chris Lee', designation: 'Line Cook', image: '/team-4.jpg' },
];

const TeamSection = () => {
  return (
    <section className="bg-light-blue-100 py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-orange-500 text-xl font-semibold mb-2">Team Members</h3>
        <h2 className="text-4xl font-bold text-black mb-10">Our Master Chefs</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <h4 className="text-xl font-bold text-black">{member.name}</h4>
              <p className="text-gray-600">{member.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
