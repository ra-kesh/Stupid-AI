import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import AddAccountForm from "./AddAccount"
import AiPreview from "./AiVerificationPreview"
import VerificationPersons from "./verification-person"
import VerificationForm from "./VerificationForm"

const AiVerification = () => {
  return (
    <div className="grid  grid-cols-12 gap-x-4 xl:gap-x-8 2xl:gap-x-10">
      <div className="col-span-12 lg:col-span-7">
        <Card className="bg-inherit">
          <CardHeader className="px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
            Preview
          </CardHeader>
          <CardContent className="gap-4 rounded-xl  px-0">
            <AiPreview />
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-12 bg-inherit lg:col-span-5">
        <CardHeader className="flex flex-row items-center justify-between px-0 text-lg font-medium lg:py-2 xl:py-3 xl:text-2xl 2xl:py-4 4xl:py-6 4xl:text-4xl">
          <CardTitle className="">Manage Account</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-fit bg-inherit">
                Add Account
              </Button>
            </DialogTrigger>
            <DialogContent className="border-none bg-form">
              <DialogHeader>
                <DialogTitle>Add Account</DialogTitle>
              </DialogHeader>
              <AddAccountForm />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent className="gap-4 rounded-2xl bg-form p-6 lg:p-3 xl:p-6  2xl:p-8 4xl:rounded-3xl 4xl:p-10">
          <VerificationPersons />
        </CardContent>
      </Card>
      <VerificationForm />
    </div>
  )
}

export default AiVerification
