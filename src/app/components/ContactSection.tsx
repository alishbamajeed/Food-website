"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission logic here
    console.log("Form submitted");

    // Display success message
    setSubmitted(true);

    // Clear success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-orange-500 text-lg font-semibold">Contact Us</h2>
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Contact For Any Query</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-sm md:text-base">
          <div className="space-y-2">
            <h3 className="text-orange-500 font-semibold text-lg">Booking</h3>
            <p className="text-gray-600"><span className="text-orange-500">📧</span> book@example.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-orange-500 font-semibold text-lg">General</h3>
            <p className="text-gray-600"><span className="text-orange-500">📧</span> info@example.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-orange-500 font-semibold text-lg">Technical</h3>
            <p className="text-gray-600"><span className="text-orange-500">📧</span> tech@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4385735584!2d-74.11808657104884!3d40.70582537040547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b20437%3A0x453da43a019e4d19!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1699514361234!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen={true} // Set it to true, not an empty string
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                placeholder="Message"
                rows={4} // Use a number here, not a string
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>

            {/* Success message */}
            {submitted && (
              <div className="mt-4 text-green-600 font-semibold">
                Your message has been successfully submitted!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
