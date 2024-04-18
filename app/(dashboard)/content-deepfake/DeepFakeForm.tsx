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
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4 lg:space-y-2  2xl:space-y-3 4xl:space-y-7">
        <FormField
          control={form.control}
          name="source-files"
          render={({ field }) => (
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Source File(s)</FormLabel>
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
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Target File(s)</FormLabel>
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
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Max. Face Simplicity</FormLabel>
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
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Post Processor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Image Blend Ratio</FormLabel>
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

        <div className="flex py-4 lg:space-x-3 2xl:py-6  4xl:space-x-6 4xl:py-6">
          <Button className=" bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] px-6 lg:rounded-xl lg:text-xs xl:px-8 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-20 4xl:text-lg ">
            Generate
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default DeepFakeForm
