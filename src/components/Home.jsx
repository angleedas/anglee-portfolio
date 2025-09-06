// Home.jsx
import React from "react";
import { motion } from "framer-motion";
// import myImage from "src/assets/profili photo.png"; // ✅ make sure the image exists in src/assets

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
        {/* <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          View My Work
        </button> */}
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="src/assets/profile photo.png"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </motion.div>
    </section>
  );
};

export default Home;

// import React from "react";
// import { motion } from "framer-motion";
// // import myImage from "src/assets/profile photo.png"; // 👉 replace with your image path

// const Home = () => {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//       {/* Left Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center md:text-left max-w-lg"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
//           Hi, I’m <span className="text-blue-600">Anglee Bhagwan Das</span>
//         </h1>
//         <p className="mt-6 text-lg md:text-xl text-gray-600">
//           A passionate <span className="font-semibold">Web Developer</span> who
//           loves building clean, modern, and responsive websites.  
//           Always curious and constantly learning 🚀.
//           I’m currently learning full-stack development and exploring real-world projects.
//         </p>

//         <div className="mt-8 flex gap-4 justify-center md:justify-start">
//           <a
//             href="#contact"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//           >
//             Contact Me
//           </a>
//           <a
//             href="#skills"
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
//           >
//             My Skills
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="mb-10 md:mb-0"
//       >
//         <img
//           src="/src/assets/profile photo.png" 
//           alt="Profile"
//           className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-white"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Home;
