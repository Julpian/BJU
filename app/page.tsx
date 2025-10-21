// app/page.tsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Contact />
      <Footer />
      {/* Kode Anda selanjutnya... */}
    </main>
  );
}