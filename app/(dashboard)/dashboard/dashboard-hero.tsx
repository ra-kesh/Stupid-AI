import React from "react"
import Image from "next/image"
import { ArrowRight, ImagePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import addReactionSvg from "/public/add_reaction.svg"
import generateImageSvg from "/public/generate_image_v1.svg"
import groupSvg from "/public/Group 11.svg"
import newReleasesSvg from "/public/new_releases.svg"
import pageInfoSvg from "/public/page_info.svg"

const DashboardHero = () => {
  return (
    <div className="grid w-full grid-cols-1 py-8 lg:grid-cols-12 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-10 4xl:gap-x-12">
      <div className="flex size-full flex-col lg:col-span-9">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-logo  text-[1.4rem] font-bold tracking-wider sm:text-[1.6rem] md:text-[1.8rem] lg:text-2xl xl:text-4xl 2xl:text-[2.4rem] 4xl:text-5xl">
            Welcome to CupidAI
          </h2>
          <div className="flex items-center space-x-2 ">
            <div className="hidden size-8 items-center justify-center rounded-full border border-separator bg-button  sm:flex md:size-8 xl:size-10 2xl:size-10 4xl:size-14">
              <span className="text-foreground sm:text-xs xl:text-sm 4xl:text-xl">+5</span>
            </div>

            <Button className="h-8 gap-x-2 rounded-full border border-separator bg-button px-2 lg:p-3 xl:h-10 4xl:h-14 4xl:px-6">
              <ImagePlus className="size-4 xl:size-5 4xl:size-7" />
              <span className="hidden text-foreground sm:block md:text-xs xl:text-sm  2xl:text-sm 4xl:text-lg">
                {" "}
                Invite Member
              </span>
            </Button>
          </div>
        </div>
        <div
          className="flex w-full flex-row gap-2 overflow-hidden 
          pt-5 max-lg:flex-wrap md:max-lg:pt-10 lg:mt-auto xl:justify-between 3xl:space-x-3"
        >
          <Button className="h-8 gap-x-2  rounded-full border border-separator bg-button max-md:px-4 md:h-10 lg:h-8 lg:p-3 xl:h-9 xl:px-5 4xl:h-14 4xl:gap-x-4 4xl:px-6 ">
            <Image
              src={generateImageSvg}
              alt="generate an image"
              className="size-4 md:size-5 lg:size-3 xl:size-4   4xl:size-7"
            />
            <span className="text-[6px] font-normal text-foreground  md:text-[8px] lg:text-[8px] xl:text-xs 2xl:text-sm 4xl:text-lg">
              Images generated: 531
            </span>
          </Button>
          <Button className="h-8 gap-x-2  rounded-full border border-separator bg-button max-md:px-4 md:h-10 lg:h-8 lg:p-3 xl:h-9 xl:px-5 4xl:h-14 4xl:gap-x-4 4xl:px-6 ">
            <Image
              src={addReactionSvg}
              alt="generate an image"
              className="size-4 md:size-5 lg:size-3 xl:size-4   4xl:size-7"
            />
            <span className="text-[6px] font-normal text-foreground sm:text-[8px] lg:text-[8px] xl:text-xs 2xl:text-sm 4xl:text-lg">
              Deepfakes generated: 842
            </span>
          </Button>
          <Button className="h-8 gap-x-2  rounded-full border border-separator bg-button max-md:px-4 md:h-10 lg:h-8 lg:p-3 xl:h-9 xl:px-5 4xl:h-14 4xl:gap-x-4 4xl:px-6 ">
            <Image
              src={newReleasesSvg}
              alt="generate an image"
              className="size-4 md:size-5 lg:size-3 xl:size-4   4xl:size-7"
            />
            <span className="text-[6px] font-normal text-foreground sm:text-[8px] lg:text-[8px] xl:text-xs 2xl:text-sm 4xl:text-lg">
              AI verifications generated: 141
            </span>
          </Button>
          <Button className="h-8 gap-x-2  rounded-full border border-separator bg-button max-md:px-4 md:h-10 lg:h-8 lg:p-3 xl:h-9 xl:px-5 4xl:h-14 4xl:gap-x-4 4xl:px-6 ">
            <Image
              src={pageInfoSvg}
              alt="generate an image"
              className="size-4 md:size-5 lg:size-3 xl:size-4   4xl:size-7"
            />
            <span className="text-[6px] font-normal text-foreground sm:text-[8px] lg:text-[8px] xl:text-xs 2xl:text-sm 4xl:text-lg">
              Content utilities: 353
            </span>
          </Button>

          <Button className="hidden h-8 gap-x-2  rounded-full border border-separator bg-button max-md:px-4 md:h-10 lg:h-8 lg:p-3 xl:h-9 xl:px-5 3xl:flex 4xl:h-14 4xl:gap-x-4 4xl:px-6">
            <Image
              src={groupSvg}
              alt="generate an image"
              className="size-4 md:size-5 lg:size-3 xl:size-4   4xl:size-7"
            />
            <span className="text-[6px] font-normal text-foreground sm:text-[8px] lg:text-[8px] xl:text-xs 2xl:text-sm 4xl:text-lg">
              People referred: 14
            </span>
          </Button>
        </div>
      </div>
      <div className="hidden lg:col-span-3 lg:block">
        <Card className="space-y-2 border-none bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-sm  xl:p-1 2xl:rounded-2xl 2xl:p-2 4xl:p-4">
          <CardHeader className="flex flex-row items-center justify-between lg:p-3 lg:pb-0 xl:p-4 xl:pb-0 4xl:p-6 4xl:pb-0 ">
            <CardTitle className="pb-1 font-medium leading-7 tracking-wide text-primary lg:text-sm xl:text-xl 2xl:text-[1.3rem]  4xl:text-4xl">
              Upgrade your plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full flex-row justify-between lg:p-3 lg:pr-0 lg:pt-0 xl:p-4 xl:pt-0 4xl:p-6 4xl:pt-0">
            <p className="text-foreground lg:text-[8px] xl:text-[11px] 2xl:text-sm 4xl:text-xl">
              Enjoy the power of AI with one of our paid plans
            </p>
            <Button variant={"ghost"} className="hover:bg-inherit lg:mt-auto lg:h-5 lg:px-3 xl:h-7 4xl:h-10">
              <ArrowRight className="text-primary lg:size-5  xl:size-6 2xl:size-8 4xl:size-10" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardHero
