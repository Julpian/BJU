// app/components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row bg-[#F2F4F0] w-full font-poppins items-center md:h-full px-15 py-10 md:py-20 mt-0 md:mt-0 "
    >
      {/* Bagian Kiri (teks) */}
      <div className="w-full md:w-6/10 text-black md:pr-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight">
          Superior and
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight">
          Resilient Digital
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide leading-tight">
          Infrastructure
        </h1>


        <h2 className="pt-5 md:pt-10 text-base sm:text-lg md:text-xl text-gray-700">
          We provide integrated telecommunication solutions from design and installation to the maintenance of your network.
        </h2>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-[#38A3A5] hover:bg-[#2e888a] rounded-[10px] px-5 py-2 text-white font-medium transition">
            About Us
          </button>
          <button className="bg-[#38A3A5] hover:bg-[#2e888a] rounded-[10px] px-5 py-2 text-white font-medium transition">
            Services
          </button>
        </div>
      </div>

      {/* Bagian Kanan (gambar) */}
      <div className="w-full md:w-4/10 flex justify-end mb-10 md:mb-0 ">
        <Image
          src="/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-72 md:w-auto h-screen object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
