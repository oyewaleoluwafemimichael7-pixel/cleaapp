export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        Build Smarter With CleaApp
      </h1>

      <p className="text-gray-400 max-w-2xl mb-8 text-lg">
        A modern platform designed to help you launch, scale,
        and manage your digital products effortlessly.
      </p>

      <div className="flex gap-4">
        <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>

        <button className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}