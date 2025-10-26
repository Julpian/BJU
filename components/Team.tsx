import Image from "next/image";

export default function Team() {
  return (
    <section id="client" className="w-full bg-[#F2F4F0] py-10 md:py-20">
      {/* Judul */}
      <div className="text-black font-bold flex flex-col justify-center items-center text-2xl md:text-3xl mb-8">
        <h2 className="text-4xl md:text-5xl">Our Client</h2>
      </div>

      {/* Area utama */}
      <div className="relative w-full min-h-[600px] md:h-[900px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/klien.png"
          alt="Klien Background"
          fill
          sizes="100vw"
          className="object-cover md:object-cover object-center"
          priority
        />

        {/* Masking dua warna solid */}
        <div className="absolute inset-0 flex flex-col">
          {/* Bagian Operator */}
          <div className="flex-1 bg-[#38A2A4]/50 flex flex-col items-center pt-8 md:pt-10 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 w-full text-center md:text-left px-4 md:px-20">
              Operator
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-10 gap-y-6 md:gap-10 md:px-20">
              <Image src="/xl.png" alt="XL Axiata" width={1000} height={1000} className="md:w-[250px] w-28 h-auto" />
              <Image src="/smartfren.png" alt="Smartfren" width={1000} height={1000} className="md:w-[250px] w-28 h-auto" />
              <Image src="/telkomsel.png" alt="Telkomsel" width={1000} height={1000} className="md:w-[250px] w-28 h-auto" />
              <Image src="/indosat.png" alt="Indosat" width={1000} height={1000} className="md:w-[250px] w-28 h-auto" />
              <Image src="/tri.png" alt="3 Indonesia" width={1000} height={1000} className="md:w-[250px] w-28 h-auto" />
            </div>
          </div>

          {/* Bagian Equipment Vendor */}
          <div className="flex-1 flex flex-col items-center pt-8 md:pt-10 text-black bg-white/70">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 w-full text-center md:text-left px-4 md:px-20">
              Equipment Vendor
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-10 gap-y-6 md:gap-10 md:px-20">
              <Image src="/nec.png" alt="NEC" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/zte.png" alt="ZTE" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/bach.png" alt="Bach" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/ericsson.png" alt="Ericsson" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/huawei.png" alt="Huawei" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/nokia.png" alt="Nokia" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/kopindosat.png" alt="Kopindosat" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/erabangun.png" alt="Erabangun" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/protelindo.png" alt="Protelindo" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/stp.png" alt="STP" width={1000} height={1000} className="md:w-[150px] w-20" />
              <Image src="/bs.png" alt="Berlian Sakti" width={1000} height={1000} className="md:w-[150px] w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
