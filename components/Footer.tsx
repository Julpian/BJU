export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Company Name</h3>
        <p className="text-blue-100 mb-6">
          Empowering innovation and creativity through technology.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="hover:text-blue-200 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-blue-200 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-blue-200 transition"
            aria-label="Email"
          >
            Email
          </a>
        </div>

        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
