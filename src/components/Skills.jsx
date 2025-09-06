 import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const Skills = () => {
  const [category, setCategory] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    ],
    design: [
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400 text-5xl" /> },
      { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-400 text-5xl" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500 text-5xl" /> },
    ],
    programming: [
      { name: "Python", icon: <FaPython className="text-green-500 text-5xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
    ],
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">My Skills</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setCategory("frontend")}
          className={`px-6 py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105 ${
            category === "frontend"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setCategory("design")}
          className={`px-6 py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105 ${
            category === "design"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border border-purple-600 hover:bg-purple-100"
          }`}
        >
          Design Tools
        </button>
        <button
          onClick={() => setCategory("programming")}
          className={`px-6 py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105 ${
            category === "programming"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border border-green-600 hover:bg-green-100"
          }`}
        >
          Programming
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {skills[category].map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            <div className="mb-3 transition transform hover:scale-125">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
