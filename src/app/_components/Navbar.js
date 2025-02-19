"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import NavbarContent with SSR disabled
const NavbarContent = dynamic(() => import("./NavbarContent"), { ssr: false });

export default function Navbar() {
  return (
    <Suspense fallback={<div className="h-[4rem] bg-[#131313]"></div>}>
      <NavbarContent />
    </Suspense>
  );
}
