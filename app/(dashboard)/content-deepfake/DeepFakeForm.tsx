"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { FileUploader } from "@/components/file-uploader"

const DeepFakeForm = () => {
  const form = useForm()

  console.log(form.getValues())

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6 xl:space-y-4 2xl:space-y-7 4xl:space-y-8">
        <FormField
          control={form.control}
          name="source-files"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Source File(s)</FormLabel>
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFiles={4}
                  maxSize={4 * 1024 * 1024}
                  // progresses={progresses}
                  // onUpload={uploadFiles}
                  // disabled={isUploading}
                  // className="h-24"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="target-files"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Target File(s)</FormLabel>
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFiles={4}
                  maxSize={4 * 1024 * 1024}
                  // progresses={progresses}
                  // onUpload={uploadFiles}
                  // disabled={isUploading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="face-to-swap"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Model Selector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card 2xl:h-12 4xl:h-14">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="first-found">First Found</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="face-simplicity"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Max. Face Simplicity</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onChange={field.onChange}
                  className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="post-processor"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Post Processor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card 2xl:h-12 4xl:h-14">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gfggan">GFPGAN</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image-blend-ratio"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2  4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Image Blend Ratio</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onChange={field.onChange}
                  className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex lg:space-x-3 lg:py-4  4xl:space-x-6 4xl:py-6">
          <Button className=" bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-xl lg:text-xs xl:px-8 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-24 4xl:text-xl ">
            Generate
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default DeepFakeForm
