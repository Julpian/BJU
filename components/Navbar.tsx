"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#D9D9D9] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800 flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-auto h-10"
          />
        </div>

        {/* Navigation Links - tampil di desktop */}
        <ul className="hidden md:flex space-x-1 md:space-x-5 text-black">
          <li>
            <a
              href="#hero"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors"
            >
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
            <a
              href="#why-us"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm hover:border-b-3 p-5 transition-colors"
            >
              Keunggulan
            </a>
          </li>
        </ul>

        {/* Tombol Hubungi - desktop */}
        <div className="hidden md:block md:px-5 px-3 py-1 rounded-[10px] bg-[#38A3A5] text-white">
          <button>Hubungi</button>
        </div>

        {/* Tombol Mobile (ikon hamburger) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-black transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu dropdown untuk mobile */}
      <div
        className={`md:hidden bg-[#D9D9D9] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 text-black">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Beranda
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Layanan
            </a>
          </li>
          <li>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>
              Keunggulan
            </a>
          </li>
          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2 bg-[#38A3A5] text-white rounded-[10px]"
            >
              Hubungi
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
