import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import FaceSwapForm from "./FaceSwap"
import PromptForm from "./prompt_form"

const VerificationForm = () => {
  return (
    <Card className="col-span-12 bg-inherit">
      <CardHeader className=" px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
        Text Prompt
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 rounded-md bg-form p-6 lg:grid-cols-12 xl:gap-x-8 xl:rounded-lg xl:p-8 2xl:gap-x-10 2xl:rounded-xl 2xl:p-10">
        <PromptForm />
        <FaceSwapForm />
      </CardContent>
    </Card>
  )
}

export default VerificationForm
