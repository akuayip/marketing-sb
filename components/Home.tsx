"use client";

import React from "react";

const Home = () => {
  const handleGetStarted = () => {
    const target = document.getElementById("catalog");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full h-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/latarhome.png')",
      }}
    >
      {/* Konten Utama */}
      <div
        id="home"
        className="w-full h-full flex flex-col items-center justify-center text-center text-white px-6 py-52"
      >
        <h1 className="text-4xl font-bold mb-6 sm:mt-20">
          Pemasaran Desa Sumber Fajar
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mb-8">
          Kami membantu memasarkan produk lokal unggulan Desa Sumber Fajar agar
          dikenal lebih luas. Dengan memanfaatkan teknologi digital dan
          pendekatan strategis, kami mendukung pelaku usaha lokal untuk tumbuh
          dan bersaing di pasar nasional maupun internasional. Bergabunglah
          bersama kami untuk memajukan desa melalui inovasi pemasaran modern.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
