"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

const ImageGenerationForm = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6 xl:space-y-4 2xl:space-y-7 4xl:space-y-8">
        <FormField
          control={form.control}
          name="text-prompt"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Text Prompt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your prompt"
                  {...field}
                  className=" border-none bg-card lg:min-h-24 2xl:min-h-28 4xl:min-h-40"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sample-step"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Sampling Steps</FormLabel>
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
          name="type"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Sampling Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row flex-wrap xl:space-x-1 4xl:gap-x-3 4xl:space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card lg:px-2 lg:py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-3 4xl:px-5 4xl:py-4">
                    <FormControl>
                      <RadioGroupItem value="ddim" className="lg:size-3 xl:size-4 2xl:size-5 4xl:size-6" />
                    </FormControl>
                    <FormLabel className="font-normal lg:text-xs   2xl:text-lg 4xl:text-2xl ">DDIM</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="model"
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
                  <SelectItem value="model-1">Model One</SelectItem>
                  <SelectItem value="model-2">Model Two</SelectItem>
                  <SelectItem value="model-3">Model Three</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-x-4 ">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="w-1/2 lg:space-y-3 xl:space-y-2 4xl:space-y-6">
                <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Width</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card 2xl:h-12 4xl:h-14" />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="w-1/2 lg:space-y-3 xl:space-y-2  4xl:space-y-6">
                <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Height</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card 2xl:h-12 4xl:h-14" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cfg-scale"
          render={({ field }) => (
            <FormItem className="lg:space-y-3 xl:space-y-2  4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">CFG Scale</FormLabel>
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
        <div className="flex flex-row gap-x-4">
          <FormField
            control={form.control}
            name="batch-size"
            render={({ field }) => (
              <FormItem className="w-1/2 lg:space-y-3 xl:space-y-2 4xl:space-y-6 ">
                <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Batch Size</FormLabel>
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
            name="batch-count"
            render={({ field }) => (
              <FormItem className="w-1/2 lg:space-y-3 xl:space-y-2 4xl:space-y-6 ">
                <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Batch Count</FormLabel>
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
        </div>
        <FormField
          control={form.control}
          name="denoise"
          render={({ field }) => (
            <FormItem className=" lg:space-y-3 xl:space-y-2 4xl:space-y-6">
              <FormLabel className="xl:text-sm 2xl:text-lg 4xl:text-2xl">Denoise</FormLabel>
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
          <Button
            variant={"outline"}
            className=" bg-inherit lg:rounded-xl lg:px-3 lg:text-xs xl:px-6 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-16 4xl:text-2xl"
          >
            Advanced Setting
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ImageGenerationForm
