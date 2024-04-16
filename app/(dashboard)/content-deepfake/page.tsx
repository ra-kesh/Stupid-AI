import React from "react"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import DeepfakePreview from "./deepfake-preview"
import DeepFakeForm from "./DeepFakeForm"
import DeepFakeHistoryTable from "./DepakeHistory"
import generateImageSvg from "/public/generate_image_v1.svg"

const ContentDeepfake = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-12">
      <div className=" lg:col-span-5">
        <Card className="bg-inherit">
          <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">Preview</CardHeader>
          <CardContent className="gap-4 rounded-xl  px-0">
            <DeepfakePreview />
          </CardContent>
        </Card>
        <Card className="bg-form">
          <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
            <CardTitle className="flex flex-row items-center lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
              <Image
                src={generateImageSvg}
                alt="generate an image"
                className="lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
              />
              <span className="text-logo font-medium lg:text-sm lg:leading-5 xl:text-2xl 2xl:text-3xl 4xl:text-5xl">
                0 Deepfakes Generated
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
            <span className="font-normal text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5 2xl:py-6 2xl:text-sm 4xl:text-lg">
              You can track your deepfake generator usage here, some plans have restricted daily/weekly/monthly usage,
              which you can track here along with the time you will be able to generate deepfakes again
            </span>
          </CardContent>
        </Card>
      </div>

      <Card className=" bg-inherit lg:col-span-7 ">
        <CardHeader className="px-0 text-2xl font-medium 2xl:text-3xl 4xl:text-4xl">AI Deepfake Generation</CardHeader>
        <CardContent className="gap-4 rounded-xl bg-form lg:p-3 xl:p-4  4xl:rounded-3xl 4xl:p-10">
          <DeepFakeForm />
        </CardContent>
      </Card>
      <DeepFakeHistoryTable />
    </div>
  )
}

export default ContentDeepfake
