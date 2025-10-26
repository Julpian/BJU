import Image from "next/image";

const Layanan = [
  {
    nama: "Manage Operation",
    src: "/manage.png",
    deskripsi: "Managing the operations of telecommunication systems or projects.",
  },
  {
    nama: "Radio Network Engineering And Infrastructure",
    src: "/radio.png",
    deskripsi: "Designing and building radio networks.",
  },
  {
    nama: "Telecommunication Engineering",
    src: "/tele.png",
    deskripsi: "Communication systems engineering and design.",
  },
  {
    nama: "Telco Infrastructure",
    src: "/telco.png",
    deskripsi: "Designing and constructing radio networks.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F2F4F0] w-full">
      {/* Judul */}
      <div className="text-black font-bold flex flex-col justify-center items-center text-3xl mt-16 gap-5 px-4 sm:px-0">
        <h2 className="text-3xl sm:text-5xl text-center">Our Services</h2>
        <h4 className="text-base sm:text-xl text-center">
          Telecommunication Construction Service
        </h4>
      </div>

      {/* Grid layanan */}
      <div className="grid grid-cols-2 gap-4 sm:gap-10 mt-10 place-items-center px-4 sm:px-0 sm:mx-80">
        {Layanan.map((layanan, index) => (
          <div
            key={index}
            className="bg-[#D9D9D980] flex flex-col justify-start gap-3 items-center 
                       w-[140px] sm:w-[351px] h-auto sm:h-[225px] rounded-[16px] 
                       py-4 sm:py-3 shadow-md"
          >
            <div className="w-full flex justify-center h-14 sm:h-20">
              <Image
                src={layanan.src}
                alt={layanan.nama}
                width={100}
                height={100}
                className="w-auto h-full object-contain"
              />
            </div>
            <h5 className="text-black font-bold text-center text-xs sm:text-2xl">
              {layanan.nama}
            </h5>
            <p className="text-center text-[10px] sm:text-lg text-gray-700 px-2 sm:px-0">
              {layanan.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
