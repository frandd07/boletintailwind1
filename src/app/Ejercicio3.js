export default function Ejercicio3() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="font-bold">Logo</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-blue-400">
          Home
        </a>
        <a href="#" className="hover:text-blue-400">
          About
        </a>
        <a href="#" className="hover:text-blue-400">
          Contact
        </a>
      </div>
      <button className="md:hidden block">☰</button>
    </nav>
  );
}
