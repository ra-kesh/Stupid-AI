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
    // eslint-disable-next-line tailwindcss/classnames-order
    <div className="bg-secondary-background flex flex-col space-y-6 rounded-3xl p-6">
      <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-4">
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="flex flex-row gap-x-4">
                <Image src={generateImageSvg} alt="generate an image" />
                <span className="text-logo text-2xl font-medium leading-7">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ">
              <span className="text-textforeground py-6 text-sm font-normal leading-5 tracking-wider">
                {" "}
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-11 w-[140px] gap-x-4 rounded-3xl border border-separator bg-button ">
                <span className="text-textforeground text-xs font-normal">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="flex flex-row gap-x-4">
                <Image src={generateImageSvg} alt="generate an image" />
                <span className="text-logo text-2xl font-medium leading-7">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ">
              <span className="text-textforeground py-6 text-sm font-normal leading-5 tracking-wider">
                {" "}
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-11 w-[140px] gap-x-4 rounded-3xl border border-separator bg-button ">
                <span className="text-textforeground text-xs font-normal">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="flex flex-row gap-x-4">
                <Image src={generateImageSvg} alt="generate an image" />
                <span className="text-logo text-2xl font-medium leading-7">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ">
              <span className="text-textforeground py-6 text-sm font-normal leading-5 tracking-wider">
                {" "}
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-11 w-[140px] gap-x-4 rounded-3xl border border-separator bg-button ">
                <span className="text-textforeground text-xs font-normal">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
        <Card className="rounded-3xl border-0 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[1.5px] lg:col-span-1">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="flex flex-row gap-x-4">
                <Image src={generateImageSvg} alt="generate an image" />
                <span className="text-logo text-2xl font-medium leading-7">Generate an Image</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col ">
              <span className="text-textforeground py-6 text-sm font-normal leading-5 tracking-wider">
                {" "}
                Quickly generate AI images with our powerful AI tools
              </span>
              <Button className="h-11 w-[140px] gap-x-4 rounded-3xl border border-separator bg-button ">
                <span className="text-textforeground text-xs font-normal">Generate Image</span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-7 md:gap-8 ">
        <Card className="border-0 bg-inherit md:col-span-5">
          <CardHeader className="flex flex-row items-center justify-between px-0">
            <div className="flex flex-row items-center gap-x-2">
              <Button className="hover:bg-hover bg-card px-1 py-2">
                <ChevronLeft className="text-logo size-8 " />
              </Button>
              <CardTitle className="text-logo text-2xl font-bold leading-7 tracking-wide">Billing</CardTitle>
            </div>
            <div className="flex flex-row items-center gap-x-2">
              <Button size={"lg"} className="gap-x-2 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-3">
                <FolderDown className="text-logo size-6" />
                Download
              </Button>
              <Button className="hover:bg-hover bg-card px-1 py-2">
                <ChevronRight className="text-logo size-8 " />
              </Button>
            </div>
          </CardHeader>
          <Separator className="h-[2px] bg-separator" />
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow className="border-none hover:bg-inherit">
                  <TableHead className="text-textforeground p-8">Date</TableHead>
                  <TableHead className="text-textforeground p-8">Id</TableHead>
                  <TableHead className="text-textforeground p-8">Purchase Method</TableHead>
                  <TableHead className="text-textforeground p-8">Plan</TableHead>
                  <TableHead className="text-textforeground p-8">Split</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="rounded-3xl bg-card">
                <TableRow>
                  <TableCell className="text-textforeground rounded-tl-3xl p-8">20/01/204</TableCell>
                  <TableCell className="text-textforeground p-8">#5252661</TableCell>
                  <TableCell className="text-textforeground p-8">Crypto</TableCell>
                  <TableCell className="text-textforeground p-8">Business</TableCell>
                  <TableCell className="text-textforeground rounded-tr-3xl p-8"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-textforeground p-8 ">20/01/204</TableCell>
                  <TableCell className="text-textforeground p-8">#5252661</TableCell>
                  <TableCell className="text-textforeground p-8">Crypto</TableCell>
                  <TableCell className="text-textforeground p-8">Business</TableCell>
                  <TableCell className="text-textforeground p-8 "></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-textforeground p-8 ">20/01/204</TableCell>
                  <TableCell className="text-textforeground p-8">#5252661</TableCell>
                  <TableCell className="text-textforeground p-8">Crypto</TableCell>
                  <TableCell className="text-textforeground p-8">Business</TableCell>
                  <TableCell className="text-textforeground p-8 "></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-textforeground p-8 ">20/01/204</TableCell>
                  <TableCell className="text-textforeground p-8">#5252661</TableCell>
                  <TableCell className="text-textforeground p-8">Crypto</TableCell>
                  <TableCell className="text-textforeground p-8">Business</TableCell>
                  <TableCell className="text-textforeground p-8 "></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-textforeground rounded-bl-3xl p-8">20/01/204</TableCell>
                  <TableCell className="text-textforeground p-8">#5252661</TableCell>
                  <TableCell className="text-textforeground p-8">Crypto</TableCell>
                  <TableCell className="text-textforeground p-8">Business</TableCell>
                  <TableCell className="text-textforeground rounded-br-3xl p-8"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="flex flex-col border-none bg-inherit md:col-span-2">
          <CardTitle className="text-logo py-8 text-2xl font-bold leading-7 tracking-wide">News</CardTitle>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full  space-y-4">
              <AccordionItem value="item-1 " className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
                <AccordionContent className="text-logo leading-5x text-xs font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et lacinia eros. Donec scelerisque, dui
                  sit amet finibus lacinia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="rounded-3xl border-none bg-card px-6 py-2">
                <AccordionTrigger className="text-logo tex-sm font-bold leading-5">NEWS WEEK 32</AccordionTrigger>
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
