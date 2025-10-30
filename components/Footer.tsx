import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2F4F0] border-t border-black/35 text-gray-800">
      {/* Bagian atas */}
      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo & alamat */}
        <div className="flex flex-col gap-3 text-[#00000080]">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="BJU Logo" width={90} height={40} />
          </div>
          <p>PT. Barlintech Jaya Utama</p>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-[#000] mt-1" />
            <p className="text-sm">Wanaraja – Garut Jawa Barat</p>
          </div>

          {/* Sosial media */}
          {/* <div className="flex gap-3 mt-3 ">
            <a
              href="#"
              aria-label="Instagram"
              className=" text-black hover:text-[#38A2A4] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className=" text-black hover:text-[#38A2A4] transition"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className=" text-black hover:text-[#38A2A4] transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className=" text-black hover:text-[#38A2A4] transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div> */}
        </div>

        {/* Kolom 2: Kontak kami */}
        <div className="flex flex-col gap-3 text-[#00000080]">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-black" />
            <p className="text-sm">0812-1666-7952</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-black" />
            <p className="text-sm">info@bju.co.id</p>
          </div>
        </div>

        {/* Kolom 3: Navigasi */}
        <div className="flex flex-col gap-3 text-[#00000080]">
          <h3 className="font-semibold text-lg mb-2">Navigasi</h3>
          <a href="#about" className="text-sm hover:text-[#38A2A4] transition">
            About Us
          </a>
          <a
            href="#services"
            className="text-sm hover:text-[#38A2A4] transition"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Garis bawah dan copyright */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © 2025 PT. Barlintech Jaya Utama | Empowering Reliable Telecommunication
        Infrastructure.
      </div>
    </footer>
  );
}
