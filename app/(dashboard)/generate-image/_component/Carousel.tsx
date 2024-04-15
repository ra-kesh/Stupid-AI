import React from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const CarouselComponent = ({ images, setSelectedImage }: { images: any[]; setSelectedImage: any }) => {
  return (
    <Carousel className="mx-auto max-w-md 4xl:max-w-4xl">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4 xl:basis-1/6"
              onClick={() => setSelectedImage(image)}
            >
              <div className="h-full p-1 ">
                <img src={image.url} alt="generated image" className=" rounded-xs size-full" />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
