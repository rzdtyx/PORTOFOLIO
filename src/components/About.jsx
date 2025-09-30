// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/reza_aditya_heri.jpg'; 

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="about" 
      // Latar belakang terang
      className="py-20 bg-gray-100 text-gray-800 border-t border-gray-200"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          <span className="text-blue-600 mr-2"></span> Tentang Saya
        </h2>
        
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          
          <div className="w-full md:w-2/3 text-left space-y-4 text-lg text-gray-600">
            <p>
             Halo! Saya Muhammad Reza Aditya Heri, dan saat ini saya adalah Mahasiswa Software Engineering yang sedang menempuh Semester 6 dengan penuh ambisi.

Fokus saya di kampus dan proyek pribadi sangat jelas: menciptakan solusi web yang smooth dan terstruktur. Saya tidak hanya mengerjakan tugas, tetapi saya juga obsesif terhadap kinerja, kebersihan kode, dan bagaimana pengalaman pengguna user experience terasa mulus dan bukan hanya sekadar berfungsi.
            </p>
            <p>
              dunia pengembangan frontend, khususnya ekosistem React, adalah Tempat favorit saya. Saya senang sekali memecah masalah kompleks menjadi komponen-komponen yang rapi dan modular. Tools seperti Tailwind CSS adalah senjata andalan saya untuk mencapai styling yang cepat dan desain yang responsif.

Saya percaya bahwa tahap kuliah ini adalah waktu terbaik untuk mengimplementasikan teori ke dalam praktik nyata. Oleh karena itu, saya selalu terbuka untuk proyek freelance, bootcamp, atau kolaborasi yang menantang yang dapat memperkaya skill set saya sebagai calon Software Engineer.
            </p>
            <p>
              Saat ini saya mencari peran yang menantang di mana saya dapat terus belajar dan berkontribusi pada proyek-proyek yang berdampak.
            </p>
          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <img 
              // 2. GANTI src DENGAN VARIABEL IMPORT
              src={ProfilePhoto} 
              alt="Foto Profil Muhammad Reza Aditya Heri" 
              className="rounded-lg w-64 h-64 object-cover shadow-xl border-2 border-blue-600 transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;