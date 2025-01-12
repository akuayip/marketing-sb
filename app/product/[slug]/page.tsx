import React from "react";
import { products } from "@/assets/data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{
    slug: string;
  }>; // Pastikan params adalah Promise
}

const ProductDetail = async ({ params }: Props) => {
  const { slug } = await params; // Tunggu params yang diresolve
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Halaman Detail Produk */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start mt-20 pt-16 px-4"
        style={{
          backgroundImage: "url('/latarexplain.png')",
        }}
      >
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
            {product.title}
          </h1>

          {/* Gambar Produk */}
          <div className="mb-8 flex justify-center">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Deskripsi */}
          <p className="text-gray-700 leading-relaxed mb-8">
            {product.longDescription}
          </p>

          {/* Informasi Kontak */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-green-800 mb-4">
              Contact Person
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-green-800"></i>
                <span className="text-gray-700">
                  {product.socialMedia.whatsapp}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
