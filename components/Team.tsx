export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Meet the creative minds behind our success.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={`https://via.placeholder.com/150`}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
