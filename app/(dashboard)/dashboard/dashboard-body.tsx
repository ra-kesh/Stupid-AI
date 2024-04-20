import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, FolderDown } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import addReactionSvg from "/public/add_reaction.svg"
import generateImageSvg from "/public/generate_image_v1.svg"
import newReleasesSvg from "/public/new_releases.svg"
import pageInfoSvg from "/public/page_info.svg"

const DashboardBody = () => {
  return (
    <div className="flex flex-col space-y-6 rounded-3xl bg-secondary-background max-lg:p-8 lg:p-4 xl:p-6 2xl:p-10 4xl:p-14">
      {/* card container */}
      <div className=" grid grid-cols-1 gap-5  sm:grid-cols-2  md:max-lg:gap-10 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-12 4xl:gap-x-20">
        {/* card starts */}
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
              <CardTitle className="flex flex-row items-center gap-x-5 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
                <Image
                  src={generateImageSvg}
                  alt="generate an image"
                  className="size-7 lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
                />
                <span className="text-logo text-xl font-medium lg:text-sm lg:leading-5 xl:text-lg 2xl:text-2xl 4xl:text-3xl">
                  Generate an Image
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
              <span className="pb-5 text-xs font-normal tracking-wider text-foreground md:text-sm lg:py-4  lg:text-[.5rem] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5  2xl:py-6 4xl:py-8 4xl:text-lg">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-9 w-fit rounded-lg border border-separator bg-button md:max-lg:mt-5 lg:h-8 lg:w-2/3 lg:rounded-full xl:h-10 4xl:h-14">
                <span className="font-normal text-foreground md:text-xs lg:text-[.5rem] xl:text-xs 4xl:text-base">
                  Generate Image
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
              <CardTitle className="flex flex-row items-center gap-x-5 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
                <Image
                  src={addReactionSvg}
                  alt="generate an image"
                  className="size-7 lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
                />
                <span className="text-logo text-xl font-medium lg:text-sm lg:leading-5 xl:text-lg 2xl:text-2xl 4xl:text-3xl">
                  Generate a Deepfake
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
              <span className="pb-5 text-xs font-normal tracking-wider text-foreground md:text-sm lg:py-4  lg:text-[.5rem] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5  2xl:py-6 4xl:py-8 4xl:text-lg">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-9 w-fit rounded-lg border border-separator bg-button md:max-lg:mt-5 lg:h-8 lg:w-2/3 lg:rounded-full xl:h-10 4xl:h-14">
                <span className="font-normal text-foreground md:text-xs lg:text-[.5rem] xl:text-xs 4xl:text-base">
                  Generate Deepfake
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
              <CardTitle className="flex flex-row items-center gap-x-5 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
                <Image
                  src={newReleasesSvg}
                  alt="generate an image"
                  className="size-7 lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
                />
                <span className="text-logo text-xl font-medium lg:text-sm lg:leading-5 xl:text-lg 2xl:text-2xl 4xl:text-3xl">
                  Use AI Verifications
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
              <span className="pb-5 text-xs font-normal tracking-wider text-foreground md:text-sm lg:py-4  lg:text-[.5rem] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5  2xl:py-6 4xl:py-8 4xl:text-lg">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-9 w-fit rounded-lg border border-separator bg-button md:max-lg:mt-5 lg:h-8 lg:w-2/3 lg:rounded-full xl:h-10 4xl:h-14">
                <span className="font-normal text-foreground md:text-xs lg:text-[.5rem] xl:text-xs 4xl:text-base">
                  AI Verifications
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0 4xl:p-12 4xl:pb-0">
              <CardTitle className="flex flex-row items-center gap-x-5 lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6 4xl:gap-x-8">
                <Image
                  src={pageInfoSvg}
                  alt="generate an image"
                  className="size-7 lg:size-6 xl:size-8 2xl:size-10 4xl:size-14"
                />
                <span className="text-logo text-xl font-medium lg:text-sm lg:leading-5 xl:text-lg 2xl:text-2xl 4xl:text-3xl">
                  Use Content Utilities
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0 4xl:p-12 4xl:pt-0">
              <span className="pb-5 text-xs font-normal tracking-wider text-foreground md:text-sm lg:py-4  lg:text-[.5rem] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5  2xl:py-6 4xl:py-8 4xl:text-lg">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-9 w-fit rounded-lg border border-separator bg-button md:max-lg:mt-5 lg:h-8 lg:w-2/3 lg:rounded-full xl:h-10 4xl:h-14">
                <span className="font-normal text-foreground md:text-xs lg:text-[.5rem] xl:text-xs 4xl:text-base">
                  Content Utilities
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-14 4xl:gap-x-20 ">
        <Card className="border-0 bg-inherit lg:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between px-0">
            <div className="flex flex-row items-center lg:gap-x-1 4xl:gap-x-4">
              <Button className="hover:bg-hover bg-card lg:p-2 4xl:p-6 ">
                <ChevronLeft className="text-logo lg:size-6 4xl:size-10" />
              </Button>
              <CardTitle className="text-logo font-bold tracking-wide lg:text-lg lg:leading-6 xl:text-xl 4xl:text-3xl">
                Billing
              </CardTitle>
            </div>
            <div className="flex flex-row items-center lg:gap-x-1 4xl:gap-x-4">
              <Button className="xl:rounded-xs gap-x-2 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-3 lg:h-10 xl:p-5 4xl:px-8 4xl:py-7">
                <FolderDown className="text-logo size-6 lg:size-5 4xl:size-8" />
                <span className="hidden sm:block lg:text-xs xl:text-base 4xl:text-lg">Download</span>
              </Button>
              <Button className="hover:bg-hover bg-card lg:p-2 4xl:p-6">
                <ChevronRight className="text-logo lg:size-6 4xl:size-10" />
              </Button>
            </div>
          </CardHeader>
          <Separator className="h-[2px] bg-separator" />
          <CardContent className="px-0">
            <Table className="text-xs 4xl:text-sm">
              <TableHeader>
                <TableRow className="border-none hover:bg-inherit">
                  <TableHead className="text-foreground lg:p-6">Date</TableHead>
                  <TableHead className="text-foreground lg:p-6">Id</TableHead>
                  <TableHead className="text-foreground lg:p-6">Purchase Method</TableHead>
                  <TableHead className="text-foreground lg:p-6">Plan</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="rounded-3xl bg-card">
                <TableRow>
                  <TableCell className="rounded-tl-3xl text-foreground lg:p-6">20/01/204</TableCell>
                  <TableCell className="text-foreground lg:p-6">#5252661</TableCell>
                  <TableCell className="text-foreground lg:p-6">Crypto</TableCell>
                  <TableCell className="rounded-tr-3xl text-foreground lg:p-6">Business</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-foreground lg:p-6 ">20/01/204</TableCell>
                  <TableCell className="text-foreground lg:p-6">#5252661</TableCell>
                  <TableCell className="text-foreground lg:p-6">Crypto</TableCell>
                  <TableCell className="text-foreground lg:p-6">Business</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-foreground lg:p-6 ">20/01/204</TableCell>
                  <TableCell className="text-foreground lg:p-6">#5252661</TableCell>
                  <TableCell className="text-foreground lg:p-6">Crypto</TableCell>
                  <TableCell className="text-foreground lg:p-6">Business</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-foreground lg:p-6 ">20/01/204</TableCell>
                  <TableCell className="text-foreground lg:p-6">#5252661</TableCell>
                  <TableCell className="text-foreground lg:p-6">Crypto</TableCell>
                  <TableCell className="text-foreground lg:p-6">Business</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="rounded-bl-3xl text-foreground lg:p-6">20/01/204</TableCell>
                  <TableCell className="text-foreground lg:p-6">#5252661</TableCell>
                  <TableCell className="text-foreground lg:p-6">Crypto</TableCell>
                  <TableCell className="rounded-br-3xl text-foreground lg:p-6">Business</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="flex flex-col border-none bg-inherit lg:col-span-2">
          <CardTitle className="text-logo py-8 font-bold tracking-wide lg:text-lg lg:leading-6 xl:text-xl 4xl:text-3xl">
            News
          </CardTitle>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full  space-y-2 text-xs 4xl:text-sm">
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6  lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6 lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6 lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6 lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6 lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-1 "
                className="rounded-lg border-none bg-card px-6 lg:rounded-3xl lg:py-1 4xl:py-2"
              >
                <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                  NEWS WEEK 32
                </AccordionTrigger>
                <AccordionContent className="text-logo  text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardBody
