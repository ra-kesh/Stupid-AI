import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, FolderDown } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import generateImageSvg from "/public/generate_image_v1.svg"

const DashboardBody = () => {
  return (
    <div className="flex flex-col space-y-6 rounded-3xl bg-secondary-background lg:p-4 xl:p-6">
      <div className="4xl:gap-x-6 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-3 2xl:gap-x-4">
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="4xl:p-12 4xl:pb-0 flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0">
              <CardTitle className="4xl:gap-x-8 flex flex-row items-center lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6">
                <Image
                  src={generateImageSvg}
                  alt="generate an image"
                  className="4xl:size-14 lg:size-6 xl:size-8 2xl:size-10"
                />
                <span className="text-logo 4xl:text-5xl font-medium lg:text-sm lg:leading-5 xl:text-2xl 2xl:text-3xl">
                  Generate an Image
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="4xl:p-12 4xl:pt-0 flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0">
              <span className="4xl:text-lg font-normal tracking-wider text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5 2xl:py-6 2xl:text-sm">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="4xl:py-8 4xl:rounded-full 4xl:w-52 border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl xl:w-40 xl:rounded-full xl:py-5 2xl:py-6">
                <span className="4xl:text-base font-normal text-foreground lg:text-[10px] xl:text-sm">
                  Generate Image
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="4xl:p-12 4xl:pb-0 flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0">
              <CardTitle className="4xl:gap-x-8 flex flex-row items-center lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6">
                <Image
                  src={generateImageSvg}
                  alt="generate an image"
                  className="4xl:size-14 lg:size-6 xl:size-8 2xl:size-10"
                />
                <span className="text-logo 4xl:text-5xl font-medium lg:text-sm lg:leading-5 xl:text-2xl 2xl:text-3xl">
                  Generate an Image
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="4xl:p-12 4xl:pt-0 flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0">
              <span className="4xl:text-lg font-normal tracking-wider text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5 2xl:py-6 2xl:text-sm">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="4xl:py-8 4xl:rounded-full 4xl:w-52 border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl xl:w-40 xl:rounded-full xl:py-5 2xl:py-6">
                <span className="4xl:text-base font-normal text-foreground lg:text-[10px] xl:text-sm">
                  Generate Image
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="4xl:p-12 4xl:pb-0 flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0">
              <CardTitle className="4xl:gap-x-8 flex flex-row items-center lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6">
                <Image
                  src={generateImageSvg}
                  alt="generate an image"
                  className="4xl:size-14 lg:size-6 xl:size-8 2xl:size-10"
                />
                <span className="text-logo 4xl:text-5xl font-medium lg:text-sm lg:leading-5 xl:text-2xl 2xl:text-3xl">
                  Generate an Image
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="4xl:p-12 4xl:pt-0 flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0">
              <span className="4xl:text-lg font-normal tracking-wider text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5 2xl:py-6 2xl:text-sm">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="4xl:py-8 4xl:rounded-full 4xl:w-52 border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl xl:w-40 xl:rounded-full xl:py-5 2xl:py-6">
                <span className="4xl:text-base font-normal text-foreground lg:text-[10px] xl:text-sm">
                  Generate Image
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="4xl:p-12 4xl:pb-0 flex flex-row items-center justify-between lg:p-4 lg:pb-0 xl:p-6 xl:pb-0 2xl:p-8 2xl:pb-0">
              <CardTitle className="4xl:gap-x-8 flex flex-row items-center lg:gap-x-3 xl:gap-x-5 2xl:gap-x-6">
                <Image
                  src={generateImageSvg}
                  alt="generate an image"
                  className="4xl:size-14 lg:size-6 xl:size-8 2xl:size-10"
                />
                <span className="text-logo 4xl:text-5xl font-medium lg:text-sm lg:leading-5 xl:text-2xl 2xl:text-3xl">
                  Generate an Image
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="4xl:p-12 4xl:pt-0 flex flex-col lg:p-4 lg:pt-0 xl:p-6 xl:pt-0 2xl:p-8 2xl:pt-0">
              <span className="4xl:text-lg font-normal tracking-wider text-foreground lg:py-4 lg:text-[9px] lg:leading-3 xl:py-5 xl:text-xs xl:leading-5 2xl:py-6 2xl:text-sm">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="4xl:py-8 4xl:rounded-full 4xl:w-52 border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl xl:w-40 xl:rounded-full xl:py-5 2xl:py-6">
                <span className="4xl:text-base font-normal text-foreground lg:text-[10px] xl:text-sm">
                  Generate Image
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7 lg:gap-x-4 ">
        <Card className="border-0 bg-inherit lg:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between px-0">
            <div className="4xl:gap-x-4 flex flex-row items-center lg:gap-x-1">
              <Button className="hover:bg-hover 4xl:p-6 bg-card lg:p-2 ">
                <ChevronLeft className="text-logo 4xl:size-10 lg:size-6" />
              </Button>
              <CardTitle className="text-logo 4xl:text-4xl font-bold tracking-wide lg:text-xl lg:leading-6 xl:text-2xl 2xl:text-3xl">
                Billing
              </CardTitle>
            </div>
            <div className="4xl:gap-x-4 flex flex-row items-center lg:gap-x-1">
              <Button className="4xl:px-8 4xl:py-7 xl:rounded-xs gap-x-2 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-3 xl:p-5">
                <FolderDown className="text-logo 4xl:size-8 size-6 " />
                <span className="4xl:text-lg xl:text-base">Download</span>
              </Button>
              <Button className="hover:bg-hover 4xl:p-6 bg-card lg:p-2">
                <ChevronRight className="text-logo 4xl:size-10 lg:size-6" />
              </Button>
            </div>
          </CardHeader>
          <Separator className="h-[2px] bg-separator" />
          <CardContent className="px-0">
            <Table>
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
          <CardTitle className="text-logo 4xl:text-4xl py-8 font-bold tracking-wide lg:text-xl lg:leading-6 xl:text-2xl 2xl:text-3xl">
            News
          </CardTitle>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full  lg:space-y-2">
              <AccordionItem value="item-1 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6 " className="border-none bg-card px-6 py-2 lg:rounded-3xl">
                <AccordionTrigger className="text-logo lg:tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
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
