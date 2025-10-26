// app/components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row bg-[#F2F4F0] w-full font-poppins items-center md:h-full px-6 md:px-20 lg:px-40 py-10 md:py-20 mt-10 md:mt-0"
    >
      {/* Bagian Kiri (teks) */}
      <div className="w-full md:w-6/10 text-black md:pr-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight">
          PT. Barlintech Jaya Utama
        </h1>
        <h2 className="pt-5 md:pt-10 text-base sm:text-lg md:text-xl text-gray-700">
          Kami adalah perusahaan telekomunikasi yang berkomitmen membangun
          infrastruktur digital Indonesia melalui inovasi dan teknologi terkini,
          guna meningkatkan konektivitas dan kinerja jaringan. Kami menjalin
          kemitraan strategis dengan berbagai pihak, mengedepankan integritas,
          keunggulan, dan kepuasan pelanggan, serta menciptakan lingkungan kerja
          yang dinamis dan inklusif untuk mendorong pertumbuhan dan
          profesionalisme.
        </h2>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-[#38A3A5] hover:bg-[#2e888a] rounded-[10px] px-5 py-2 text-white font-medium transition">
            Tentang Kami
          </button>
          <button className="bg-[#38A3A5] hover:bg-[#2e888a] rounded-[10px] px-5 py-2 text-white font-medium transition">
            Layanan
          </button>
        </div>
      </div>

      {/* Bagian Kanan (gambar) */}
      <div className="w-full md:w-4/10 flex justify-center mb-10 md:mb-0">
        <Image
          src="/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-72 sm:w-96 md:w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
