import React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import SettingsForm from "./SettingsForm"

const VerificationPersons = () => {
  return (
    <div className="space-y-2">
      <ScrollArea className="2xl:h-[27rem] ">
        {" "}
        <div className="grid 2xl:gap-3">
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 border border-separator 2xl:rounded-xl 2xl:p-3">
            <Avatar className="hidden sm:flex 2xl:size-12">
              <AvatarImage src="/verification-girl-v1.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">Account Verified Successfully</p>
              <p className="text-xs text-muted-foreground">Healthy With 1400 likes, US Account</p>
            </div>
            <div className="ml-auto font-medium">
              <Button variant={"outline"} className=" 2xl:px-10">
                Start
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="rounded-xl bg-card 2xl:p-5">Settings</AccordionTrigger>
          <AccordionContent className="rounded-b-xl bg-card">
            <SettingsForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="w-full bg-button " variant={"outline"}>
        Download Account Verification Settings
      </Button>
    </div>
  )
}

export default VerificationPersons
