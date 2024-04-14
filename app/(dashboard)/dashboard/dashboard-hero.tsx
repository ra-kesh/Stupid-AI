import React from "react"
import Image from "next/image"
import { ArrowRight, ImagePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import generateImageSvg from "/public/generate_image_v1.svg"

const DashboardHero = () => {
  return (
    <div className="4xl:gap-x-6 grid w-full grid-cols-1 py-8 lg:grid-cols-12 lg:gap-x-2 xl:gap-x-3 2xl:gap-x-4">
      <div className="flex size-full flex-col lg:col-span-9">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-logo 3xl:text-5xl 4xl:text-6xl font-bold tracking-wider lg:text-2xl xl:text-4xl">
            Welcome to CupidAI
          </h2>
          <div className="flex items-center space-x-2 ">
            <div className="4xl:size-14 flex items-center justify-center rounded-full border border-separator bg-button lg:size-6 xl:size-9 2xl:size-10">
              <span className="4xl:text-lg text-foreground lg:text-xs xl:text-sm">+5</span>
            </div>

            <Button className=" 4xl:px-10 4xl:py-7 4xl:rounded-full 4xl:gap-x-4 rounded-3xl border border-separator bg-button lg:h-8 lg:gap-x-2 lg:px-3 xl:p-5 2xl:px-8 2xl:py-5">
              <ImagePlus className="4xl:size-8 lg:size-4 xl:size-5 2xl:size-6" />
              <span className="4xl:text-xl xl:tex-sm text-foreground lg:text-xs 2xl:text-base"> Invite Member</span>
            </Button>
          </div>
        </div>
        <div className="4xl:space-x-6 mt-auto  flex w-full flex-row overflow-hidden lg:space-x-1 xl:space-x-2 2xl:space-x-4">
          <Button className="4xl:py-8 4xl:rounded-full rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4 xl:py-5">
            <Image
              src={generateImageSvg}
              alt="generate an image"
              className="4xl:size-8 lg:size-3 xl:size-5 2xl:size-6"
            />
            <span className="4xl:text-xl font-normal text-foreground lg:text-[8px] xl:text-xs 2xl:text-sm">
              Images Generated: 531
            </span>
          </Button>
          <Button className="4xl:py-8 4xl:rounded-full rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4 xl:py-5">
            <Image
              src={generateImageSvg}
              alt="generate an image"
              className="4xl:size-8 lg:size-3 xl:size-5 2xl:size-6"
            />
            <span className="4xl:text-xl font-normal text-foreground lg:text-[8px] xl:text-xs 2xl:text-sm">
              Images Generated: 531
            </span>
          </Button>
          <Button className="4xl:py-8 4xl:rounded-full rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4 xl:py-5">
            <Image
              src={generateImageSvg}
              alt="generate an image"
              className="4xl:size-8 lg:size-3 xl:size-5 2xl:size-6"
            />
            <span className="4xl:text-xl font-normal text-foreground lg:text-[8px] xl:text-xs 2xl:text-sm">
              Images Generated: 531
            </span>
          </Button>
          <Button className="4xl:py-8 4xl:rounded-full rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4 xl:py-5">
            <Image
              src={generateImageSvg}
              alt="generate an image"
              className="4xl:size-8 lg:size-3 xl:size-5 2xl:size-6"
            />
            <span className="4xl:text-xl font-normal text-foreground lg:text-[8px] xl:text-xs 2xl:text-sm">
              Images Generated: 531
            </span>
          </Button>
          {/* <Button className="rounded-3xl border  border-separator bg-button lg:h-8 lg:flex-1 lg:gap-x-1 xl:flex-auto xl:gap-x-4">
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
          </Button> */}

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
          <CardHeader className="4xl:p-6 4xl:pb-0 flex flex-row items-center justify-between lg:p-3 lg:pb-0 xl:p-4 xl:pb-0 ">
            <CardTitle className="4xl:text-4xl pb-1 font-medium leading-7 tracking-wide text-primary lg:text-sm xl:text-xl 2xl:text-2xl">
              Upgrade your plan
            </CardTitle>
          </CardHeader>
          <CardContent className="4xl:p-6 4xl:pt-0 flex w-full flex-row justify-between lg:p-3 lg:pr-0 lg:pt-0 xl:p-4 xl:pt-0">
            <p className="4xl:text-xl text-foreground lg:text-[8px] xl:text-[11px] 2xl:text-sm">
              Enjoy the power of AI with one of our paid plans
            </p>
            <Button variant={"ghost"} className="4xl:h-10 hover:bg-inherit lg:mt-auto lg:h-5 lg:px-3 xl:h-7">
              <ArrowRight className="4xl:size-10 text-primary  lg:size-5 xl:size-6 2xl:size-8" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardHero
