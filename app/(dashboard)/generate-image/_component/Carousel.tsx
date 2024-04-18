import React from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const CarouselComponent = ({ images, setSelectedImage }: { images: any[]; setSelectedImage: any }) => {
  return (
    <Carousel className="mx-auto max-w-36 sm:max-w-48 md:max-w-xs xl:max-w-md 2xl:max-w-lg 4xl:max-w-4xl ">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              className="basis-1/3 pl-1  sm:basis-1/4 lg:basis-1/3  xl:basis-1/4 2xl:basis-1/5 4xl:basis-1/6"
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
