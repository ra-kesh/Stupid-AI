"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { images } from "../images"
import { CarouselComponent } from "./Carousel"
import ImageGrid from "./ImageGrid"

const Preview = () => {
  const [selectedImage, setSelectedImage] = useState<{
    id: number | null
    url: string
  }>({
    id: null,
    url: "",
  })

  return (
    <Card className="bg-inherit lg:col-span-7">
      <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
        Preview
      </CardHeader>
      <CardContent className=" w-full px-0 ">
        {selectedImage.url ? (
          <div className="space-y-2">
            <div className="mx-auto rounded-t-lg bg-form p-4 sm:p-8 md:p-6 lg:p-3 xl:p-4 4xl:rounded-t-3xl 4xl:p-10">
              <img src={selectedImage.url} alt="selected image " className="w-full rounded-t-lg" />
              <div className="flex w-full justify-center pt-6 4xl:pt-10">
                <Button className=" m-auto bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-5 md:px-8 lg:rounded-xl  2xl:h-12 2xl:px-16 4xl:w-1/5 4xl:rounded-3xl 4xl:py-8 4xl:text-xl ">
                  Download
                </Button>
              </div>
            </div>
            <div className="rounded-b-lg bg-form py-6 4xl:rounded-b-3xl">
              <CarouselComponent images={images} setSelectedImage={setSelectedImage} />
            </div>
          </div>
        ) : (
          <ImageGrid images={images} setSelectedImage={setSelectedImage} />
        )}
      </CardContent>
    </Card>
  )
}

export default Preview
