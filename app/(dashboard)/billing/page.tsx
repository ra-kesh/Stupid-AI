import React from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Billing = () => {
  return (
    <Card className=" bg-inherit lg:col-span-5">
      <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
        Choose your Plan
      </CardHeader>
      <CardContent className=" grid grid-cols-1  gap-10  rounded-xl  px-0 lg:grid-cols-2">
        <div className="flex w-full rounded-xl border border-separator">
          <div className="flex w-7/12 flex-col gap-4 rounded-l-xl border-r border-separator bg-form p-10">
            <Button className="h-7 w-fit rounded-full border-none bg-inherit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[2px]">
              <div className="flex h-full items-center rounded-[calc(9999px-2px)] bg-card">
                <span className="px-2 text-xs">For those starting out</span>
              </div>
            </Button>
            <p className="text-3xl">Individual</p>
            <span className="text-xs 2xl:text-sm">
              Manage your personal content creation workflow effortlessly with our individual Plan
            </span>
            <Link href="/billing/checkout">
              <Button className="w-fit px-8 text-black hover:bg-primary hover:text-black">Get Started</Button>
            </Link>
          </div>
          <div className="my-auto flex w-5/12 flex-col gap-4 px-6 py-10 2xl:p-10">
            <p className="text-4xl">£24.99</p>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
          </div>
        </div>
        <div className="flex w-full rounded-xl border border-[#23E304]">
          <div className="flex w-7/12 flex-col gap-4 rounded-l-xl border-r border-[#23E304] bg-form p-10">
            <Button className="h-7 w-fit rounded-full border-none bg-[#23E304] p-[2px]">
              <div className="flex h-full items-center rounded-[calc(9999px-2px)] bg-card">
                <span className="px-2 text-xs">Currently Active</span>
              </div>
            </Button>
            <p className="text-3xl">Entrepreneur</p>
            <span className="text-xs 2xl:text-sm">Streamline your business with our Entrepreneur Package</span>
            <Button className="w-fit px-8 text-black">Get Started</Button>
          </div>
          <div className="my-auto flex w-5/12 flex-col gap-4 px-6 py-10 2xl:p-10">
            <p className="text-4xl">£99.99</p>
            <span className="text-xs 2xl:text-sm">AI Image Editing Studio Access</span>
            <span className="text-xs 2xl:text-sm">Team Management Access</span>
            <span className="text-xs 2xl:text-sm">AI Model Training</span>
          </div>
        </div>
        <div className="flex w-full rounded-xl border border-separator">
          <div className="flex w-7/12 flex-col gap-4 rounded-l-xl border-r border-separator bg-form p-10">
            <Button className="h-7 w-fit rounded-full border-none bg-inherit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[2px]">
              <div className="flex h-full items-center rounded-[calc(9999px-2px)] bg-card">
                <span className="px-2 text-xs">For those starting out</span>
              </div>
            </Button>
            <p className="text-3xl">Individual</p>
            <span className="text-xs 2xl:text-sm">
              Manage your personal content creation workflow effortlessly with our individual Plan
            </span>
            <Button className="w-fit px-8 text-black">Get Started</Button>
          </div>
          <div className="my-auto flex w-5/12 flex-col gap-4 px-6 py-10 2xl:p-10">
            <p className="text-4xl">£24.99</p>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
          </div>
        </div>
        <div className="flex w-full rounded-xl border border-separator">
          <div className="flex w-7/12 flex-col gap-4 rounded-l-xl border-r border-separator bg-form p-10">
            <Button className="h-7 w-fit rounded-full border-none bg-inherit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] p-[2px]">
              <div className="flex h-full items-center rounded-[calc(9999px-2px)] bg-card">
                <span className="px-2 text-xs">For those starting out</span>
              </div>
            </Button>
            <p className="text-3xl">Individual</p>
            <span className="text-xs 2xl:text-sm">
              Manage your personal content creation workflow effortlessly with our individual Plan
            </span>
            <Button className="w-fit px-8 text-black">Get Started</Button>
          </div>
          <div className="my-auto flex w-5/12 flex-col gap-4 px-6 py-10 2xl:p-10">
            <p className="text-4xl">£24.99</p>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
            <span className="text-xs 2xl:text-sm">Realistic AI Content Creation</span>
          </div>
        </div>

        <Card className="bg-inherit">
          <CardHeader className="px-0">
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Table className="rounded-3xl bg-card text-xs 4xl:text-sm">
              <TableHeader>
                <TableRow className="border-none hover:bg-inherit">
                  <TableHead className="text-foreground lg:p-6">Date</TableHead>
                  <TableHead className="text-foreground lg:p-6">Id</TableHead>
                  <TableHead className="text-foreground lg:p-6">Purchase Method</TableHead>
                  <TableHead className="text-foreground lg:p-6">Plan</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="rounded-3xl ">
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
        <Card className="bg-inherit">
          <CardHeader className="px-0">
            <CardTitle>Team Transaction History</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Table className="rounded-3xl bg-card text-xs 4xl:text-sm">
              <TableHeader>
                <TableRow className="border-none hover:bg-inherit">
                  <TableHead className="text-foreground lg:p-6">Date</TableHead>
                  <TableHead className="text-foreground lg:p-6">Id</TableHead>
                  <TableHead className="text-foreground lg:p-6">Purchase Method</TableHead>
                  <TableHead className="text-foreground lg:p-6">Plan</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="rounded-3xl ">
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
      </CardContent>
    </Card>
  )
}

export default Billing
