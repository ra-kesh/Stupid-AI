import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import HistoryTable from "./_component/HistoryTable"
import ImageGenerationForm from "./_component/ImageGenerationForm"
import Preview from "./_component/Preview"

const GenerateImage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-12 2xl:gap-x-10 4xl:gap-x-16">
      <Preview />
      <Card className=" bg-inherit lg:col-span-5">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          AI Image Generation
        </CardHeader>
        <CardContent className=" rounded-xl bg-form p-6 lg:p-3 lg:py-2  xl:p-4 xl:py-3 2xl:p-6 4xl:rounded-3xl 4xl:p-10">
          <ImageGenerationForm />
        </CardContent>
      </Card>
      <div className="lg:col-span-12">
        <HistoryTable />
      </div>
    </div>
  )
}

export default GenerateImage
