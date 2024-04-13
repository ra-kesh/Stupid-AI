import React from "react"
import Image from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import ImageGenerationForm from "./_component/ImageGenerationForm"
import imagegeneration from "/public/image_generation_v1.png"

const GenerateImage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-8">
      <Card className="bg-inherit  lg:col-span-5">
        <CardHeader className="px-0 text-2xl font-medium">Preview</CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 rounded-xl bg-card p-6 lg:grid-cols-2 xl:grid-cols-3">
          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />
          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />
          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />

          <Image src={imagegeneration} alt="generated image" className="lg:col-span-1" />
        </CardContent>
      </Card>
      <Card className=" bg-inherit lg:col-span-3">
        <CardHeader className="px-0 text-2xl font-medium">AI Image Generation</CardHeader>
        <CardContent className="gap-4 rounded-xl bg-form p-6 ">
          <ImageGenerationForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default GenerateImage
