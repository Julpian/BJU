import Image from "next/image";

const Layanan = [
  {
    nama: "Manage Operation",
    src: "/manage.png",
    deskripsi: "Mengelola operasional sistem atau proyek telekomunikasi",
  },
  {
    nama: "Radio Network Engineering And Infrastructure",
    src: "/radio.png",
    deskripsi: "Merancang dan membangun jaringan radio",
  },
  {
    nama: "Telecommunication Engineering",
    src: "/tele.png",
    deskripsi: "Teknik dan rekayasa sistem komunikasi",
  },
  {
    nama: "Telco Infrastructure",
    src: "/telco.png",
    deskripsi: "Merancang dan membangun jaringan radio",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F2F4F0] w-full">
      {/* Judul */}
      <div className="text-black font-bold flex flex-col justify-center items-center text-3xl mt-16 gap-5 px-4 sm:px-0">
        <h2 className="text-3xl sm:text-5xl text-center">Layanan Kami</h2>
        <h4 className="text-base sm:text-xl text-center">
          Telecommunication Construction Service
        </h4>
      </div>

      {/* Grid layanan */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-10 place-items-center px-6 sm:mx-40 sm:px-0">
        {Layanan.map((layanan, index) => (
          <div
            key={index}
            className="bg-[#D9D9D980] flex flex-col justify-start gap-3 items-center w-[150px] sm:w-[351px] h-auto sm:h-[225px] rounded-[16px] py-6 sm:py-3 shadow-md"
          >
            <div className="w-full flex justify-center h-16 sm:h-20">
              <Image
                src={layanan.src}
                alt={layanan.nama}
                width={100}
                height={100}
                className="w-auto h-full object-contain"
              />
            </div>
            <h5 className="text-black font-bold text-center text-sm sm:text-xl">
              {layanan.nama}
            </h5>
            <p className="text-black text-center text-xs sm:text-md px-2 sm:px-0">
              {layanan.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
