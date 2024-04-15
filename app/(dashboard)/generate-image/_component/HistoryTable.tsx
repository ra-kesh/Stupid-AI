import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const HistoryTable = () => {
  return (
    <Card className="col-span-8 border-0  bg-inherit">
      <CardHeader className="flex flex-row items-center justify-between px-0 ">
        <CardTitle className="text-logo text-2xl font-bold leading-7 tracking-wide 2xl:text-3xl 4xl:text-4xl">
          History
        </CardTitle>
      </CardHeader>
      <CardContent className="rounded-3xl bg-card px-0">
        <Table>
          <TableHeader className="4xl:text-2xl">
            <TableRow className=" hover:bg-inherit 4xl:text-2xl">
              <TableHead className="w-1/12 py-8 text-center ">Sr. No.</TableHead>
              <TableHead className="w-7/12 py-8 ">Prompts</TableHead>
              <TableHead className="w-3/12 py-8 ">Date & Time</TableHead>
              <TableHead className="w-1/12 py-8 ">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="rounded-3xl ">
            <TableRow className="4xl:text-xl">
              <TableCell className="py-8 text-center ">1</TableCell>
              <TableCell className=" py-8 ">
                Generate photos of sunsets casting a warm glow on the ancient ruins of landmark. | Generate a photo
                illustrating the vibrant and intricate rituals during the festival of festival name. | Create a photo
                showcasing the atmosphere of name destination.
              </TableCell>
              <TableCell className=" py-8">Feb 12, 2024 12:44 PM</TableCell>
              <TableCell className=" py-8">View All </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default HistoryTable
