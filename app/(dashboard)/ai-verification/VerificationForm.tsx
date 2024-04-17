import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const VerificationForm = () => {
  return (
    <Card className="col-span-12 bg-inherit">
      <CardHeader className=" px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
        Text Prompt
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-x-4 lg:grid-cols-12 xl:gap-x-8 2xl:gap-x-10"></CardContent>
    </Card>
  )
}

export default VerificationForm
