import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import HistoryTable from "./_component/HistoryTable"
import ImageGenerationForm from "./_component/ImageGenerationForm"
import Preview from "./_component/Preview"

const GenerateImage = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-8">
      <Preview />
      <Card className=" bg-inherit lg:col-span-3 ">
        <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">AI Image Generation</CardHeader>
        <CardContent className="gap-4 rounded-xl bg-form lg:p-3 xl:p-4  4xl:rounded-3xl 4xl:p-10">
          <ImageGenerationForm />
        </CardContent>
      </Card>
      <HistoryTable />
    </div>
  )
}

export default GenerateImage
