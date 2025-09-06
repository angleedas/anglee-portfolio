// This is Navbar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navLinkClass =
//     "px-4 py-2 rounded-md font-medium transition duration-200";

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
//         <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>

//         <div className="flex space-x-4">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               isActive
//                 ? `${navLinkClass} bg-blue-600 text-white`
//                 : `${navLinkClass} text-gray-700 hover:bg-blue-50`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/skills"
//             className={({ isActive }) =>
//               isActive
//                 ? `${navLinkClass} bg-blue-600 text-white`
//                 : `${navLinkClass} text-gray-700 hover:bg-blue-50`
//             }
//           >
//             Skills
//           </NavLink>

//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               isActive
//                 ? `${navLinkClass} bg-blue-600 text-white`
//                 : `${navLinkClass} text-gray-700 hover:bg-blue-50`
//             }
//           >
//             Projects
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? `${navLinkClass} bg-blue-600 text-white`
//                 : `${navLinkClass} text-gray-700 hover:bg-blue-50`
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
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-200 transition ${
                isActive ? "text-yellow-300 font-semibold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
