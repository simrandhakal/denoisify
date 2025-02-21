"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function NavbarContent() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("home");

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
    <nav className="z-50 fixed top-0 w-full h-[4rem] flex items-center px-[6rem] bg-[#131313] shadow-md">
      {/* Logo Section */}
      <div className="h-[2rem] flex items-center">
        <Logo />
      </div>

      {/* Navigation Links - Centered */}
      <ul className="flex-1 flex justify-center gap-[3rem] relative">
        {navLinks.map(({ href, label }) => {
          const isActive = activeSection === label.toLowerCase();

          return (
            <li key={href} className="relative">
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

      {/* Empty div for alignment */}
      <div className="w-[2rem]"></div>
    </nav>
  );
}
