// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion'; 

const Contact = () => {
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contact" 
      // Latar belakang terang
      className="py-20 bg-gray-100 text-gray-800 border-t border-gray-200"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      <div className="container mx-auto px-4 max-w-2xl text-center">
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <span className="text-blue-600 mr-2"></span> Tertarik Bekerja Sama?
        </h2>
        
        <h3 className="text-5xl font-extrabold mb-8 text-gray-900">
          Let's work together
        </h3>

        <p className="text-lg text-gray-600 mb-12">
          Saya saat ini terbuka untuk peluang kerja baru, baik sebagai freelancer dan karyawan magang. Jika Anda memiliki proyek yang menarik atau hanya ingin menyapa, kotak masuk saya selalu terbuka.
        </p>

        {/* Tombol Kontak Email - Light Mode */}
        <a 
          href="mailto:muh.rezaaditya@gmail.com" 
          className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 
                     hover:bg-blue-600 hover:text-white font-bold py-4 px-10 rounded-lg 
                     transition duration-300 text-xl tracking-wider shadow-lg"
        >
          Kirim Email
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;