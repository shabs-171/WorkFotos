"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isMenuOpen || isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="container-87 flex items-center justify-between h-[80px] md:h-[100px]">
        {/* Logo */}
        <div className="relative w-40 h-10 md:w-56 md:h-11">
          <Link href="/">
            <Image
              src={isMenuOpen || isScrolled ? "/logo2.png" : "/logo3.png"}
              alt="WorkFotos Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {["How it works", "Pricing", "Contact"].map((item) => {
               const href =
                 item === "Pricing"
                 ? "/pricing"
                 : item === "How it works"
                ? "/work"
                  : "/contact";
              return (
                <Link
                  key={item}
                  href={href}
                  className={`font-medium text-[18px] ${
                    isMenuOpen || isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  } transition-colors duration-200`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className={`border px-5 py-2 rounded-full font-semibold text-[14px] ${
                isMenuOpen || isScrolled
                  ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-white text-white hover:bg-blue-700"
              } transition duration-200`}
            >
              Member Login
            </button>
            <button
              className={`px-5 py-2 rounded-full font-semibold text-[14px] ${
                isMenuOpen || isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              } transition duration-200`}
            >
              Join Today
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden flex flex-col justify-center items-center w-10 h-10 bg-blue-600 rounded-md transition-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 left-0 w-full h-full bg-blue-800 z-50 flex flex-col justify-between transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-5 right-5">
          <button
            onClick={closeMenu}
            className="flex flex-col justify-center items-center w-10 h-10 bg-blue-700 rounded-md transition-none"
            aria-label="Close menu"
          >
            <span className="w-6 h-0.5 bg-white rotate-45 translate-y-0" />
            <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
          </button>
        </div>

        <div className="px-8 pt-24 flex flex-col gap-6">
          {["How it works", "Pricing", "Contact"].map((item) => {
            const href = item === "Pricing" ? "/pricing" : "#";
            return (
              <Link
                key={item}
                href={href}
                onClick={closeMenu}
                className="text-white text-[18px] font-medium hover:text-blue-200 transition-colors duration-200"
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="px-8 pb-12 flex flex-col sm:flex-row gap-4">
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-semibold text-[15px] w-full sm:w-48">
            Member Login
          </button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-200 font-semibold text-[15px] w-full sm:w-48">
            Join Today
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
