// app/components/Navbar.tsx

import React from "react";
import Image from "next/image";
// Kita akan menggunakan next/link untuk navigasi internal nanti,
// tapi untuk link anchor (#) di halaman yang sama, <a> tag sudah cukup.

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#D9D9D9] shadow-md ">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">
          <Image 
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-auto h-full"
          />
        </div>

        {/* Navigation Links */}
        {/* 'hidden md:flex' artinya: tersembunyi di layar kecil, tampil sebagai flex di layar medium ke atas */}
        <ul className=" flex space-x-1 md:space-x-5 text-black">
          <li>
            <a href="#hero" className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors">
              Beranda
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors">
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors"
            >
              Layanan
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors">
              Keunggulan
            </a>
          </li>
        </ul>

        {/* Tombol Mobile (Untuk nanti) */}
        <div className=" md:px-5 px-3 py-1 rounded-[10px] bg-[#38A3A5] text-white">
          {/* Anda bisa menambahkan ikon hamburger menu di sini */}
          <button>Hubungi</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
