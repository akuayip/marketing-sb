import dodolgarut from "@/assets/product/dodolgarut.jpeg";

export interface Product {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  slug: string;
  socialMedia: {
    whatsapp: string;
  };
}

export const products: Product[] = [
  {
    title: "Dodol Garut",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, lacus at sollicitudin vestibulum, neque erat sollicitudin eros, sit amet pharetra nisl risus sit amet metus. Integer ac enim id lorem ullamcorper venenatis. Nulla facilisi. Nam vel magna id erat consectetur bibendum. Praesent euismod, tortor non tincidunt sollicitudin, libero erat molestie erat, in luctus tortor enim quis nunc.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut",
    socialMedia: {
      whatsapp: "",
    },
  },
  {
    title: "Dodol Garut 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum vel sapien sit amet hendrerit. Integer eget facilisis est, vitae dictum lacus. Donec malesuada, eros et pellentesque auctor, erat nisl varius odio, ac feugiat elit lorem sed augue. Nulla et est vel ligula condimentum tincidunt.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-2",
    socialMedia: {
      whatsapp: "https://wa.me/6289876543210",
    },
  },
  {
    title: "Dodol Garut 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel feugiat arcu, in auctor nunc. Suspendisse potenti. Integer vel varius metus. Vivamus suscipit, felis non pretium scelerisque, risus nulla porttitor justo, sit amet ultrices libero mauris eget nulla.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-3",
    socialMedia: {
      whatsapp: "https://wa.me/6281122334455",
    },
  },
  {
    title: "Dodol Garut 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a est ac quam vestibulum consequat. Ut dignissim interdum vehicula. Curabitur nec felis ut elit consectetur auctor nec id risus. Integer sit amet tincidunt mi, vitae convallis augue.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-4",
    socialMedia: {
      whatsapp: "https://wa.me/6282233445566",
    },
  },
  {
    title: "Dodol Garut 5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu elit sed velit consectetur dapibus. Nulla consectetur metus et ligula cursus varius. Aenean scelerisque, nisl vel commodo viverra, arcu justo pulvinar risus, ut dictum arcu felis eget velit.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-5",
    socialMedia: {
      whatsapp: "https://wa.me/6283344556677",
    },
  },
  {
    title: "Dodol Garut 6",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit turpis ut ante blandit, non ullamcorper magna auctor. Integer mollis odio in arcu consectetur, vel ultricies libero lacinia. Etiam a nulla tincidunt, finibus libero sed, pharetra lacus.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-6",
    socialMedia: {
      whatsapp: "https://wa.me/6284455667788",
    },
  },
  {
    title: "Dodol Garut 7",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac molestie nec pellentesque in suspendisse maecenas ullamcorper semper.",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit turpis ut ante blandit, non ullamcorper magna auctor. Integer mollis odio in arcu consectetur, vel ultricies libero lacinia. Etiam a nulla tincidunt, finibus libero sed, pharetra lacus.",
    imageUrl: dodolgarut.src,
    slug: "dodol-garut-7",
    socialMedia: {
      whatsapp: "https://wa.me/6284455667788",
    },
  },
];
