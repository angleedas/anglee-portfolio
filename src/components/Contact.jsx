
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Info Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I’d love to hear from you! Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>angleedas916@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <span>+92 329 6729141</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <span>Rahim Yar Khan, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Send a Message
          </h3>
          <form
            action="https://formspree.io/f/xqalqqae"  // replace with your form endpoint
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
