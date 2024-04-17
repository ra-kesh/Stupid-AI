import React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

import AiPreview from "./AiVerificationPreview"
import VerificationPersons from "./verification-person"
import VerificationForm from "./VerificationForm"

const AiVerification = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-12 xl:gap-x-8 2xl:gap-x-10">
      <div className="lg:col-span-8 xl:col-span-7">
        <Card className="bg-inherit">
          <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
            Preview
          </CardHeader>
          <CardContent className="gap-4 rounded-xl  px-0">
            <AiPreview />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-inherit lg:col-span-4 xl:col-span-5">
        <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          Manage Account
        </CardHeader>
        <CardContent className="gap-4 rounded-2xl bg-form lg:p-3 xl:p-6  2xl:p-8 4xl:rounded-3xl 4xl:p-10">
          <VerificationPersons />
        </CardContent>
      </Card>
      <VerificationForm />
    </div>
  )
}

export default AiVerification
