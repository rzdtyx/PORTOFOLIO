// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      // Latar belakang terang
      className="py-8 bg-white border-t border-gray-200 text-gray-600 text-center text-sm"
    >
      <div className="container mx-auto px-4">
        <p className="mb-1 text-gray-700">
          Dibuat menggunakan React dan Tailwind CSS
        </p>
        <p>
          &copy; {currentYear} Muhammad Reza Aditya Heri
        </p>
      </div>
    </footer>
  );
};

export default Footer;