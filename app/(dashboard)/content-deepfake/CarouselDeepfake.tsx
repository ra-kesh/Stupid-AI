import React from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const CarouselDeepFake = ({ images, setSelectedImage }: { images: any[]; setSelectedImage: any }) => {
  return (
    <Carousel className="mx-auto max-w-36 sm:max-w-xs md:max-w-sm lg:max-w-40 xl:max-w-xs  2xl:max-w-md 4xl:max-w-lg">
      <CarouselContent className="-ml-1">
        {images.map((image, index) => {
          return (
            <CarouselItem
              key={index}
              className="basis-1/3 pl-1  lg:basis-1/3  xl:basis-1/4 4xl:basis-1/5"
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
