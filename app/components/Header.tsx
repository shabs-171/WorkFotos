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
  className={`fixed top-0 left-0 w-full z-50 ${
    isMenuOpen
      ? "bg-white shadow-lg" // immediately solid when menu opens
      : isScrolled
      ? "bg-white shadow-lg transition-all duration-500" // only scroll triggers smooth transition
      : "bg-white/5 backdrop-blur-lg transition-all duration-500"
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

          {/* BUTTONS with Figma Specs */}
          <div className="flex items-center gap-4">
            
            {/* MEMBER LOGIN BUTTON */}
            <button
              className={`w-auto h-[49px] px-6 rounded-[100px] border text-[16px] font-semibold transition duration-200
                ${
                  isMenuOpen || isScrolled
                    ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border-white text-white hover:bg-blue-600 hover:text-white"
                }
              `}
            >
              Member Login
            </button>

            {/* JOIN TODAY BUTTON */}
            <button
              className={`w-auto h-[49px] px-6 rounded-[100px] text-[16px] font-semibold
                transition duration-200 bg-blue-600 text-white hover:bg-blue-700
              `}
            >
              Join Today
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="xl:hidden flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-transparent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Image
            src="/hamburger.png"
            alt="Menu"
            width={21}
            height={14}
            className="object-contain w-6 h-4 md:w-8 md:h-6"
          />
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`xl:hidden fixed top-0 left-0 w-full h-full bg-blue-800 z-50 flex flex-col justify-between transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-5 right-5">
          <button
            onClick={closeMenu}
            className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-transparent"
            aria-label="Close menu"
          >
            <Image
              src="/hamburger.png"
              alt="Close menu"
              width={21}
              height={14}
              className="object-contain w-6 h-4 md:w-8 md:h-6"
            />
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
                className="text-white text-[18px] font-medium hover:text-blue-200 transition-colors duration-200 text-left"
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="px-8 pb-12 flex flex-col gap-4">

          {/* MOBILE & TABLET MEMBER LOGIN */}
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-semibold text-[15px] w-full h-[49px] flex items-center justify-center">
            Member Login
          </button>

          {/* MOBILE & TABLET JOIN TODAY */}
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-200 font-semibold text-[15px] w-full h-[49px] flex items-center justify-center">
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