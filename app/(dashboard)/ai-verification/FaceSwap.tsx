"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FileUploader } from "@/components/file-uploader"

const FaceSwapForm = () => {
  const form = useForm()

  console.log(form.getValues())

  return (
    <Card className="lg:col-span-5 xl:col-span-4">
      <CardHeader>
        <CardTitle className="lg:text-lg xl:text-xl">Face Swap</CardTitle>
        <CardDescription className="lg:text-[9px] lg:leading-3 xl:text-xs xl:leading-4">
          Faceswap is independent of AI Verification, you can use this only after generation, it does not work before
          hand
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})} className="space-y-1 lg:space-y-2  2xl:space-y-3 4xl:space-y-7">
            <FormField
              control={form.control}
              name="source-files"
              render={({ field }) => (
                <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs 2xl:text-sm 4xl:text-xl">Source File(s)</FormLabel>
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
                <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs 2xl:text-sm 4xl:text-xl">Target File(s)</FormLabel>
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
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FaceSwapForm
