"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ImageEditingForm = () => {
  const form = useForm()

  console.log(form.getValues())

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="grid  space-y-1 lg:space-y-2 lg:p-4 2xl:space-y-3 2xl:p-5 4xl:space-y-7"
      >
        <div className="grid gap-x-4 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-y-4">
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-mutef border-none  bg-form  text-xs 2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem className="space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 2xl:text-sm 4xl:text-xl">Model Selector</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  2xl:text-sm 4xl:h-14 4xl:text-xl">
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
        </div>
      </form>
    </Form>
  )
}

export default ImageEditingForm
