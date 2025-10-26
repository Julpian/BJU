import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-[#F2F4F0] text-black w-full">
      <div>
        {/* <Image
        src="/s1.png"
        alt="slide1"
        width={10000}
        height={10000}
        className="h-[445px] w-full object-cover" 
        /> */}
      </div>

      {/* Kontainer responsif */}
      <div className="flex flex-col md:flex-row text-black gap-10 md:gap-16 mx-6 md:mx-20">
        {/* WHO */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">WHO</h1>
          <h2 className="font-bold text-2xl mb-3">
            PT. Barlintech Jaya Utama (BJU)
          </h2>
          <p>
            Kami adalah perusahaan infrastruktur telekomunikasi yang didukung
            oleh insinyur dan teknisi bersertifikat berpengalaman. Kami
            berkomitmen memberikan layanan yang andal, aman, dan sesuai
            kebutuhan klien di seluruh proyek berskala nasional.
          </p>
        </div>

        {/* WHY */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">WHY</h1>
          <p>
            Kami memahami pentingnya kualitas, ketepatan waktu, dan keselamatan
            kerja dalam setiap proyek. Dengan pengalaman panjang dan tim
            profesional, kami memastikan setiap pekerjaan diselesaikan dengan
            standar terbaik tanpa kompromi. Kepuasan dan kepercayaan klien
            menjadi prioritas utama dalam setiap langkah yang kami ambil.
          </p>
        </div>

        {/* HOW */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-3xl text-center mb-3">HOW</h1>
          <p>
            Kami menawarkan solusi menyeluruh mulai dari tahap desain dan
            perencanaan, hingga instalasi dan pemeliharaan infrastruktur
            telekomunikasi. Dengan pendekatan berorientasi pada klien, kami
            menjaga komunikasi yang terbuka dan fleksibel agar hasil akhir
            selalu tepat sasaran dan sesuai kebutuhan spesifik proyek.
          </p>
        </div>
      </div>
    </section>
  );
}
