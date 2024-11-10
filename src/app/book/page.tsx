"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTime: '',
    people: 'People 1',
    specialRequest: '',
  });

  const router = useRouter();

  // Handling input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handling form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission and redirect to home
    router.push('/'); // Redirect to homepage after booking
  };

  return (
    <section className="bg-light-blue-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left Side - Image with Play Button */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <Image
            src="/video.jpg"
            alt="Reservation"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-orange-500 p-4 rounded-full hover:bg-orange-600 transition-all duration-300">
              <FaPlay className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Right Side - Reservation Form */}
        <div className="w-full md:w-1/2 bg-blue-900 p-8 rounded-lg mt-8 md:mt-0 md:ml-8">
          <h3 className="text-orange-500 text-xl font-semibold mb-2">Reservation</h3>
          <h2 className="text-4xl font-bold text-white mb-6">Book A Table Online</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="dateTime"
                placeholder="Date & Time"
                value={formData.dateTime}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                required
              />
              <select
                name="people"
                value={formData.people}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-200 text-black outline-none"
                required
              >
                <option>People 1</option>
                <option>People 2</option>
                <option>People 3</option>
                <option>People 4</option>
              </select>
            </div>
            <textarea
              name="specialRequest"
              placeholder="Special Request"
              value={formData.specialRequest}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-200 text-black outline-none"
              rows={3} // Fixed the issue by passing a number
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
