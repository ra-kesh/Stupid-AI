import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import HistoryTable from "./_component/HistoryTable"
import ImageGenerationForm from "./_component/ImageGenerationForm"
import Preview from "./_component/Preview"

const GenerateImage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-8">
      <Preview />
      <Card className=" bg-inherit lg:col-span-3">
        <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">AI Image Generation</CardHeader>
        <CardContent className="gap-4 rounded-xl bg-form lg:p-3 xl:p-6 4xl:rounded-3xl 4xl:p-10">
          <ImageGenerationForm />
        </CardContent>
      </Card>
      <HistoryTable />
    </div>
  )
}

export default GenerateImage

export const images = [
  {
    id: 20991,
    url: "/image_gen_9_v1.png",
  },
  {
    id: 209,
    url: "/image_generation_2_v1.png",
  },
  {
    id: 209918,
    url: "/image_generation_3_v1.png",
  },
  {
    id: 20840,
    url: "/image_generation_4_v1.png",
  },
  {
    id: 2840,
    url: "/image_generation_5_v1.png",
  },
  {
    id: 2090,
    url: "/image_generation_6_v1.png",
  },
  {
    id: 1840,
    url: "/image_generation_3_v1.png",
  },

  {
    id: 91840,
    url: "/image_generation_2_v1.png",
  },
  {
    id: 240,
    url: "/image_generation_v1.png",
  },
]
