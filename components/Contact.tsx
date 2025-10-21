export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Have a question or want to work with us? Get in touch!
        </p>
        <form className="max-w-lg mx-auto text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded-lg h-32"
          ></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
