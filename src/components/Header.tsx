"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" }, 
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
    // { name: "SignIn", href: "/about" },
  ];

  return (
    <header className="text-white shadow-2xl w-full border-b border-gray-700">
      <div className="container mx-auto py-2 mt-3 px-4">
        <div className="flex justify-between items-center">
          {/* logo or name */}
          <div className="flex items-center gap-3">
            <Link href={"/"}>
              <h1 className="text-xl md:text-2xl hover:text-blue-300 hover:animate-pulse text-white font-bold cursor-pointer group relative">
                Hadid Ali
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </h1>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* navigation links for large screens  */}
          <nav className="hidden md:flex text-lg gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="cursor-pointer group relative px-2"
                href={link.href}
              >
                {link.name}
                <span className="absolute left-0  bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden text-black flex flex-col gap-3 mt-2 bg-white shadow-lg rounded-lg p-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="font-bold cursor-pointer group relative py-2 px-2"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
