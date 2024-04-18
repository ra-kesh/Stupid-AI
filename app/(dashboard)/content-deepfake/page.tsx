import React from "react"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import DeepfakePreview from "./deepfake-preview"
import DeepFakeForm from "./DeepFakeForm"
import DeepFakeHistoryTable from "./DepakeHistory"
import generateImageSvg from "/public/generate_image_v1.svg"

const ContentDeepfake = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-10">
      <div className="col-span-12 w-full lg:col-span-5">
        <Card className="bg-inherit">
          <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
            Preview
          </CardHeader>
          <CardContent className="w-full gap-4 rounded-xl  px-0">
            <DeepfakePreview />
          </CardContent>
        </Card>
        <Card className="bg-form">
          <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
            <CardTitle className="flex flex-row items-center gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
              <Image
                src={generateImageSvg}
                alt="generate an image"
                className="size-8 lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
              />
              <span className="text-logo text-xl font-medium lg:text-sm lg:leading-5 xl:text-xl  4xl:text-4xl">
                0 Deepfakes Generated
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
            <span className="text-xs font-normal text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-3 xl:text-[10px] xl:leading-4  2xl:text-xs 2xl:leading-5 4xl:text-lg">
              You can track your deepfake generator usage here, some plans have restricted daily/weekly/monthly usage,
              which you can track here along with the time you will be able to generate deepfakes again
            </span>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-12 w-full bg-inherit lg:col-span-7">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          AI Deepfake Generation
        </CardHeader>
        <CardContent className="w-full gap-4 rounded-2xl bg-form p-6 lg:p-3  xl:p-6 2xl:p-8 4xl:rounded-3xl 4xl:p-10">
          <DeepFakeForm />
        </CardContent>
      </Card>
      <DeepFakeHistoryTable />
    </div>
  )
}

export default ContentDeepfake
