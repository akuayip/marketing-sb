import dodolgarut from "@/assets/product/dodolgarut.jpeg";

import permen1 from "@/assets/product/permen1.jpg";
import permen2 from "@/assets/product/permen2.jpg";
import permen3 from "@/assets/product/permen3.jpg";
import permen4 from "@/assets/product/permen4.jpg";

import lipbalm1 from "@/assets/product/lipbalm1.jpg";
import lipbalm2 from "@/assets/product/lipbalm2.jpg";
import lipbalm3 from "@/assets/product/lipbalm3.jpg";
import lipbalm4 from "@/assets/product/lipbalm4.jpg";

import tahu1 from "@/assets/product/tahu1.jpg";
import tahu2 from "@/assets/product/tahu2.jpg";
import tahu3 from "@/assets/product/tahu3.jpg";
import tahu4 from "@/assets/product/tahu4.jpg";
import tahu5 from "@/assets/product/tahu5.jpg";

import kerupuk1 from "@/assets/product/kerupuk1.jpg";
import kerupuk2 from "@/assets/product/kerupuk2.jpg";
import kerupuk3 from "@/assets/product/kerupuk3.jpg";
import kerupuk4 from "@/assets/product/kerupuk4.jpg";

import etawa1 from "@/assets/product/etawa1.jpg";
import etawa2 from "@/assets/product/etawa2.jpg";
import etawa3 from "@/assets/product/etawa3.jpg";
import etawa4 from "@/assets/product/etawa4.jpg";

import bakmie1 from "@/assets/product/bakmie1.jpg";
import bakmie2 from "@/assets/product/bakmie2.jpg";
import bakmie3 from "@/assets/product/bakmie3.jpg";
import bakmie4 from "@/assets/product/bakmie4.jpg";

import briket1 from "@/assets/product/briket1.jpeg";
import briket2 from "@/assets/product/briket2.jpeg";
import briket3 from "@/assets/product/briket3.jpeg";

import baju1 from "@/assets/product/baju1.jpeg";
import baju2 from "@/assets/product/baju2.jpeg";
import baju3 from "@/assets/product/baju3.jpeg";
import baju4 from "@/assets/product/baju4.jpeg";

export interface Product {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  slug: string;
  socialMedia: {
    whatsapp: string;
    facebook: string;
  };
  images?: string[];
}

