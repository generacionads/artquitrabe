"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-4 md:px-8 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D14]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mr-auto no-underline">
        <Image
          src="/images/Logo_Negro_Art-Quitrabe-comprimido.webp"
          alt="Art-Quitrabe"
          width={160}
          height={40}
          className="object-contain brightness-0 invert"
        />
      </Link>

      <Link
        href="#contacto"
        className="inline-flex items-center px-[22px] py-[10px] bg-[#184690] text-[#FFFFFF] text-[13px] font-semibold rounded-sm tracking-wide whitespace-nowrap no-underline hover:bg-[#0F2D5E] transition-colors"
      >
        Solicitar presupuesto
      </Link>
    </nav>
  );
}
