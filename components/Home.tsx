import React from "react";

const Home = () => {
  return (
    <div
      className="w-full h-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/latarhome.png')", // Gunakan gambar latar dari folder assets
      }}
    >
      {/* Konten Utama */}
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-white px-6 py-52">
        <h1 className="text-4xl font-bold mb-6">Pemasaran Desa Sumber Fajar</h1>
        <p className="text-lg leading-relaxed max-w-3xl mb-8">
          Lorem ipsum dolor sit amet consectetur. Ultrices tristique est quis
          est dictum vivamus. Et id aliquet bibendum lorem morbi nullam mauris
          augue lacus. Fringilla aliquam tellus non suscipit viverra posuere.
          Ornare gravida nibh ligula pulvinar elementum ut.
        </p>
        <button
          onClick={() => {
            const target = document.getElementById("next-section");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
