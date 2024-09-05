"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-white p-4 fixed w-full top-0 z-50 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/assets/BlockHackLogo.png"
          alt="BlockHack Logo"
          width={40} // Ensure both width and height are defined
          height={40} // to maintain aspect ratio
          priority // Since it's above the fold
          className="object-contain"
        />
        <span className="text-2xl font-bold">BlockHack 2024</span>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation for Desktop */}
      <nav className="hidden md:flex space-x-6">
        <a
          href="#about"
          className="hover:text-secondary transition duration-300"
        >
          About
        </a>
        <a
          href="#features"
          className="hover:text-secondary transition duration-300"
        >
          Features
        </a>
        <a
          href="#prizes"
          className="hover:text-secondary transition duration-300"
        >
          Prizes
        </a>
        <a
          href="#timeline"
          className="hover:text-secondary transition duration-300"
        >
          Timeline
        </a>
        <a
          href="#sponsors"
          className="hover:text-secondary transition duration-300"
        >
          Sponsors
        </a>
        <a
          href="#register"
          className="hover:text-secondary transition duration-300"
        >
          Register
        </a>
      </nav>

      {/* Slide-out Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-primary text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-2xl font-bold">BlockHack 2024</span>
          <button onClick={toggleMenu} aria-label="Close menu">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-4">
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            About
          </a>
          <a
            href="#features"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            Features
          </a>
          <a
            href="#prizes"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            Prizes
          </a>
          <a
            href="#timeline"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            Timeline
          </a>
          <a
            href="#sponsors"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            Sponsors
          </a>
          <a
            href="#register"
            onClick={toggleMenu}
            className="hover:text-secondary transition duration-300"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
