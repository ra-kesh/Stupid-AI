"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"

import { CarouselComponent } from "../generate-image/_component/Carousel"
import { images } from "../generate-image/images"
import { CarouselDeepFake } from "./CarouselDeepfake"

const DeepfakePreview = () => {
  const [selectedImage, setSelectedImage] = useState<{
    id: number | null
    url: string
  }>({
    id: 20991,
    url: "/image_gen_9_v1.png",
  })
  return (
    <div className="space-y-2 ">
      <div className="mx-auto rounded-t-lg bg-form  4xl:rounded-t-3xl ">
        <img src={selectedImage.url} alt="selected image " className="w-full rounded-t-lg" />
        <div className="flex w-full justify-center py-6 4xl:pt-10">
          <Button className=" m-auto bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-8 lg:rounded-xl lg:px-8  2xl:h-10 2xl:px-10 4xl:w-1/5 4xl:rounded-3xl 4xl:py-8 4xl:text-xl ">
            Download
          </Button>
        </div>
      </div>
      <div className="rounded-b-lg bg-form py-6 4xl:rounded-b-3xl">
        <CarouselDeepFake images={images} setSelectedImage={setSelectedImage} />
      </div>
    </div>
  )
}

export default DeepfakePreview
