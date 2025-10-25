import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="w-full bg-[#F2F4F0] py-20">
      {/* Judul */}
      <div className="text-black font-bold flex flex-col justify-center items-center text-3xl mb-10">
        <h2 className="text-5xl">Our Client</h2>
      </div>

      {/* Area utama */}
      <div className="relative w-full h-[900px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/klien.png"
          alt="Klien Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Masking dua warna solid */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-[#38A2A4]/50 flex flex-col items-center pt-10 text-white">
            {/* Bagian Operator */}
            <h3 className="text-3xl font-semibold mb-6 w-full px-45">Operator</h3>
            <div className="flex flex-wrap justify-evenly items-center gap-10 px-30">
              <Image src="/xl.png" alt="XL Axiata" width={160} height={60} />
              <Image src="/smartfren.png" alt="Smartfren" width={160} height={60} />
              <Image src="/telkomsel.png" alt="Telkomsel" width={160} height={60} />
              <Image src="/indosat.png" alt="Indosat" width={160} height={60} />
              <Image src="/tri.png" alt="3 Indonesia" width={160} height={60} />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center pt-10 text-black">
            {/* Bagian Equipment Vendor */}
            <h3 className="text-3xl font-semibold mb-6 w-full px-45">Equipment Vendor</h3>
            <div className="flex flex-wrap justify-between items-center gap-10 px-50">
              <Image src="/nec.png" alt="NEC" width={110} height={60} />
              <Image src="/zte.png" alt="ZTE" width={110} height={60} />
              <Image src="/bach.png" alt="Bach" width={110} height={60} />
              <Image src="/ericsson.png" alt="Ericsson" width={110} height={60} />
              <Image src="/huawei.png" alt="Huawei" width={110} height={60} />
              <Image src="/nokia.png" alt="Nokia" width={110} height={60} />
              <Image src="/kopindosat.png" alt="Kopindosat" width={110} height={60} />
              <Image src="/erabangun.png" alt="Erabangun" width={110} height={60} />
              <Image src="/protelindo.png" alt="Protelindo" width={110} height={60} />
              <Image src="/stp.png" alt="STP" width={110} height={60} />
              <Image src="/bs.png" alt="Berlian Sakti" width={110} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
