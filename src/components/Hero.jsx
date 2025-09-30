// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// ... (Kode variants)

const Hero = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="hero" 
      // Latar belakang putih
      className="bg-white text-gray-800 min-h-screen flex items-center justify-center pt-24 pb-12 md:py-24"
    >
      <motion.div 
        className="container mx-auto p-4 text-left max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.h1 className="text-2xl md:text-2xl font-light mb-2 text-gray-900" variants={itemVariants}>
          Hello Saya.
        </motion.h1>

        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-gray-900" variants={itemVariants}>
          Muhammad Reza Aditya Heri.
        </motion.h1>
        
        <motion.h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-500" variants={itemVariants}>
          Mahasiswa  <span className="text-gray-900 font-medium">Software engineering</span>.
        </motion.h2>
        
        <motion.p className="text-lg md:text-xl max-w-3xl mb-12 text-gray-600" variants={itemVariants}>
          Berfokus pada kinerja, kode yang bersih, dan pengalaman pengguna yang mulus menggunakan React dan teknologi modern lainnya.
        </motion.p>
        
        <motion.a 
          href="#projects" 
          // Tombol Light Mode
          className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 
                     hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg tracking-wider shadow-md"
          variants={itemVariants}
        >
          Lihat Proyek Pilihan
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;