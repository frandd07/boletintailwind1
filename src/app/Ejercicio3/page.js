"use client";
import { useState } from "react";

export default function Ejercicio3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
      <div className="font-bold">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/domain--v1.png"
          alt="domain--v1"
        />
      </div>
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
      <button
        className="md:hidden block"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-center space-y-2 py-4">
          <a href="#" className="block hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block hover:text-blue-400">
            About
          </a>
          <a href="#" className="block hover:text-blue-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
