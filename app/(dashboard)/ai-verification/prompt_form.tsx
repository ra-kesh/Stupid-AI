"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

import ImageEditingForm from "./ImageEditingForm"

const TextPromptForm = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="space-y-1 lg:col-span-7 lg:space-y-2  xl:col-span-8 2xl:space-y-3 4xl:space-y-7"
      >
        <FormField
          control={form.control}
          name="text-prompt"
          render={({ field }) => (
            <FormItem className=" space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-muted-foreground lg:text-[9px] xl:text-xs 2xl:text-sm 4xl:text-xl ">
                {" "}
                Create ai image from text prompt{" "}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your prompt"
                  {...field}
                  className=" border-none bg-card lg:min-h-14 xl:min-h-16  2xl:min-h-24 4xl:min-h-32"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex lg:space-x-3 lg:py-4   4xl:space-x-6 4xl:py-6">
          <Button className=" bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-xl lg:text-xs xl:px-8 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-14 4xl:text-xl ">
            Generate
          </Button>
          <Button
            variant={"outline"}
            className=" bg-inherit lg:rounded-xl lg:px-3 lg:text-xs xl:px-6 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-14 4xl:text-xl"
          >
            Cancel
          </Button>
        </div>

        <Separator className="bg-separator 2xl:h-[2px]" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="rounded-xl bg-card lg:p-4 2xl:p-5 4xl:p-8 4xl:text-2xl">
              Image Editing Settings
            </AccordionTrigger>
            <AccordionContent className="rounded-b-xl bg-card">
              <ImageEditingForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  )
}

export default TextPromptForm
