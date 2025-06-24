export default function SubscribeSection() {
  return (
    <section className="bg-[#f7f3f1] py-16 text-center px-4">
      <p className="text-blue-700 italic text-lg mb-2">Let's Stay In Touch.</p>
      <h2 className="text-2xl md:text-3xl font-serif text-gray-900 max-w-3xl mx-auto mb-8">
        Be the first to see our latest designs,<br />
        access exclusive discounts & more.
      </h2>

      <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-[#05264e] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#021b38] transition-colors duration-200"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
}
