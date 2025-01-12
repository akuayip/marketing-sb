import React from "react";
import { FileText, Layout, ChartLine } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-start text-left gap-4">
    <div className="p-4 bg-[#54AB5C] rounded-full">
      <div className="text-black">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-green-800">{title}</h3>
    <p className="text-green-700/80">{description}</p>
  </div>
);

const VillageServices = () => {
  const services = [
    {
      icon: <FileText size={24} />,
      title: "Strategi Konten",
      description:
        "Kami merancang strategi untuk memasarkan produk lokal Desa Sumber Fajar agar lebih dikenal luas.",
    },
    {
      icon: <FileText size={24} />,
      title: "Pengembangan Konten",
      description:
        "Kami menciptakan konten kreatif seperti video, foto produk UMKM, dan narasi menarik tentang desa.",
    },
    {
      icon: <Layout size={24} />,
      title: "Penciptaan Konten",
      description:
        "Kami menghasilkan konten berkualitas yang memperkuat citra positif produk lokal Desa Sumber Fajar.",
    },
    {
      icon: <ChartLine size={24} />,
      title: "Optimisasi Konten",
      description:
        "Kami mengoptimalkan konten dengan teknik SEO agar lebih mudah ditemukan dan menjangkau pasar luas.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8 md:p-16"
      style={{
        backgroundImage: "url('/latarintro.png')", // Path ke gambar latar di folder public
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-start mt-16 gap-6 max-w-sm">
          <h1 className="text-4xl font-bold text-green-800 leading-tight">
            Kami adalah Desa Sumber Fajar
          </h1>
          <p className="text-green-700/80">
            Desa dengan budaya kaya dan produk lokal berkualitas. Kami siap
            menjadi mitra Anda dalam menciptakan peluang terbaik melalui inovasi
            dan kreativitas berbasis komunitas.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-green-700 hover:text-green-800 gap-2 font-medium"
          >
            Lihat Detail
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillageServices;
