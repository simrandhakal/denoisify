"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";


export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#feature", label: "Feature" },
    { href: "/#contact", label: "Contact" },
    { href: "/#examples", label: "Examples" },
  ];

  const [activeSection, setActiveSection] = useState("#home"); // Default active section

  return (
    <nav className="z-50 fixed top-0 w-full h-[4rem] flex items-center px-[6rem] bg-[#131313] shadow-md">
      {/* Logo Section */}
      <div className="h-[2rem] flex items-center">
        <Logo />
      </div>

      {/* Navigation Links - Centered */}
      <ul className="flex-1 flex justify-center gap-[3rem]">
      {navLinks.map(({ href, label }) => {
          const isactive = pathname === href; //  Detect active section

          return (
            <Link key={href} href={href} scroll={true}>
              <li
                onClick={() => handleScroll(href)} //  Smooth scroll on click
                className={`transition-all duration-300 cursor-pointer ${
                  isactive
                    ? "text-[#568bc6] underline underline-offset-4"
                    : "text-[#f0efef] hover:underline underline-offset-4"
                }`}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* Empty div for alignment */}
      <div className="w-[2rem]"></div>
    </nav>
  );
}
