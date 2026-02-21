export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">CleaApp</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Features</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}