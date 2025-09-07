// components/Projects.js
import React from "react";
import videoo from "./assets/videoo.mp4";
import video from "./assets/video.mp4";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";

const projects = [
  { type: 'video', src: videoo, desc: 'A fun Flappy Bird clone built with HTML, CSS, and JavaScript where players control a bird and navigate through moving pipes. The game features smooth animations, scoring, and game-over mechanics for an engaging experience.', reverse: false },
  { type: 'video', src: video, desc: 'A simple calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations. It provides a clean interface with responsive design for quick and easy calculations.', reverse: true },
  { type: 'image', src: image1, desc: 'A fun Rock, Paper, Scissors game built with HTML, CSS, and JavaScript where players compete against the computer. The game includes real-time results, score tracking, and an interactive UI.', reverse: false },
  { type: 'image', src: image2, desc: 'A dynamic solar system simulation built with HTML, CSS, and JavaScript, featuring orbiting planets and stars. This project visually demonstrates planetary motion with smooth animations for an engaging space experience.', reverse: true },
];

const Projects = () => (
  <section id="projects" className="px-4 py-12 max-w-6xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    {projects.map((proj, idx) => (
      <div key={idx} className={`flex flex-col md:flex-row ${proj.reverse ? 'md:flex-row-reverse' : ''} items-center mb-10`}>
        <div className="md:w-1/2">
          {proj.type === 'video' ? (
            <video controls className="w-full rounded-lg shadow">
              <source src={proj.src} type="video/mp4" />
            </video>
          ) : (
            <img src={proj.src} alt={`Project ${idx + 1}`} className="w-full rounded-lg shadow" />
          )}
        </div>
        <div className="md:w-1/2 md:px-6 mt-4 md:mt-0">
          <p className="text-gray-700 text-sm">{proj.desc}</p>
        </div>
      </div>
    ))}
  </section>
);

export default Projects;

