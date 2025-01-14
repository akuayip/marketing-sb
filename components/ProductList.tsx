import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { products } from "@/assets/data";
import Link from "next/link";

const ProductList: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="bg-white shadow-xl transform transition-transform hover:scale-105 h-full">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  {/* Wrapper untuk gambar */}
                  <div className="overflow-hidden rounded-lg mb-4 relative group h-48">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {product.description}
                    </p>
                    <Link href={`/product/${product.slug}`}>
                      <button className="px-4 py-2 mt-auto border border-green-800 text-green-800 rounded-md hover:bg-green-800 hover:text-white transition-colors">
                        Lihat Detail
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductList;
