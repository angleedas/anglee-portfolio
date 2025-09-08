// Home.jsx
import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gray-50 min-h-screen">
      {/* Left Side */}
      <motion.div
        className="text-center md:text-left md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-600">Anglee Bhagwan Das</span>
        </h1>
        <p className="text-lg text-gray-600">
           A passionate <span className="font-semibold">Web Developer</span> who
           loves building clean, modern, and responsive websites.  
           Always curious and constantly learning 🚀.
           I’m currently learning full-stack development and exploring real-world projects.
        </p>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src= "/anglee-portfolio/assets/profile-photo.png"
          alt="Profileimg"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </motion.div>
    </section>
  );
};

export default Home;
