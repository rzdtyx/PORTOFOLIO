// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Globe, X } from 'react-feather'; // X untuk ikon tutup
import projectYMainImage from '../assets/11111.jpg';
import projectYMainImage2 from '../assets/3434.jpg';
import projectXmainimage1 from '../assets/33333.jpg';
import projectXmainimage2 from '../assets/55555.jpg';
import projectvideo from '../assets/rere.png';
import xxx from '../assets/bchat.png';
import xxxx from '../assets/bchat2.png';
import xxxxx from '../assets/bchat3.png';
import { video } from 'framer-motion/client';



//
// ====================================================================
// --- DATA PROYEK (Menggunakan satu gambar utama untuk kartu) ---
// ====================================================================
const myProjects = [
  { 
    title: 'PARKING SPACE DETECTION AI', 
    description: 'memanfaatkan algoritma canggih untuk menganalisis input video/gambar (dari kamera atau sensor). AI ini dilatih untuk mengenali batas ruang dan keberadaan kendaraan, memberikan data real-time mengenai ketersediaan parkir dengan akurasi tinggi.', 
    // Menggunakan array untuk gambar agar bisa di-lightbox (walaupun hanya satu)
    images: [
      projectvideo,
      projectYMainImage2,
      projectYMainImage, 
    ],
    // tech properti dihapus pada langkah sebelumnya, di sini kita biarkan hilang (atau kosong)
    link: '#', 
    github: '#' 
  },
  { 
    title: 'TRANSKITA ROUTE', 
    description: ' layanan shuttle travel antar kota yang menghubungkan rute utama di Jawa Barat dan Banten, seperti Bandung, Bekasi, dan Tangerang.', 
    images: [
      projectXmainimage2,
      projectXmainimage1,
    ], 
    link: '#', 
    github: '#' 
  },
  { 
    title: 'B-CHAT', 
    description: 'B-Chat adalah aplikasi social networking atau mencari jodoh modern yang eksklusif untuk mahasiswa Binus University.', 
    images: [
      xxx,
      xxxx,
      xxxxx,
    ],
    link: '#', 
    github: '#' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

// ====================================================================
// --- KOMPONEN MODAL (LIGHTBOX) ---
// ====================================================================
const LightboxModal = ({ images, currentImageIndex, onClose, onNavigate }) => {
  if (currentImageIndex === null || !images) return null;
  const currentImage = images[currentImageIndex];
  const totalImages = images.length;

  return (

  
    // Backdrop
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
      onClick={onClose} // Tutup modal saat klik di luar gambar
    >
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-4xl max-h-full"
        onClick={e => e.stopPropagation()} // Mencegah penutupan saat klik gambar
      >
        <img 
          src={currentImage} 
          alt="Proyek Screenshot" 
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Tombol Tutup */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition"
          aria-label="Tutup"
        >
          <X size={24} />
        </button>
        
        {/* Navigasi (jika lebih dari 1 gambar) */}
        {totalImages > 1 && (
          <>
            <button 
              onClick={() => onNavigate(-1)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition"
            >
              &#10094;
            </button>
            <button 
              onClick={() => onNavigate(1)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 transition"
            >
              &#10095;
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white font-semibold">
              {currentImageIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </motion.div>
      
      {/* Catatan: Jika Anda ingin menghapus border dan padding atas, Anda juga harus menghapus div yang menampung tombol Navigasi di LightboxModal, tapi karena permintaan hanya pada kartu proyek, bagian ini tidak diubah. */}
    </div>
  );
};

// ====================================================================
// --- KOMPONEN UTAMA PROJECTS ---
// ====================================================================
const Projects = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    currentIndex: null,
  });

  const openModal = (images, index = 0) => {
    setModalState({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; // Kunci scroll di body
  };

  const closeModal = () => {
    setModalState({ isOpen: false, images: [], currentIndex: null });
    document.body.style.overflow = 'auto'; // Kembalikan scroll
  };

  const handleNavigate = (direction) => {
    const total = modalState.images.length;
    let newIndex = (modalState.currentIndex + direction) % total;
    if (newIndex < 0) newIndex = total - 1;
    
    setModalState(prevState => ({ ...prevState, currentIndex: newIndex }));
  };

  return (
    <motion.section 
      id="projects" 
      className="py-20 md:py-32 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900">
          Proyek <span className="text-blue-600">Terbaru</span>
        </h2>
        
        {/* Grid Kartu Proyek */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {myProjects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-gray-50 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-500 group"
            >
              {/* GAMBAR YANG BISA DIKLIK */}
              <div 
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => openModal(project.images)}
              >
                <img 
                  src={project.images[0]} // Tampilkan gambar pertama sebagai preview
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </div>

              {/* Konten Proyek */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                
                {/* Tag Teknologi */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Tautan Proyek - BAGIAN INI SUDAH DIHAPUS */}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tombol Semua Proyek */}
        <div className="text-center mt-20">
          <a 
            href="https://github.com/rzdtyx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-lg border-2 border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-10 rounded-full transition duration-500 shadow-lg"
          >
            Lihat Semua di GitHub
          </a>
        </div>
      </div>
      
      {/* Panggil Modal Lightbox */}
      {modalState.isOpen && (
        <LightboxModal
          images={modalState.images}
          currentImageIndex={modalState.currentIndex}
          onClose={closeModal}
          onNavigate={handleNavigate}
        />
      )}

    </motion.section>
  );
};

export default Projects;