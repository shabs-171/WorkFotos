"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastContent, setIsScrolledPastContent] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentOffset = document.getElementById("contentfotos")?.offsetTop || 0;
      setIsScrolledPastContent(window.scrollY >= contentOffset);
    };

    // Run once to check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // re-run when route changes

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isMenuOpen || isScrolledPastContent
          ? "bg-white shadow-lg"
          : "bg-white/5 backdrop-blur-lg"
      }`}
    >
      <div className="container-87 flex items-center justify-between h-[80px] md:h-[100px]">
        {/* Logo */}
        <div className="relative w-40 h-10 md:w-56 md:h-11">
          <Link href="/">
            <Image
              src={isMenuOpen || isScrolledPastContent ? "/logo2.png" : "/logo3.png"}
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
                    isMenuOpen || isScrolledPastContent
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  } transition-colors duration-200`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              className={`w-auto h-[49px] px-6 rounded-[100px] border text-[16px] font-semibold transition duration-200 ${
                isMenuOpen || isScrolledPastContent
                  ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-white text-white hover:bg-blue-600 hover:text-white"
              }`}
            >
              Member Login
            </button>
            <button className="w-auto h-[49px] px-6 rounded-[100px] text-[16px] font-semibold transition duration-200 bg-blue-600 text-white hover:bg-blue-700">
              Join Today
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

<div
  className={`fixed top-0 right-0 h-full bg-white z-50 flex flex-col transition-transform duration-300
    w-full md:w-1/2
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  {/* Close Button */}
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

  {/* LOGO */}
  <div className="px-8 pt-10 ">
    <Image
      src="/logo2.png"
      alt="WorkFotos Logo"
      width={160}
      height={40}
      className="object-contain"
    />
  </div>

  {/* MENU LINKS — directly under logo */}
  <div className="px-8 mt-20 sm:mt-20 md:mt-[120px] flex flex-col gap-4 md:gap-7">
 {/* gap ≈ 10px */}
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
          onClick={closeMenu}
          className="text-black text-[18px] font-medium hover:text-blue-600 transition-colors duration-200 text-left"
        >
          {item}
        </Link>
      );
    })}
  </div>

  {/* BUTTONS at bottom */}
  <div className="mt-auto px-8 pb-12 flex flex-col gap-4">
    <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-gray-100 transition duration-200 font-semibold text-[15px] w-full h-[49px] flex items-center justify-center">
      Member Login
    </button>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200 font-semibold text-[15px] w-full h-[49px] flex items-center justify-center">
      Join Today
    </button>
  </div>
</div>



{/* Overlay */}
{isMenuOpen && (
  <div
    className=" md:hidden" // overlay only on mobile
    onClick={closeMenu}
  />
)}


{/* Overlay */}
{isMenuOpen && (
  <div
    className=" xl:hidden" // overlay only on mobile
    onClick={closeMenu}
  />
)}


{/* Overlay */}
{isMenuOpen && (
  <div
    className="xl:hidden  z-40"
    onClick={closeMenu}
  />
)}


      {isMenuOpen && (
        <div
          className="xl:hidden z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
