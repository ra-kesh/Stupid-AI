"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const SettingsForm = () => {
  const form = useForm()

  console.log(form.getValues())

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="grid  space-y-1 lg:space-y-2 lg:p-4 2xl:space-y-3 2xl:p-5 4xl:space-y-7"
      >
        <div className="flex flex-row gap-x-4 ">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="w-1/2 space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="lg:text-[9px] xl:text-xs 2xl:text-sm 4xl:text-xl">
                  Verification Attempts
                </FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-form  4xl:h-14" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="w-1/2 space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="lg:text-[9px] xl:text-xs 2xl:text-sm 4xl:text-xl">Platform Verified On</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-form  4xl:h-14" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem className="w-full space-y-1  2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="lg:text-[9px] xl:text-xs 2xl:text-sm 4xl:text-xl">Verifier Name</FormLabel>
              <FormControl>
                <Input placeholder="100" {...field} className="border-none bg-form  4xl:h-14 " />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem className="w-full space-y-1 2xl:space-y-2 4xl:space-y-3 ">
              <FormLabel className="lg:text-[9px] xl:text-xs 2xl:text-sm 4xl:text-xl">Note</FormLabel>
              <FormControl>
                <Textarea placeholder="100" {...field} className="border-none bg-form 4xl:h-14" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SettingsForm
