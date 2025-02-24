"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [denoised, setDenoised] = useState(false);

    useEffect(() => {
      // Simulate denoising effect after clicking the button
      if (denoised) {
        setTimeout(() => {
          setDenoised(false);
        }, 2000);
      }
      return () => {
        clearTimeout();
      };
    }, [denoised]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313] text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-4">404 - Noisy Image Found!</h1>
      <p className="text-lg mb-6">
        Oops! This page is too noisy to be recognized. Let’s try denoising it or
        return to a clearer path!
      </p>

      <div className="relative w-[300px] h-[300px]">
        {!denoised ? (
          <Image
            src="/images/noisy.jpg"
            alt="Noisy Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        ) : (
          <Image
            src="/images/denoised.jpg"
            alt="Denoised Image"
            width={300}
            height={300}
            className="rounded-lg transition-all duration-500 ease-in-out"
          />
        )}
      </div>

      <button
        className="mt-6 bg-[#2563EB] text-white px-6 py-3 rounded-lg text-lg 
    hover:bg-blue-600 transition-all duration-300 ease-in-out"
        onClick={() => setDenoised(true)}
        disabled={denoised}
        style={{ opacity: denoised ? 0 : 1 }} // Set opacity dynamically
      >
        Denoise the Page
      </button>

      <Link href="/" className="mt-4 text-blue-400 hover:underline">
        Go Back to Safety
      </Link>
    </div>
  );
}
