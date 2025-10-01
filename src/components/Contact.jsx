// src/components/Kontak.jsx
import React from 'react'; // Menghapus useState karena form tidak digunakan
import { motion } from 'framer-motion'; 
// Import ikon untuk WhatsApp
import { Mail, Linkedin, GitHub, MapPin, MessageCircle, Send, Phone } from 'react-feather'; 

// *******************************************************************
// GANTI NOMOR TELEPON ANDA DI SINI
// Gunakan format internasional tanpa tanda + atau 00 (Contoh: 6281234567890)
const WHATSAPP_NUMBER = "6287863145621"; // Menggunakan nomor dari screenshot Anda
// Teks default yang akan muncul di WhatsApp
const DEFAULT_MESSAGE = "Halo Muhammad Reza, saya melihat portofolio Anda dan tertarik untuk membahas peluang kerja/kolaborasi. Mohon informasinya mengenai ketersediaan Anda."; 
// *******************************************************************

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const Kontak = () => {
    
    // URL WhatsApp yang mengarahkan ke nomor dan pesan default Anda
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    return (
        <motion.section 
            id="contact" 
            className="py-20 bg-white text-gray-800 border-t border-gray-200"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4 max-w-5xl">

                <h2 className="text-4xl font-extrabold mb-3 text-gray-900">Hubungi Saya</h2>
                <p className="text-lg mb-12 text-gray-600">
                    Tertarik untuk berkolaborasi? Temukan saya di platform berikut atau kirim pesan langsung via WhatsApp.
                </p>

                <div className="flex flex-wrap justify-between gap-12"> 
                    
                    {/* Kolom Informasi Kontak Alternatif (Lebar Penuh di Mobile) */}
                    <motion.div 
                        // Menggunakan flex-1 agar sejajar dengan kolom kanan
                        className="flex-1 min-w-[250px] text-left order-2 lg:order-1" 
                        variants={sectionVariants}
                    >
                        {/* ITEM: EMAIL */}
                        <div className="flex items-center mb-6 gap-3">
                            <Mail size={24} className="text-gray-900" />
                            <div>
                                <div className="text-base font-bold text-gray-900">Email</div>
                                <a href="mailto:muh.rezaaditya@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                    muh.rezaaditya@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* ITEM: LINKEDIN */}
                        <div className="flex items-center mb-6 gap-3">
                            <Linkedin size={24} className="text-gray-900" />
                            <div>
                                <div className="text-base font-bold text-gray-900">LinkedIn</div>
                                <a href="https://www.linkedin.com/in/muhammad-reza-aditya-heri-315518385/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                    /in/muhammad-reza-aditya-heri-315518385/
                                </a>
                            </div>
                        </div>
                        
                        {/* ITEM: GITHUB */}
                        <div className="flex items-center mb-6 gap-3">
                            <Phone size={24} className="text-gray-900" />
                            <div>
                                <div className="text-base font-bold text-gray-900">Telephone</div>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                    +62 878-6314-5621
                                </a>
                            </div>
                        </div>
                        
                        {/* ITEM: LOKASI */}
                        <div className="flex items-center mb-6 gap-3">
                            <MapPin size={24} className="text-gray-900" />
                            <div>
                                <div className="text-base font-bold text-gray-900">Lokasi</div>
                                <span className="text-gray-600">Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* KOLOM KANAN: TOMBOL WHATSAPP (Menggantikan Formulir) */}
                    <motion.div 
                        // Menggunakan flex-2 untuk ruang yang lebih besar
                        className="flex-[2] min-w-[300px] text-left order-1 lg:order-2 bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200"
                        variants={sectionVariants}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                           <MessageCircle size={24} className="text-green-500" /> Kirim Pesan Langsung
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Cara tercepat untuk menghubungi saya adalah melalui **WhatsApp**. Klik tombol di bawah ini untuk memulai percakapan dengan pesan otomatis.
                        </p>

                        {/* TOMBOL WHATSAPP */}
                        <a
                            href={whatsappLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 p-4 mt-4 
                                       bg-green-500 text-white font-bold rounded-lg 
                                       hover:bg-green-600 transition-colors duration-300 shadow-xl"
                        >
                            <Send size={18} /> Hubungi via WhatsApp 
                        </a>
                        
                    </motion.div>
                </div>
            </div>

            {/* FOOTER (Ditambahkan Kembali) */}
        </motion.section>
    );
};

export default Kontak;