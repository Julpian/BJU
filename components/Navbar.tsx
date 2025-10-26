"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-[#D9D9D9] shadow-md overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-auto h-10"
          />
        </div>

        {/* Navigation Links - desktop only */}
        <ul className="hidden md:flex space-x-1 md:space-x-5 text-black">
          <li>
            <a
              href="#hero"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm border-b-2 border-transparent hover:border-[#E63946] p-3 transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm border-b-2 border-transparent hover:border-[#E63946] p-3 transition-all"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm border-b-2 border-transparent hover:border-[#E63946] p-3 transition-all"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#why-us"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm border-b-2 border-transparent hover:border-[#E63946] p-3 transition-all"
            >
              Superiority
            </a>
          </li>
          <li>
            <a
              href="#client"
              className="hover:text-[#E63946] duration-75 md:text-md text-sm border-b-2 border-transparent hover:border-[#E63946] p-3 transition-all"
            >
              Our Client
            </a>
          </li>
        </ul>

        {/* Tombol Hubungi - desktop only */}
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

      {/* Menu dropdown - mobile only */}
      <div
        className={`md:hidden bg-[#D9D9D9] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 text-black">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>
              Superiority
            </a>
          </li>
          <li>
            <a href="#client" onClick={() => setMenuOpen(false)}>
              Our Client
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
