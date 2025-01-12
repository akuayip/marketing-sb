import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
            delay: 1000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <Card className="bg-white shadow-xl transform transition-transform hover:scale-105">
                <CardContent className="p-0">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href={`/product/${product.slug}`}>
                      <button className="px-4 py-2 border border-green-800 text-green-800 rounded-md hover:bg-green-800 hover:text-white transition-colors">
                        Lihat Detail
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white text-green-800 hover:bg-green-100 -left-12" />
        <CarouselNext className="bg-white text-green-800 hover:bg-green-100 -right-12" />
      </Carousel>
    </div>
  );
};

export default ProductList;
