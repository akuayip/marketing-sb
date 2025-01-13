import React from "react";
import ProductList from "@/components/ProductList";

const Product: React.FC = () => {
  return (
    <div
      id="catalog" // Tambahkan ID di sini
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-16 px-4"
      style={{
        backgroundImage: "url('/latarproduct.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12 -mt-24">
        Lihat Produk Pilihan Kami
      </h2>
      <ProductList />
    </div>
  );
};

export default Product;
