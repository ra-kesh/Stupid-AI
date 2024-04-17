"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"

import { CarouselDeepFake } from "../content-deepfake/CarouselDeepfake"
import { CarouselComponent } from "../generate-image/_component/Carousel"
import { images } from "../generate-image/images"

// import { CarouselDeepFake } from "./CarouselDeepfake"

const AiPreview = () => {
  const [selectedImage, setSelectedImage] = useState<{
    id: number | null
    url: string
  }>({
    id: 223991,
    url: "/verification-girl-2-v1.png",
  })
  return (
    <div className="space-y-2 ">
      <div className="mx-auto rounded-t-lg bg-form p-4 xl:p-8  2xl:p-10 4xl:rounded-t-3xl 4xl:p-12">
        <img src={selectedImage.url} alt="selected image " className="mx-auto w-1/2 rounded-t-lg" />
        <div className="flex w-full justify-center lg:pt-6 4xl:pt-10">
          <Button className=" mr-auto bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-xl lg:px-8  2xl:h-10 2xl:px-10 4xl:w-1/5 4xl:rounded-3xl 4xl:py-8 4xl:text-xl ">
            Download
          </Button>
          <div className="space-x-1 xl:space-x-2 2xl:space-x-4">
            <Button
              variant={"outline"}
              className="border-separator bg-button  lg:h-8 lg:rounded-sm lg:text-[9px]  xl:h-10 xl:rounded-sm xl:text-xs 2xl:text-sm 4xl:h-16 4xl:text-lg"
            >
              Isolate 1
            </Button>
            <Button
              variant={"outline"}
              className="border-separator bg-button  lg:h-8 lg:rounded-sm lg:text-[9px]  xl:h-10 xl:rounded-sm xl:text-xs 2xl:text-sm 4xl:h-16 4xl:text-lg"
            >
              Isolate 1
            </Button>
            <Button
              variant={"outline"}
              className="border-separator bg-button  lg:h-8 lg:rounded-sm lg:text-[9px]  xl:h-10 xl:rounded-sm xl:text-xs 2xl:text-sm 4xl:h-16 4xl:text-lg"
            >
              Isolate 1
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-b-lg bg-form py-6 4xl:rounded-b-3xl">
        <CarouselDeepFake images={images} setSelectedImage={setSelectedImage} />
      </div>
    </div>
  )
}

export default AiPreview
