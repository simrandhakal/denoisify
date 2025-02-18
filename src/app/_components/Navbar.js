"use client"
import { usePathname } from "next/navigation"; // Import to detect active route
import Link from "next/link";
import Logo from "./Logo";



export  default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/features", label: "Feature"},
        { href: "/contact", label: "Contact" },
        { href: "/results", label: "Results" },
        ];

  return (
    <nav className="h-[4rem] flex gap-2 justify-between px-11">
      {/* Logo Section */}
      <div className="h-[2rem] flex justify-center items-center mt-3">
        <Logo />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-between gap-[3rem] py-1 items-center">
        {navLinks.map(({ href, label, onClick }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <li
                className={`transition-all duration-300 ${
                  isActive
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

      <div>

      </div>
    </nav>
  )
}

