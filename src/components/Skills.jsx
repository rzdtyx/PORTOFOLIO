// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion'; 

// Komponen Progress Bar (sudah dibersihkan dari dark:)
const SkillProgressBar = ({ name, level, delay }) => {
  
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: `${level}%`, 
      opacity: 1,
      transition: { duration: 1.2, delay: delay, ease: "easeInOut" } 
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-gray-800">{name}</span>
        <span className="text-sm font-semibold text-blue-600">{level}%</span>
      </div>
      
      {/* Container Bar */}
      <div className="w-full bg-gray-300 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-blue-600" 
          variants={barVariants} 
        >
        </motion.div>
      </div>
    </div>
  );
};


const Skills = () => {
  const mySkills = [
    { name: 'React JS / Next.js', level: 90, type: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 95, type: 'Frontend' },
    { name: 'Tailwind CSS / SCSS', level: 85, type: 'Frontend' },
    { name: 'State Management (Redux/Context)', level: 80, type: 'Frontend' },
    { name: 'Node.js / Express JS', level: 75, type: 'Backend' },
    { name: 'MongoDB / PostgreSQL', level: 70, type: 'Backend' },
    { name: 'Git & GitHub', level: 90, type: 'Tools' },
    { name: 'RESTful APIs', level: 85, type: 'Backend' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } }
  };
  
  const frontendSkills = mySkills.filter(s => s.type === 'Frontend');
  const backendSkills = mySkills.filter(s => s.type === 'Backend');
  const toolSkills = mySkills.filter(s => s.type === 'Tools');

  return (
    <motion.section 
      id="skills" 
      // Latar belakang terang
      className="py-20 bg-gray-100 text-gray-800 border-t border-gray-200"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
          <span className="text-blue-600 mr-2"></span> Kealihan
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kolom 1: Frontend & Design */}
            <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b border-gray-300 pb-2">
                    Frontend & Desain
                </h3>
                {frontendSkills.map((skill, index) => (
                    <SkillProgressBar 
                        key={index} 
                        name={skill.name} 
                        level={skill.level} 
                        delay={index * 0.1} 
                    />
                ))}
            </div>

            {/* Kolom 2: Backend & Database */}
            <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 border-b border-gray-300 pb-2">
                    Backend & Tools
                </h3>
                {[...backendSkills, ...toolSkills].map((skill, index) => (
                    <SkillProgressBar 
                        key={frontendSkills.length + index} 
                        name={skill.name} 
                        level={skill.level} 
                        delay={frontendSkills.length * 0.1 + index * 0.1} 
                    />
                ))}
            </div>
            
        </div>
        
        <p className="text-center mt-12 text-gray-600 text-sm">
            Tingkat keahlian didasarkan pada pengalaman pribadi dan frekuensi penggunaan dalam proyek.
        </p>
      </div>
    </motion.section>
  );
};

export default Skills;