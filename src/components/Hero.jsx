// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/reza_aditya_heri.jpg'; 
// User icon tidak lagi diperlukan jika foto sudah ada
// import { User } from 'react-feather'; 

const Hero = () => {
    // Varian untuk seluruh container
    const containerVariants = { 
        hidden: { opacity: 0 }, 
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.1, 
                delayChildren: 0.2 
            } 
        } 
    };
    
    // Varian untuk setiap elemen teks/tombol
    const itemVariants = { 
        hidden: { opacity: 0, y: 30 }, 
        visible: { opacity: 1, y: 0 } 
    };

    // VARIAN KHUSUS UNTUK FOTO
    const photoVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
        hover: { y: -5, scale: 1.02, transition: { duration: 0.3 } } 
    };

    return (
        <section id="hero" 
            className="bg-white text-gray-800 min-h-screen flex items-center justify-center pt-32 pb-16 md:py-24"
        >
            <div className="container mx-auto p-4 max-w-6xl">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    
                    {/* KOLOM KIRI: TEKS UTAMA */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <motion.h1 className="text-xl md:text-2xl font-light mb-2 text-gray-900" variants={itemVariants}>
                            Hello i am.
                        </motion.h1>

                        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-none text-gray-900" variants={itemVariants}>
                            Muhammad Reza <span className="text-red-600">Aditya Heri</span>.
                        </motion.h1>
                        
                        <motion.h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-500" variants={itemVariants}>
                            Mahasiswa <span className="text-gray-900 font-medium">Software Engineering</span>.
                        </motion.h2>
                        
                        <motion.p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-600 lg:mx-0 mx-auto" variants={itemVariants}>
                            Berfokus pada kinerja, kode yang bersih, dan pengalaman pengguna yang mulus menggunakan React dan teknologi modern lainnya.
                        </motion.p>
                        
                        <motion.a 
                            href="#projects" 
                            className="inline-block bg-blue-600 border-2 border-blue-600 text-white 
                                       hover:bg-blue-700 hover:border-blue-700 font-bold py-3 px-8 
                                       rounded-lg transition duration-300 text-lg tracking-wider shadow-lg"
                            variants={itemVariants}
                        >
                            Lihat Proyek
                        </motion.a>
                    </div>

                    {/* KOLOM KANAN: FOTO PROFIL */}
                    <motion.div 
                        className="lg:col-span-5 flex justify-center items-center p-6 order-first lg:order-last"
                        variants={photoVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover" 
                    >
                        {/* Container lingkaran untuk foto */}
                        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.02]">
                            {/* ^^^^^^^^^^^ border-4 border-blue-600/50 TELAH DIHAPUS DARI BARIS INI */}
                            <img 
                                src={ProfilePhoto} 
                                alt="Foto Profil Muhammad Reza Aditya Heri" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" 
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;