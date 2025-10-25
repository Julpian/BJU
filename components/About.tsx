"use client";
import Image from "next/image";

export default function About() {
  const team = [
    { name: "Ali Nurul Yakin", img: "/image 1.png" },
    { name: "Eneng Resi F.", img: "/image 2.png" },
    { name: "Wafa Triyanti", img: "/image 3.png" },
    { name: "Sopriyana", img: "/image 4.png" },
  ];

  return (
    <section
      id="about"
      className="bg-[#F2F4F0] flex flex-col items-center justify-center pt-16 pb-0 md:pb-10"
    >
      {/* ===== Bagian Atas - Tentang BJU ===== */}
      <div className="w-full max-w-6xl px-6 sm:px-10 md:px-20 mb-10">
        <div className="flex flex-col md:flex-row md:gap-20 gap-6 items-start">
          {/* Judul */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
              Contact
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 mb-4 md:ml-10">
              BJU
            </h2>
          </div>

          {/* Paragraf */}
          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base md:text-lg">
            Kami adalah perusahaan telekomunikasi yang berkomitmen membangun
            infrastruktur digital Indonesia melalui inovasi dan teknologi
            terkini, guna meningkatkan konektivitas dan kinerja jaringan. Kami
            menjalin kemitraan strategis dengan berbagai pihak, mengedepankan
            integritas, keunggulan, dan kepuasan pelanggan, serta menciptakan
            lingkungan kerja yang dinamis dan inklusif untuk mendorong
            pertumbuhan dan profesionalisme.
          </p>
        </div>
      </div>

      {/* ===== Bagian Tengah - Gambar Background ===== */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden shadow-lg">
        <Image
          src="/about.png"
          alt="Team working"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ===== Bagian Bawah - Tim ===== */}
      <div className="max-w-6xl w-full bg-white shadow-md relative -mt-20 sm:-mt-28 md:-mt-40 rounded-lg p-6 sm:p-8 md:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {team.map((member, index) => (
            <div key={index}>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded overflow-hidden border border-gray-300 shadow-sm">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-medium text-gray-800 text-xs sm:text-sm md:text-base">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
