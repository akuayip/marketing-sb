import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProductImageProps {
  images: string[];
  fallbackImage: string;
  title: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
  images,
  fallbackImage,
  title,
}) => {
  return (
    <div className="mb-8">
      {images && images.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="p-2">
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <img
          src={fallbackImage}
          alt={title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      )}    
    </div>
  );
};

export default ProductImage;
