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
    <div className="flex flex-col space-y-6 rounded-3xl bg-secondary-background lg:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-3">
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0">
              <CardTitle className="flex flex-row items-center lg:gap-x-3">
                <Image src={generateImageSvg} alt="generate an image" className="lg:size-6" />
                <span className="text-logo font-medium lg:text-sm lg:leading-5">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0">
              <span className="font-normal tracking-wider text-foreground lg:py-3 lg:text-[10px] lg:leading-3">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl">
                <span className="font-normal text-foreground lg:text-[10px]">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0">
              <CardTitle className="flex flex-row items-center lg:gap-x-3">
                <Image src={generateImageSvg} alt="generate an image" className="lg:size-6" />
                <span className="text-logo font-medium lg:text-sm lg:leading-5">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0">
              <span className="font-normal tracking-wider text-foreground lg:py-3 lg:text-[10px] lg:leading-3">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl">
                <span className="font-normal text-foreground lg:text-[10px]">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0">
              <CardTitle className="flex flex-row items-center lg:gap-x-3">
                <Image src={generateImageSvg} alt="generate an image" className="lg:size-6" />
                <span className="text-logo font-medium lg:text-sm lg:leading-5">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0">
              <span className="font-normal tracking-wider text-foreground lg:py-3 lg:text-[10px] lg:leading-3">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl">
                <span className="font-normal text-foreground lg:text-[10px]">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card">
            <CardHeader className="flex flex-row items-center justify-between lg:p-4 lg:pb-0">
              <CardTitle className="flex flex-row items-center lg:gap-x-3">
                <Image src={generateImageSvg} alt="generate an image" className="lg:size-6" />
                <span className="text-logo font-medium lg:text-sm lg:leading-5">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:p-4 lg:pt-0">
              <span className="font-normal tracking-wider text-foreground lg:py-3 lg:text-[10px] lg:leading-3">
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="border border-separator bg-button lg:h-8 lg:w-28 lg:rounded-2xl">
                <span className="font-normal text-foreground lg:text-[10px]">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7 lg:gap-x-4 ">
        <Card className="border-0 bg-inherit lg:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between px-0">
            <div className="flex flex-row items-center lg:gap-x-1">
              <Button className="hover:bg-hover bg-card lg:p-2">
                <ChevronLeft className="text-logo lg:size-6 " />
              </Button>
              <CardTitle className="text-logo font-bold tracking-wide lg:text-xl lg:leading-6">Billing</CardTitle>
            </div>
            <div className="flex flex-row items-center lg:gap-x-1">
              <Button className="gap-x-2 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-3">
                <FolderDown className="text-logo size-6" />
                Download
              </Button>
              <Button className="hover:bg-hover bg-card lg:p-2">
                <ChevronRight className="text-logo lg:size-6 " />
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
          <CardTitle className="text-logo py-8 font-bold leading-7 tracking-wide lg:text-xl">News</CardTitle>
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
