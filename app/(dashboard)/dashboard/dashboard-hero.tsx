import React from "react"
import Image from "next/image"
import { ArrowRight, ImagePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import generateImageSvg from "/public/generate_image_v1.svg"

const DashboardHero = () => {
  return (
    <div className="grid w-full grid-cols-1 py-8 lg:grid-cols-12 lg:gap-x-2">
      <div className="flex size-full flex-col lg:col-span-9">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-logo font-bold tracking-wider lg:text-2xl xl:text-4xl">Welcome to CupidAI</h2>
          <div className="flex items-center space-x-2 ">
            <div className="flex items-center justify-center rounded-full border border-separator bg-button lg:size-6">
              <span className="text-foreground lg:text-xs">+5</span>
            </div>

            <Button className=" rounded-3xl border border-separator bg-button lg:h-8 lg:gap-x-2 lg:px-3">
              <ImagePlus className="lg:size-4" />
              <span className="text-foreground lg:text-xs"> Invite Member</span>
            </Button>
          </div>
        </div>
        <div className="mt-auto flex  w-full flex-row overflow-hidden lg:space-x-1">
          <Button className="rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="lg:size-3 2xl:block" />
            <span className="font-normal text-foreground lg:text-[8px]">Images Generated: 531</span>
          </Button>
          <Button className="rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="lg:size-3 2xl:block" />
            <span className="font-normal text-foreground lg:text-[8px]">Images Generated: 531</span>
          </Button>
          <Button className="rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="lg:size-3 2xl:block" />
            <span className="font-normal text-foreground lg:text-[8px]">Images Generated: 531</span>
          </Button>
          <Button className="rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="lg:size-3 2xl:block" />
            <span className="font-normal text-foreground lg:text-[8px]">Images Generated: 531</span>
          </Button>

          {/* <Button className="h-11 flex-auto gap-x-4 rounded-3xl border border-separator bg-button">
            <Image src={generateImageSvg} alt="generate an image" className="hidden size-5 2xl:block" />
            <span className="text-textforeground text-xs font-normal">Deepfakes generated: 842</span>
          </Button>
          <Button className="h-11 flex-auto gap-x-4 rounded-3xl border border-separator bg-button">
            <Image src={generateImageSvg} alt="generate an image" className="hidden size-5 2xl:block" />
            <span className="text-textforeground text-xs font-normal">AI Verifications generated:141</span>
          </Button>
          <Button className="h-11 flex-auto gap-x-2 rounded-3xl border border-separator bg-button  xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="hidden size-5 2xl:block" />
            <span className="text-textforeground text-xs font-normal">Content Utilities used: 353</span>
          </Button>
          <Button className="hidden h-11 flex-auto gap-x-4 rounded-3xl border border-separator bg-button 2xl:flex">
            <Image src={generateImageSvg} alt="generate an image" className="hidden size-5 2xl:block" />
            <span className="text-textforeground text-xs font-normal">Content Utilities used: 353</span>
          </Button> */}
        </div>
      </div>
      <div className="lg:col-span-3">
        <Card className="space-y-2 border-none bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-sm">
          <CardHeader className="flex flex-row items-center justify-between lg:p-3 lg:pb-0">
            <CardTitle className="pb-0 font-medium leading-7 tracking-wide text-primary lg:text-sm">
              Upgrade your plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full flex-row justify-between lg:p-3 lg:pr-0  lg:pt-0">
            <p className="text-foreground lg:text-[8px] ">Enjoy the power of AI with one of our paid plans</p>
            <Button variant={"ghost"} className="hover:bg-inherit lg:mt-auto lg:h-5 lg:px-3">
              <ArrowRight className="text-primary " />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardHero
