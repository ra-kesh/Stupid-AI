"use client"

import React, { useState } from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { images } from "../page"
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
    <Card className="bg-inherit lg:col-span-5">
      <CardHeader className="px-0 text-2xl font-medium">Preview</CardHeader>
      <CardContent className=" w-full px-0">
        {selectedImage.url ? (
          <div className="space-y-2">
            <div className="mx-auto rounded-t-lg bg-form p-6">
              <img src={selectedImage.url} alt="selected image " className="w-full rounded-t-lg" />
            </div>
            <div className="rounded-b-lg bg-form py-6">
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
