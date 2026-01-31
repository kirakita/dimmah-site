"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight text-stone-900 cursor-pointer"
          >
            Dimmah<span className="text-amber-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-stone-600 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="text-stone-600 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link 
              href="#work" 
              className="text-stone-600 hover:text-stone-900 transition-colors duration-200 cursor-pointer"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium transition-colors duration-200 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-1">
            <Link 
              href="#services" 
              className="block text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              About
            </Link>
            <Link 
              href="#work" 
              className="block text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-center transition-colors duration-200 mt-2 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
