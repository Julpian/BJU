// app/components/Navbar.tsx

import React from 'react';
// Kita akan menggunakan next/link untuk navigasi internal nanti,
// tapi untuk link anchor (#) di halaman yang sama, <a> tag sudah cukup.

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">
          <a href="#">BJU</a> 
        </div>

        {/* Navigation Links */}
        {/* 'hidden md:flex' artinya: tersembunyi di layar kecil, tampil sebagai flex di layar medium ke atas */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang Kami</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors">Layanan</a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Mengapa Kami</a>
          </li>
          <li>
            <a href="#team" className="hover:text-blue-600 transition-colors">Tim</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Kontak</a>
          </li>
        </ul>

        {/* Tombol Mobile (Untuk nanti) */}
        <div className="md:hidden">
          {/* Anda bisa menambahkan ikon hamburger menu di sini */}
          <button>Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;