"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const AddAccountForm = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4 lg:space-y-2  2xl:space-y-3 4xl:space-y-7">
        <FormField
          control={form.control}
          name="Account Name"
          render={({ field }) => (
            <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Account Name</FormLabel>
              <FormControl>
                <Input placeholder="100" {...field} className="border-none bg-card  text-xs 4xl:h-14 4xl:text-sm" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Account platform"
          render={({ field }) => (
            <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Account Platform</FormLabel>
              <FormControl>
                <Input placeholder="100" {...field} className="border-none bg-card  text-xs 4xl:h-14 4xl:text-sm" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Note</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your prompt"
                  {...field}
                  className=" border-none bg-card text-xs lg:min-h-14  xl:min-h-16 2xl:min-h-20 4xl:min-h-32 4xl:text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div className="w-full"> */}
        <Separator className="bg-separator" orientation="horizontal" />
        {/* </div> */}

        {/* <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
              <FormLabel className="text-xs 4xl:text-sm text-muted-foreground">Model Selector</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                    <SelectValue placeholder="placeholder" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="palceholder">Model One</SelectItem>
                  <SelectItem value="model-2">Model Two</SelectItem>
                  <SelectItem value="model-3">Model Three</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="speed"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Speed</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="version"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Version</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="version"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Style</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="version"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Ratio</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="version"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Step</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="stylise"
            render={({ field }) => (
              <FormItem className="col-span-1 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Stylize</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                        <SelectValue placeholder="placeholder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
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
            name="seed"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Seed</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-card text-xs 4xl:text-sm">
                      <SelectValue placeholder="placeholder" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="palceholder">placeholder</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="col-span-2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Prompt</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} className="border-none bg-card  4xl:h-14" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-3 py-4 2xl:py-6  4xl:space-x-6 4xl:py-6">
          <Button className=" bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] lg:rounded-xl lg:text-xs xl:px-8 xl:py-5 xl:text-sm 4xl:h-20 4xl:rounded-3xl 4xl:px-20 4xl:text-xl ">
            Save
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
      </form>
    </Form>
  )
}

export default AddAccountForm
