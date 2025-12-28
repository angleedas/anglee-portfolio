 import React from "react";

const projects = [
  { 
    type: 'video', 
    src: "/anglee-portfolio/assets/video2.mp4", 
    desc: 'A fun Flappy Bird clone built with HTML, CSS, and JavaScript where players control a bird and navigate through moving pipes.', 
    reverse: false,
    link: "https://github.com/yourusername/dashboard-app" 
  },
  { 
    type: 'video', 
    src: "/anglee-portfolio/assets/video1.mp4", 
    desc: 'A simple calculator built with HTML, CSS, and JavaScript.', 
    reverse: true,
    link: "https://github.com/yourusername/calculator-app"
  },
  { 
    type: 'image', 
    src: "/anglee-portfolio/assets/image1.jpeg", 
    desc: 'A fun Rock, Paper, Scissors game built with HTML, CSS, and JavaScript.', 
    reverse: false,
    link: "https://github.com/yourusername/rps-game"
  },
  { 
    type: 'image', 
    src: "/anglee-portfolio/assets/image2.jpeg", 
    desc: 'A dynamic solar system simulation built with HTML, CSS, and JavaScript.', 
    reverse: true,
    link: "https://github.com/yourusername/solar-system-simulation"
  },
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
          <p className="text-gray-700 text-sm mb-2">{proj.desc}</p>
          {proj.link && (
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
