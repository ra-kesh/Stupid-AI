import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import DeepfakePreview from "./deepfake-preview"

const ContentDeepfake = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-12">
      <Card className=" bg-inherit lg:col-span-5  ">
        <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">Preview</CardHeader>
        <CardContent className="gap-4 rounded-xl  px-0">
          <DeepfakePreview />
        </CardContent>
      </Card>

      <Card className=" bg-inherit lg:col-span-7 ">
        <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">AI Deepfake Generation</CardHeader>
        <CardContent className="gap-4 rounded-xl bg-form lg:p-3 xl:p-4  4xl:rounded-3xl 4xl:p-10">
          {/* <ImageGenerationForm /> */}
        </CardContent>
      </Card>
      {/* <HistoryTable /> */}
    </div>
  )
}

export default ContentDeepfake
