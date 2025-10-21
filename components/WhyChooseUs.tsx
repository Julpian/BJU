export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We stand out because of our dedication, quality, and customer satisfaction.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
            <p className="text-gray-500">Our professionals bring years of experience to every project.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-500">We deliver measurable impact for our clients.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-500">We prioritize understanding and meeting your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
