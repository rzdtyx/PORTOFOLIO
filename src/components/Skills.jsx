// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
// Menggunakan ikon dari Feather Icons
import { Code, GitBranch, Zap, ChevronRight } from "react-feather";

// ====================================================================
// --- DATA KEAHLIAN ---
// ====================================================================
const skillCategories = [
  {
    title: "Keahlian Teknis (Hard Skills)",
    subtitle:
      "Teknologi inti dan tools yang saya gunakan untuk membangun aplikasi full-stack.",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    skills: [
      "React JS / Next.js",
      "JavaScript",
      "Tailwind CSS / SCSS",
      "Github",
      "MySQL",
      "Python",
      "Java",
      "HTML5",
      "PHP",
      "Laravel",
    ],
  },
  {
    title: "Metodologi & Alat Kerja",
    subtitle:
      "Cara kerja, manajemen versi, dan lingkungan pengembangan modern (DevOps).",
    icon: GitBranch,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    skills: [
      "Git & GitHub",
      "Deployment (Vercel/Netlify)",
      "Agile/Scrum",
      "Testing",
    ],
  },
  {
    title: "Keahlian Lunak (Soft Skills)",
    subtitle:
      "Kemampuan non-teknis yang mendukung kolaborasi dan pemecahan masalah.",
    icon: Zap,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    skills: [
      "Pemecahan Masalah",
      "Komunikasi Efektif",
      "Kerja Tim",
      "Pembelajaran Cepat",
      "Manajemen Waktu",
    ],
  },
];

// Varian untuk Container (Grid)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Varian untuk setiap Card
const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    // *****************************************************************
    // Perubahan ID: Menggunakan id="skills" agar sesuai dengan Navbar
    // *****************************************************************
    <motion.section
      id="skills"
      className="py-24 md:py-36 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      // Viewport amount diubah menjadi 0.1 agar animasi lebih cepat muncul
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-gray-900">
          Keahlian <span className="text-blue-600">Inti</span>
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-xl mx-auto">
          Saya fokus pada solusi modern dengan kode yang bersih dan praktik
          terbaik (*best practices*) di industri.
        </p>

        {/* Grid Tiga Kartu */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          // Menggunakan containerVariants lagi untuk menganimasikan grid container
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Styling Modern: Bayangan halus, border tipis, efek hover elegan
              className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden group transition duration-500 hover:shadow-2xl hover:border-blue-500"
            >
              {/* HEADER ICON & TITLE */}
              <div
                className={`p-6 ${category.bgColor} border-b border-gray-200`}
              >
                <category.icon size={36} className={`${category.color} mb-3`} />
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {category.subtitle}
                </p>
              </div>

              {/* KONTEN (DAFTAR SKILL) */}
              <div className="p-6">
                {/* Daftar Keahlian */}
                <ul className="space-y-3 text-left">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-start text-base text-gray-700 font-medium group-hover:text-blue-800 transition"
                    >
                      {/* Ikon panah dengan warna kategori */}
                      <ChevronRight
                        size={18}
                        className={`mr-2 flex-shrink-0 ${category.color} mt-0.5`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
