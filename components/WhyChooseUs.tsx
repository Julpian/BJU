"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function WhyChooseUs() {
  const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle swipe gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      // Geser kiri → next
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        // Geser kanan → previous
        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 bg-[#F2F4F0] text-black w-full overflow-x-hidden"
    >
      {/* SLIDER */}
      <div
        className="relative w-full h-70 md:h-[445px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-70 md:h-[445px] relative"
            >
              <Image
                src={src}
                alt={`slide${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Kontainer responsif */}
      <div className="flex flex-col md:flex-row text-black gap-10 md:gap-16 mx-6 md:mx-20 mt-10">
        {/* WHO */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">WHO</h1>
          <h2 className="font-bold text-2xl mb-3">
            PT. Barlintech Jaya Utama (BJU)
          </h2>
          <p className="text-gray-700">
            We are a telecommunication infrastructure company supported by
            experienced certified engineers and technicians. We are committed to
            providing reliable, secure, and client-oriented services across
            nationwide projects.
          </p>
        </div>

        {/* WHY */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">WHY</h1>
          <p className="text-gray-700">
            We understand the importance of quality, timeliness, and workplace
            safety in every project. With extensive experience and a
            professional team, we ensure that every task is completed to the
            highest standards without compromise. Client satisfaction and trust
            are our top priorities in every step we take.
          </p>
        </div>

        {/* HOW */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">HOW</h1>
          <p className="text-gray-700">
            We offer comprehensive solutions from the design and planning stages
            to the installation and maintenance of telecommunication
            infrastructure. With a client-oriented approach, we maintain open
            and flexible communication to ensure that the final results are
            accurate and tailored to the specific needs of each project.
          </p>
        </div>
      </div>
    </section>
  );
}
