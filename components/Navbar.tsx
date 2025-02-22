"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

interface NavbarProps {
  isWhite?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isWhite = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); 

  const textColor = isWhite ? "text-white" : "text-green-800";

 
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className={`p-3 md:px-12 lg:px-28 bg-transparent backdrop-blur-md`}>
        <div className="flex justify-between items-center">
          {/* Logo dan Judul */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src={assets.logo}
              width={40}
              height={40}
              alt="Logo"
              className="w-[40px]"
            />
            <p className={`ml-3 font-semibold text-lg ${textColor}`}>
              Desa Sumber Fajar
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-end flex-1 font-medium space-x-8">
            <button
              onClick={() => router.push("/")} // Navigate to landing page
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("catalog")}
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Catalog
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-menu-2 cursor-pointer ${textColor}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col space-y-4 mt-4 md:hidden">
            <button
              onClick={() => router.push("/")} 
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("catalog")}
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Catalog
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className={`${textColor} hover:underline hover:decoration-green-800 hover:underline-offset-4 transition`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
