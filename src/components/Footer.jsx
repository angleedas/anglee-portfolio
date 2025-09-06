//  import React from 'react';
// import { FaLinkedin } from 'react-icons/fa';

// const Footer = () => (
//   <footer className="bg-{ #111439 } py-6 px-4 text-center">
//     <p className="text-sm text-gray-600">© 2025 Anglee Bhagwan Das. All rights reserved.</p>
//     <div className="mt-2 flex justify-center">
//       <a
//         href="https://www.linkedin.com/in/your-profile-link"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-700 hover:text-blue-900"
//       >
//         <FaLinkedin size={24} />
//       </a>
//     </div>
//   </footer>
// );

// export default Footer;
// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 MyPortfolio. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
