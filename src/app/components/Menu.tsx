"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCoffee, FaUtensils } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { motion } from 'framer-motion';

const menuItems = [
  { id: 1, title: 'Chicken Burger', description: 'Juicy grilled chicken with fresh veggies in a soft bun.', price: '$115', image: '/burger.jpg' },
  { id: 2, title: 'Pizza', description: 'Classic pizza with a perfect blend of cheese and toppings.', price: '$120', image: '/pizza.jpg' },
  { id: 3, title: 'Pasta', description: 'Creamy pasta with a rich, savory sauce.', price: '$130', image: '/pasta.jpg' },
  { id: 4, title: 'Steak', description: 'Tender steak grilled to perfection.', price: '$150', image: '/steak.jpg' },
  { id: 5, title: 'Sandwich', description: 'Freshly made sandwich with your choice of fillings.', price: '$100', image: '/sandwish.jpg' },
  { id: 6, title: 'Salad', description: 'Crisp, colorful salad with a zesty dressing.', price: '$90', image: '/salad.jpg' },
  { id: 7, title: 'Fried Chicken', description: 'Crispy fried chicken with a flavorful coating.', price: '$140', image: '/chicken.jpg' },
  { id: 8, title: 'Sushi', description: 'Delicate sushi rolls with fresh fish and rice.', price: '$160', image: '/sushi.jpg' },
  { id: 9, title: 'Biryani', description: 'Aromatic biryani with tender meat and spices.', price: '$160', image: '/biryani.jpg' },
];

const MenuSection = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    // Trigger any animations or effects here if needed
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -300 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            x: menuOpen ? 0 : -300,
          }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-orange-500 text-6xl font-semibold italic mb-2">Food Menu</h3>
          <h2 className="text-4xl font-bold text-black mb-6">Most Popular Items</h2>

          <div className="flex justify-center space-x-8 text-orange-500 mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <FaCoffee size={30} />
              <span className="mt-2 font-semibold">Popular <br /> Breakfast</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <FaUtensils size={30} />
              <span className="mt-2 font-semibold">Special <br /> Lunch</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <GiKnifeFork size={30} />
              <span className="mt-2 font-semibold">Lovely <br /> Dinner</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="relative">
                  <Image src={item.image} alt={item.title} width={300} height={200} className="w-full h-56 object-cover" />
                  <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold p-2 rounded-bl-lg">{item.price}</div>
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-black">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
