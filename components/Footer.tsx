import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-16 px-8  relative z-10 "
      style={{
        backgroundImage: "url('/latarfooter.png')",

        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bagian Sumber Fajar */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={assets.logo}
              width={40}
              height={40}
              alt="Logo"
              className="w-[40px]"
            />
            <h3 className="text-lg font-bold text-green-800">Sumber Fajar</h3>
          </div>
          <p className="text-green-700/80 mt-4">
            Mendukung dan memasarkan produk lokal unggulan dari Desa Sumber
            Fajar untuk Indonesia
          </p>
          <p className="text-green-700/80 mt-4 text-sm">
            &copy; 2025 Copyright KKN-Tematik Desa Sumber Fajar.
          </p>
        </div>

        {/* Bagian Alamat */}
        <div>
          <h3 className="text-lg font-bold text-green-800">Alamat</h3>
          <p className="text-green-700/80 mt-4 text-sm">
            Sumber Fajar, Seputih Banyak, Kecamatan Seputih Banyak, Kabupaten
            Lampung Tengah
          </p>
        </div>

        {/* Bagian Follow Us */}
        <div>
          <h3 className="text-lg font-bold text-green-800">Contact Us</h3>
          <div className="flex flex-col gap-4 mt-4">
            <a href="#" className="text-green-800 hover:text-green-600">
              Sumberfajar12@gmail.com
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-green-800 hover:text-green-600">
              Call us: +62878-2962-6993
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
