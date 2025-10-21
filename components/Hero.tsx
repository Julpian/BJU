// app/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      // Kita set gambar background dari folder public/
      // Pastikan nama file 'hero-bg.jpg' sudah sesuai
      className="relative w-full min-h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center"
    >
      {/* Overlay Gelap */}
      {/* Ini penting agar teks putih lebih mudah dibaca di atas gambar */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten Teks (z-10 agar berada di atas overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        
        {/* Headline dari Visi */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Menjadi perusahaan yang inovatif dan handal dibidangnya dan tepercaya di Indonesia [cite: 16]
        </h1>

        {/* Sub-headline dari Visi & Misi */}
        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          Memberdayakan konektivitas dan mendorong transformasi digital [cite: 16] untuk memberikan layanan berkualitas tinggi yang memenuhi kebutuhan klien kami. [cite: 18]
        </p>
        
        {/* Tombol Call to Action (CTA) */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Lihat Layanan Kami
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Hubungi Kami
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;