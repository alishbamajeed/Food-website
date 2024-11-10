"use client";

import React from 'react';
import { FaUtensils, FaUserTie, FaCartPlus, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: <FaUserTie size={60} className="text-orange-500" aria-label="Master Chefs Icon" />,
    title: 'Master Chefs',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
  },
  {
    icon: <FaUtensils size={60} className="text-orange-500" aria-label="Quality Food Icon" />,
    title: 'Quality Food',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
  },
  {
    icon: <FaCartPlus size={60} className="text-orange-500" aria-label="Online Order Icon" />,
    title: 'Online Order',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
  },
  {
    icon: <FaHeadset size={60} className="text-orange-500" aria-label="24/7 Service Icon" />,
    title: '24/7 Service',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
  },
];

export const Servicecard = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-12 text-center bg-white shadow-lg rounded-lg hover:scale-105 transform transition-all duration-300 hover:bg-yellow-400 hover:shadow-2xl"
            >
              <div className="mb-6">{service.icon}</div>
              <h5 className="mb-3 text-xl font-bold text-black">{service.title}</h5>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Card = () => {
  return (
    <div>
      <Servicecard />
    </div>
  );
}
