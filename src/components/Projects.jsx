// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const myProjects = [
  { title: 'Project X', description: 'Aplikasi web e-commerce modern menggunakan React dan Redux.', tech: ['React', 'Redux', 'Tailwind'], link: '#', github: '#' },
  { title: 'Project Y', description: 'Platform blog dengan manajemen konten berbasis Node.js dan MongoDB.', tech: ['Node.js', 'Express', 'MongoDB'], link: '#', github: '#' },
];

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  return (
    <motion.section 
      id="projects" 
      // Latar belakang terang
      className="py-20 bg-white text-gray-800 border-t border-gray-200"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          <span className="text-blue-600 mr-2"></span> Proyek Pilihan
        </h2>
        
        <div className="grid grid-cols-1 gap-10">
          {myProjects.map((project, index) => (
            <div 
              key={index} 
              // Kartu Light Mode
              className="p-6 border-2 border-gray-300 rounded-lg transition duration-300 bg-gray-50 hover:border-blue-600 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    // Badge Light Mode
                    className="text-sm font-mono text-blue-600 bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-5 mt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline transition duration-300 font-semibold"
                >
                  Demo &rarr;
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <a 
                href="https://github.com/usernameanda" 
                target="_blank" 
                rel="noopener noreferrer" 
                // Tombol Light Mode
                className="inline-block text-lg border-2 border-gray-400 hover:border-blue-600 text-gray-600 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
                Lihat Semua Proyek
            </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;