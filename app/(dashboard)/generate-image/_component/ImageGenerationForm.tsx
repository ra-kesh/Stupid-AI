"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

const ImageGenerationForm = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
        <FormField
          control={form.control}
          name="text-prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Generate image using text prompt</FormLabel>
              <FormControl>
                <Textarea placeholder="placeholder" {...field} className="border-none bg-card" />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sample-step"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sampling steps</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onChange={field.onChange}
                  className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Sampling Method</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row flex-wrap space-x-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="ddim" />
                    </FormControl>
                    <FormLabel className="font-normal">DDIM</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="dpm+2m" />
                    </FormControl>
                    <FormLabel className="font-normal">DPM+2M</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="plms" />
                    </FormControl>
                    <FormLabel className="font-normal">PLMS</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="dpm4" />
                    </FormControl>
                    <FormLabel className="font-normal">DPM4</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="lms" />
                    </FormControl>
                    <FormLabel className="font-normal">LMS</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="euler" />
                    </FormControl>
                    <FormLabel className="font-normal">EULER</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="dpm2" />
                    </FormControl>
                    <FormLabel className="font-normal">DPM2</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="dpm+3m" />
                    </FormControl>
                    <FormLabel className="font-normal">DPM+3M</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="heun" />
                    </FormControl>
                    <FormLabel className="font-normal">HEUN</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="heun+2" />
                    </FormControl>
                    <FormLabel className="font-normal">HEUN+2</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-sm bg-card px-3 py-2">
                    <FormControl>
                      <RadioGroupItem value="ddpm" />
                    </FormControl>
                    <FormLabel className="font-normal">DDPM</FormLabel>
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
            <FormItem>
              <FormLabel>Model Selector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="model-1">Model One</SelectItem>
                  <SelectItem value="model-2">Model Two</SelectItem>
                  <SelectItem value="model-3">Model Three</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-x-4">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Width</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card" />
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
              <FormItem className="w-1/2">
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card" />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cfg-scale"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CFG Scale</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onChange={field.onChange}
                  className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-x-4">
          <FormField
            control={form.control}
            name="batch-size"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Batch Size</FormLabel>
                <FormControl>
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="batch-count"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Batch Count</FormLabel>
                <FormControl>
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="denoise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Denoise</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  onChange={field.onChange}
                  className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size={"lg"} className=" w-1/2 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]">
          Generate
        </Button>

        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  )
}

export default ImageGenerationForm
