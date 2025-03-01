"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function NavbarContent() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/?to=home#home", label: "Home" },
    { href: "/?to=about#about", label: "About" },
    { href: "/?to=feature#feature", label: "Feature" },
    { href: "/?to=contact#contact", label: "Contact" },
    { href: "/?to=examples#examples", label: "Examples" },
    { href: "/result?to=results", label: "Results" },
  ];

  useEffect(() => {
    const toParam = searchParams.get("to"); // Get "to" value from URL
    if (toParam) {
      setActiveSection(toParam);
    }
  }, [searchParams]);

  return (
    <nav className="z-5 realtive fixed top-0 w-full h-[4rem] flex items-center px-[3rem] sm:px-[4rem] lg:px[6rem] bg-[#131313] shadow-md">
      {/* Logo Section */}
      <div className="h-[2rem] flex items-center">
        <Logo />
      </div>

      

      {/* Navigation Links - Desktop and Mobile */}
      <ul
        className={`flex-1 flex justify-center gap-[3rem] relative ${
          isMobileMenuOpen ? "flex-col absolute top-[4rem] left-0 w-full bg-[#131313]" : "lg:flex hidden"
        }`}
      >
        {navLinks.map(({ href, label }) => {
          const isActive = activeSection === label.toLowerCase();

          return (
            <li key={href} className="relative py-4 text-center">
              <Link
                href={href}
                className={`transition-all duration-300 cursor-pointer ${
                  isActive ? "text-[#2563EB]" : "text-[#f0efef] hover:text-[#2563EB]"
                }`}
              >
                {label}
              </Link>
              {isActive && (
                <div className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-[#2563EB] transition-all duration-300"></div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden text-white ml-auto relative z-20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span
          className={`block w-6 h-1 bg-white mb-2 transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 absolute top-0 left-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-white mb-2 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0 mb-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 absolute bottom-0 left-0" : ""
          }`}
        ></span>
      </button>

      {/* Empty div for alignment */}
      <div className="w-[2rem] hidden lg:block"></div>
    </nav>
  );
}
