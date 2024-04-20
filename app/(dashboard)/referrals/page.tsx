import React from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Referral = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <Card className="bg-inherit lg:col-span-1">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Your Referal link
        </CardHeader>
        <CardContent className="flex flex-col gap-5  rounded-lg bg-form px-8 py-10 2xl:gap-6 ">
          <div className="w-8/12 space-y-2">
            <Label className=" text-xs text-muted-foreground">Copy your referral link</Label>
            <div className="flex justify-between rounded-sm bg-card p-3">
              <span className="text-xs 2xl:text-sm">https://cupid.tech/signup/ref/39010535</span>
              <Copy className="size-4 2xl:size-5" />
            </div>
          </div>
          <span className="w-7/12 text-xs text-muted-foreground 2xl:w-6/12 2xl:text-sm">
            Send this link to your friends. When they sign up using this link, you will earn a reward.
          </span>
          <Button className="w-fit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-8 text-white">Get Started</Button>
        </CardContent>
      </Card>
      <Card className="bg-inherit lg:col-span-1">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Your Referal link
        </CardHeader>
        <CardContent className="flex flex-col gap-5  rounded-lg bg-form px-8 py-10 2xl:gap-6 ">
          <div className="w-8/12 space-y-2">
            <Label className=" text-xs text-muted-foreground">Copy your referral link</Label>
            <div className="flex justify-between rounded-sm bg-card p-3">
              <span className="text-xs 2xl:text-sm">https://cupid.tech/signup/ref/39010535</span>
              <Copy className="size-4 2xl:size-5" />
            </div>
          </div>
          <span className="w-7/12 text-xs text-muted-foreground 2xl:w-6/12 2xl:text-sm">
            Send this link to your friends. When they sign up using this link, you will earn a reward.
          </span>
          <Button className="w-fit bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-8 text-white">Get Started</Button>
        </CardContent>
      </Card>

      <Card className="col-span-2 bg-inherit">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Overview
        </CardHeader>
        <CardContent className="flex flex-col gap-5  rounded-lg bg-form px-8 py-10 2xl:gap-6 ">
          <div className="flex gap-4">
            <Button className="w-fit bg-card text-foreground"> Solo Statistics</Button>
            <Button className="w-fit bg-card text-foreground"> Team Statistics</Button>
            <div>
              <Separator orientation="vertical" className="border border-separator" />
            </div>
            <Button className="w-fit bg-card text-foreground"> This Week</Button>
            <Button className="w-fit bg-card text-foreground"> This Month</Button>
            <Button className="w-fit bg-card text-foreground"> This year</Button>
          </div>

          <div className="flex w-full gap-10 2xl:w-10/12">
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-md bg-card px-10 py-8">
              <p className="inline-block bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] bg-clip-text text-4xl text-transparent">
                525
              </p>

              <span className="text-xs">Clicks on referral link</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-md bg-card px-10 py-8">
              <p className="inline-block bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] bg-clip-text text-4xl text-transparent">
                12
              </p>

              <span className="text-xs">Clicks on referral link</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-md bg-card px-10 py-8">
              <p className="inline-block bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] bg-clip-text text-4xl text-transparent">
                415
              </p>

              <span className="text-xs">Stayed at check out</span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-md bg-card px-10 py-8">
              <p className="inline-block bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] bg-clip-text text-4xl text-transparent">
                £425.59
              </p>

              <span className="text-xs">Earned</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-inherit">
        <CardHeader className="px-0">
          <CardTitle>Payout History</CardTitle>
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
          <CardTitle>Team Payout History</CardTitle>
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
    </div>
  )
}

export default Referral
