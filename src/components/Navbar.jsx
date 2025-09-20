
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo / Name */}
//         <h1 className="text-xl font-bold">My Portfolio</h1>

//         {/* Links */}
//         <div className="space-x-6 hidden md:flex">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `hover:text-yellow-200 transition ${
//                 isActive ? "text-yellow-300 font-semibold" : ""
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/skills"
//             className={({ isActive }) =>
//               `hover:text-yellow-200 transition ${
//                 isActive ? "text-yellow-300 font-semibold" : ""
//               }`
//             }
//           >
//             Skills
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               `hover:text-yellow-200 transition ${
//                 isActive ? "text-yellow-300 font-semibold" : ""
//               }`
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `hover:text-yellow-200 transition ${
//                 isActive ? "text-yellow-300 font-semibold" : ""
//               }`
//             }
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `relative transition hover:text-yellow-200 
     after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
     after:bg-yellow-300 after:transition-all after:duration-300 
     hover:after:w-full 
     ${isActive ? "text-yellow-300 font-semibold after:w-full" : ""}`;

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/skills" className={linkClasses}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={toggleMenu} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/skills" onClick={toggleMenu} className={linkClasses}>
            Skills
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu} className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={linkClasses}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
