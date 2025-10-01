// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

// Ikon untuk Logo (pastikan Anda punya)
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        // Logika untuk menyembunyikan Navbar saat scroll ke bawah (setelah 150px)
        if (window.scrollY > lastScrollY && window.scrollY > 150) {
            setIsVisible(false);
        } else {
            setIsVisible(true); // Tampilkan saat scroll ke atas
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // Styling Navbar: Putih transparan, shadow, auto-hide
    const navbarClasses = `
        bg-white/95 backdrop-blur-sm 
        text-gray-800 p-4 fixed w-full top-0 z-50 
        shadow-xl border-b-2 border-blue-600/20
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `;

    // Data Link Menu (dengan urutan dan ID yang benar)
    const navItems = [
        { label: 'Tentang', id: 'about'},
        { label: 'Keahlian', id: 'skills'},
        { label: 'Proyek', id: 'projects'},
        { label: 'kontak', id: 'contact'},
    ];

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto flex justify-between items-center max-w-5xl">
                
                {/* Logo Reza.Dev */}
                <h1 className="text-2xl font-extrabold tracking-widest uppercase">
                    <a href="#hero" className="text-gray-900 hover:text-gray-600 transition duration-300 flex items-center">
                        <CodeIcon />
                        RezaAditya
                    </a>
                </h1>
                
                {/* Menu Items */}
                <ul className="hidden md:flex space-x-7 items-center pl-8 list-none">
                  {/* ^^^^^^^^^ <-- PASTIKAN INI ADA */}
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a 
                                href={`#${item.id}`} 
                                className="text-base font- tracking-wide transition duration-300 
                                           hover:text-gray-600 relative group"
                            >
                                {/* Nomor urut aksen biru */}
                                <span className="text-gray-600 font-mono mr-1">{item.num}</span>
                                {item.label}
                                
                                {/* Efek garis bawah saat hover */}
                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-600 
                                                transform scale-x-0 group-hover:scale-x-100 transition-transform 
                                                duration-300 origin-left">
                                </span>
                            </a>
                        </li>
                    ))}
                    
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;