export const products: Product[] = [
  {
    title: "Tahu Mbak Lin",
    description:
      "Tahu Mbak Lin adalah produsen tahu rumahan berkualitas yang berlokasi di SB 1 Sumber Fajar. Usaha ini menghadirkan beragam jenis tahu seperti tahu pong, tahu putih, tahu kriwil, dan tahu kuning.",
    longDescription:
      "Tahu Mbak Lin adalah produsen tahu rumahan yang berlokasi di SB 1 Sumber Fajar, Dusun 2 RT 3, dan dikelola langsung oleh Bu Nurhalimah. Jenis tahu yang diproduksi sangat beragam, mulai dari tahu kampung dengan tekstur yang khas, tahu putih yang lembut dan cocok untuk berbagai masakan, hingga tahu kriwil yang unik dan renyah serta tahu kuning yang kaya nutrisi. Dengan menggunakan bahan baku terbaik serta proses pembuatan yang higienis, Tahu Mbak Lin berkomitmen menghadirkan tahu berkualitas yang cocok dikonsumsi setiap hari.",
    imageUrl: tahu1.src,
    slug: "tahu-mbak-lin",
    socialMedia: {
      whatsapp: "https://wa.me/6285758431484",
      facebook: "",
    },
    images: [tahu1.src, tahu2.src, tahu3.src, tahu4.src, tahu5.src],
  },
  {
    title: "Kerupuk Barokah Qiara",
    description:
      "Kerupuk Barokah Qiara adalah produsen aneka kerupuk milik Bu Qiara yang berlokasi di Seputih Banyak, Sumber Fajar SB1. Usaha ini telah berjalan selama satu tahun dan menyediakan kerupuk berkualitas dari bahan mentah pilihan.",
    longDescription:
      "Kerupuk Barokah Qiara adalah usaha kecil milik Bu Qiara yang berdiri sejak satu tahun lalu dan berlokasi di Seputih Banyak, Sumber Fajar SB1. Usaha ini berfokus pada produksi dan penjualan kerupuk goreng yang dibuat dari kerupuk mentah berkualitas. Dengan proses penggorengan yang higienis dan terkontrol, Kerupuk Barokah Qiara menghasilkan kerupuk dengan rasa gurih dan kerenyahan maksimal, cocok sebagai camilan atau pelengkap hidangan. Kerupuk Barokah Qiara dapat ditemukan langsung di toko yang berada di Pasar Rumbia. Selain itu, bagi yang ingin membeli dalam jumlah banyak atau eceran, tersedia juga layanan pemesanan melalui WhatsApp dan Facebook.",
    imageUrl: kerupuk1.src,
    slug: "kerupuk-barokah-qiara",
    socialMedia: {
      whatsapp: "https://wa.me/6287709248808",
      facebook:
        "https://web.facebook.com/people/Qiara-Rina/pfbid0KY7xU8DJqALBbFKm7Sh29QYFw8VgQRC7kLmDSZ3LJwU5wtjrhYHP6JdMSsVW9Q1Wl",
    },
    images: [kerupuk1.src, kerupuk2.src, kerupuk3.src, kerupuk4.src],
  },
  {
    title: "BakMie Bu Kasirah ",
    description:
      "BakMie Bu Kasirah, mie dari tepung singkong dengan kuah kacang gurih dan sayuran segar. Lezat, sehat, dan beda dari yang lain",
    longDescription:
      "BakMie Bu Kasirah menghadirkan cita rasa unik dengan mie berbahan dasar tepung singkong yang lembut dan kenyal, disiram kuah kacang gurih yang kaya rempah, serta dilengkapi dengan sayuran segar yang menambah kelezatan dan nutrisi. Sajian ini menawarkan perpaduan rasa autentik dan pilihan sehat, cocok untuk dinikmati bersama keluarga atau teman. Rasakan keistimewaannya di setiap suapan",
    imageUrl: bakmie1.src,
    slug: "BakMie-Bu-Kasirah",
    socialMedia: {
      whatsapp: "https://wa.me/6282377319151",
      facebook: "",
    },
    images: [bakmie1.src, bakmie2.src, bakmie3.src, bakmie4.src],
  },
  {
    title: "Kambing Etawa Pak Sarino",
    description:
      "Kambing Etawa Pak Sarino, peranakan unggulan untuk kontes dengan kualitas terbaik. Dirawat khusus untuk tampil prima. Unik, istimewa, dan siap jadi juara.",
    longDescription:
      "Kami menyediakan Kambing Etawa peranakan unggulan yang dirawat dengan standar kualitas tinggi untuk kebutuhan kontes maupun koleksi. Dengan perhatian khusus pada fisik dan perawatan terbaik, setiap kambing kami siap memberikan performa maksimal di setiap ajang perlombaan.Kami melayani penjualan di berbagai wilayah Lampung dengan pengiriman aman dan nyaman, memastikan kambing tetap dalam kondisi terbaik selama proses perjalanan. Percayakan Kambing Etawa Pak Sarino untuk kualitas, prestasi, dan keunggulan di setiap kesempatan!.",
    imageUrl: etawa1.src,
    slug: "Kambing-Etawa-Pak-Sarino",
    socialMedia: {
      whatsapp: "https://wa.me/6285266307586",
      facebook: "",
    },
    images: [etawa1.src, etawa2.src, etawa3.src, etawa4.src],
  },
  {
    title: "Lipbalm Natural ",
    description:
      "Lip Balm Natural, pelembap bibir dengan bahan alami untuk bibir sehat dan lembut setiap hari",
    longDescription:
      "Lip Balm Natural dibuat dari campuran bahan-bahan berkualitas seperti beeswax, cocoa butter, shea butter, virgin coconut oil (VCO), almond oil, essential oil, dan vitamin E. Kombinasi ini memberikan perlindungan dan kelembapan ekstra untuk bibir, membantu mencegah kekeringan, serta menjaga kelembutan dan kesehatan bibir. Dengan aroma alami yang menenangkan dan formula yang aman, lip balm ini cocok digunakan setiap saat untuk bibir yang tampak segar, halus, dan terawat",
    imageUrl: lipbalm1.src,
    slug: "Lipbalm-Natural",
    socialMedia: {
      whatsapp: "",
      facebook: "",
    },
    images: [lipbalm1.src, lipbalm2.src, lipbalm3.src, lipbalm4.src],
  },
  {
    title: "Milky Bites",
    description:
      "Permen susu kambing etawa, merupakan permen bertekstur lunak yang terbuat dari olahan susu kambing asli.",
    longDescription:
      "Susu diolah dengan cara pemanasan untuk menurunkan kadar air dan menambahkan gula untuk membentuk karamel pada permen susu. Susu di olah pada suhu tinggi dengan Waktu yang relative lama untuk menghasilkan permen dengan rasa dan aroma susu yang kuat. dikemas dengan kertas kemasan yang di masukkan kedalam kemasan pouch.",
    imageUrl: permen1.src,
    slug: "Milky-Bites",
    socialMedia: {
      whatsapp: "",
      facebook: "",
    },
    images: [permen1.src, permen2.src, permen3.src, permen4.src],
  },
  {
    title: "Briket dari Biomassa",
    description: "Cooming Soon",
    longDescription: "Cooming Soon",
    imageUrl: briket1.src,
    slug: "beriket",
    socialMedia: {
      whatsapp: "",
      facebook: "",
    },
    images: [briket1.src, briket2.src, briket3.src],
  },
  {
    title: "Rumah Jahit Nab'han",
    description:
      "Rumah Jahit Nab'han menjual baju hasil jahitan sendiri dengan desain yang unik dan nyaman dipakai.",
    longDescription:
      "Rumah Jahit Nab'han berfokus pada pembuatan pakaian dengan desain eksklusif yang dibuat secara khusus oleh tenaga ahli jahit. Setiap pakaian memiliki cerita, dan melalui karya ini, pelanggan dapat mengekspresikan kepribadian dan gaya mereka. Dengan menggunakan bahan pilihan terbaik dan teknik jahitan yang presisi, setiap produk tidak hanya terlihat indah tetapi juga nyaman untuk dikenakan. Mulai dari pakaian formal hingga casual, Rumah Jahit Nab'han hadir untuk memenuhi berbagai kebutuhan dengan hasil yang memuaskan.",
    imageUrl: baju1.src,
    slug: "baju",
    socialMedia: {
      whatsapp: "https://wa.me/6285664357200",
      facebook: "",
    },
    images: [baju1.src, baju2.src, baju3.src, baju4.src],
  },
];
