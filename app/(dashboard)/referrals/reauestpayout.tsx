"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const RequestPayout = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex flex-row gap-x-4">
        <div className="w-8/12 space-y-4  lg:space-y-2 2xl:space-y-3 4xl:space-y-7">
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Withdrwal method</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="paypal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="paypal">paypal</SelectItem>
                      <SelectItem value="palceholder">placeholder</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paypal"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Enter Paypal Address</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card  text-xs 4xl:h-14 4xl:text-sm" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Amount</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card  text-xs 4xl:h-14 4xl:text-sm" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="scheduled-time"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Scheduled Time</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="asap" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="asap">as soon as possible</SelectItem>
                      <SelectItem value="palceholder">placeholder</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-3 py-4 2xl:py-6  4xl:space-x-6 4xl:py-6">
            <Button className=" bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-xl lg:text-xs xl:px-8 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-20 4xl:text-xl ">
              Request Payout
            </Button>

            <DialogClose asChild>
              <Button
                variant={"outline"}
                className=" bg-inherit lg:rounded-xl lg:px-3 lg:text-xs xl:px-6 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-16 4xl:text-xl"
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </div>
        <div className="w-4/12 gap-5 space-y-5">
          <div className="flex  flex-col items-center justify-center gap-1 rounded-md bg-card px-10 py-16">
            <p className="inline-block bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] bg-clip-text text-4xl text-transparent">
              £425.59
            </p>

            <span className="text-xs">Withdrawable Earnings</span>
          </div>
          <Accordion type="single" collapsible className="w-full  space-y-2 text-xs 4xl:text-sm">
            <AccordionItem
              value="item-1 "
              className="rounded-sm border-none bg-card px-6  lg:rounded-3xl lg:py-1 4xl:py-2"
            >
              <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">
                Guidelines
              </AccordionTrigger>
              <AccordionContent className="text-logo  space-y-2 text-xs font-normal">
                <p>
                  **Withdrawal and Affiliate Guidelines**CUPID AI offers a referral program with **0% fees**, but strict
                  compliance with our affiliate guidelines is mandatory for all participants. Here’s what you need to
                  know:
                </p>
                <p>
                  **Withdrawal and Affiliate Guidelines**CUPID AI offers a referral program with **0% fees**, but strict
                  compliance with our affiliate guidelines is mandatory for all participants. Here’s what you need to
                  know:
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </form>
    </Form>
  )
}

export default RequestPayout
