export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We provide a wide range of services to help your business grow and succeed.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-500">Building fast, modern, and responsive websites.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-500">Designing user interfaces that delight users.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-500">Helping brands reach more customers online.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
