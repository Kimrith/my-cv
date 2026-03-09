import React, { useState, useEffect } from "react";
import Homepage from "../Navigation/home";
import Aboutus from "../Navigation/aboutus";
import Experience from "../Navigation/exp";

// Simple SVG Icons
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  animarion(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    // Main Background: Dark Gray/Slate
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            style={{ fontFamily: "Inter, sans-serif" }}
            className="text-2xl font-bold cursor-pointer flex items-center gap-1 tracking-wide"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-purple-400">Chey</span>
            <span className="text-white">.Kimirth</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Dark Background */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-white/10 shadow-xl">
            <div className="flex flex-col p-6 gap-4">
              {["Home", "About", "Experience"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-300 font-medium hover:text-purple-400 py-2 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        <div data-aos="fade-up">
          <section id="home">
            {/* Optional: Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <Homepage />
          </section>
        </div>

        <div data-aos="fade-right">
          <section
            id="about"
            className="min-h-screen bg-slate-800/50 flex items-center justify-center border-t border-white/5"
          >
            <Aboutus />
          </section>
        </div>

        <div data-aos="fade-left">
          <section
            id="experience"
            className="min-h-screen bg-slate-800/50 flex items-center justify-center border-t border-white/5"
          >
            <Experience />
          </section>
        </div>
      </main>
    </div>
  );
}
