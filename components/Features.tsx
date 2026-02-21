export default function Features() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose CleaApp?
        </h2>
        <p className="text-gray-400">
          Everything you need to build and scale your product.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
          <p className="text-gray-400">
            Optimized architecture for lightning-fast experiences.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
          <p className="text-gray-400">
            Built with security best practices from day one.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Scalable System</h3>
          <p className="text-gray-400">
            Grow without worrying about infrastructure limits.
          </p>
        </div>
      </div>
    </section>
  );
}