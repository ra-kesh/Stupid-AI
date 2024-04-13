import React from "react"
import Image from "next/image"
import { ArrowRight, ImagePlus } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import generateImageSvg from "/public/generate_image_v1.svg"

const DashboardHero = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-x-4 py-8 lg:grid-cols-12">
      <div className="flex size-full flex-col lg:col-span-9">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-logo text-4xl font-bold tracking-wider">Welcome to CupidAI</h2>
          <div className="flex items-center space-x-2 ">
            <Avatar className=" h-10 w-10 border border-separator sm:flex">
              <AvatarFallback className="text-logo bg-button"> +5</AvatarFallback>
            </Avatar>

            <Button className="h-11 gap-x-4 rounded-3xl border border-separator bg-button">
              <ImagePlus />
              Invite Member
            </Button>
          </div>
        </div>
        <div className="mt-auto flex  w-full flex-row space-x-4 overflow-scroll">
          <Button className="h-11 flex-auto  rounded-3xl border border-separator bg-button xl:gap-x-4">
            <Image src={generateImageSvg} alt="generate an image" className="hidden size-5 2xl:block" />
            <span className="text-textforeground text-xs font-normal">Images Generated: 531</span>
          </Button>
          <Button className="h-11 flex-auto gap-x-4 rounded-3xl border border-separator bg-button">
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
          </Button>
        </div>
      </div>
      <div className="lg:col-span-3 ">
        <Card className="space-y-2 border-none bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="pb-0 font-medium leading-7 tracking-wide text-primary lg:text-lg">
              Upgrade your plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-full flex-row justify-between pr-0">
            <p className="text-foreground lg:text-[12px] ">Enjoy the power of AI with one of our paid plans</p>
            <Button variant={"ghost"} className="hover:bg-inherit">
              <ArrowRight className="text-primary " />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardHero
