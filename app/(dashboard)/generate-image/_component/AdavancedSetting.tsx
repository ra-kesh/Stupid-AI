import React from "react"
import { useForm } from "react-hook-form"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileUploader } from "@/components/file-uploader"

const AdavancedSetting = () => {
  const form = useForm()

  return (
    <Accordion type="single" collapsible className="w-full space-y-2 text-xs 4xl:text-sm">
      <AccordionItem value="item-1 " className="rouned-md rounded-lg border-none bg-card  px-6 lg:py-1 4xl:py-2">
        <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">IPA Setting</AccordionTrigger>
        <AccordionContent className="text-logo  space-y-3 text-xs font-normal">
          <FormField
            control={form.control}
            name="ipa-1"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">IPA 1</FormLabel>
                <FormControl>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-separator"
                    />
                  </FormControl>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load IPA Model</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Choose model" />
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
            name="reference-image"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load Reference Image</FormLabel>
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
          <div className="flex flex-row gap-x-4 ">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Width</FormLabel>
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
              name="noise"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Noise</FormLabel>
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
            name="weight_type"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Weight Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Weight-1">Weight One</SelectItem>
                    <SelectItem value="Weight-2">Weight Two</SelectItem>
                    <SelectItem value="Weight-3">Weight Three</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row gap-x-4 ">
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Start at</FormLabel>
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
              name="end"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">End at</FormLabel>
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
          {/* <FormField
            control={form.control}
            name="ipa-2"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">IPA 2</FormLabel>
                <FormControl>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-separator"
                    />
                  </FormControl>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load IPA Model</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Choose model" />
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
            name="reference-image"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load Reference Image</FormLabel>
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
          <div className="flex flex-row gap-x-4 ">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Width</FormLabel>
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
              name="noise"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Noise</FormLabel>
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
          </div> */}
          {/* <FormField
            control={form.control}
            name="weight_type"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Weight Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Weight-1">Weight One</SelectItem>
                    <SelectItem value="Weight-2">Weight Two</SelectItem>
                    <SelectItem value="Weight-3">Weight Three</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <div className="flex flex-row gap-x-4 ">
            <FormField
              control={form.control}
              name="start"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Start at</FormLabel>
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
              name="end"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">End at</FormLabel>
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
          </div> */}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="refinement " className="rouned-md rounded-lg border-none bg-card  px-6 lg:py-1 4xl:py-2">
        <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">Refinement</AccordionTrigger>
        <AccordionContent className="text-logo  space-y-3 text-xs font-normal">
          <FormField
            control={form.control}
            name="ipa-1"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Refined</FormLabel>
                <FormControl>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-separator"
                    />
                  </FormControl>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-end gap-x-3">
            <FormField
              control={form.control}
              name="seed"
              render={({ field }) => (
                <FormItem className="w-9/12 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Seed</FormLabel>
                  <FormControl>
                    <Input placeholder="100" {...field} className="border-none bg-form  4xl:h-14" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="rounded-sm border border-separator bg-form text-xs text-muted-foreground">
              Randomise
            </Button>
          </div>
          <FormField
            control={form.control}
            name="steps"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Steps</FormLabel>
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
            name="noise"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">CFG</FormLabel>
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
            name="noise"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Denoise</FormLabel>
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
            name="weight_type"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Sampler</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Sample-1">Sample One</SelectItem>
                    <SelectItem value="Sample-2">Sample Two</SelectItem>
                    <SelectItem value="Sample-3">Sample Three</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="lora " className="rouned-md rounded-lg border-none bg-card  px-6 lg:py-1 4xl:py-2">
        <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">LoRa</AccordionTrigger>
        <AccordionContent className="text-logo  space-y-3 text-xs font-normal">
          <FormField
            control={form.control}
            name="lora_count"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Lora Count</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="3" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-x-3">
            <FormField
              control={form.control}
              name="lora_a"
              render={({ field }) => (
                <FormItem className=" w-1/4 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Lora A</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                        <SelectValue placeholder="3" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lora_b"
              render={({ field }) => (
                <FormItem className=" w-1/4 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Lora B</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                        <SelectValue placeholder="3" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lora_c"
              render={({ field }) => (
                <FormItem className="w-1/4 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Lora C</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                        <SelectValue placeholder="3" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lora_d"
              render={({ field }) => (
                <FormItem className="w-1/4 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Lora D</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none bg-form  text-xs  text-muted-foreground 4xl:text-sm">
                        <SelectValue placeholder="3" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Table className=" text-xs 4xl:text-sm">
            <TableHeader>
              <TableRow className="border-none text-foreground hover:bg-inherit">
                <TableHead className=" ">Model</TableHead>
                <TableHead className=" ">LoRa Strength</TableHead>
                <TableHead className=" ">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="">
              <TableRow className=" bg-form text-foreground">
                <TableCell className="w-1/5 rounded-l-sm">Lora a</TableCell>
                <TableCell className="w-3/5 ">
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    // onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </TableCell>
                <TableCell className="w-1/5 rounded-r-sm">
                  {" "}
                  <Checkbox
                    checked={false}
                    onCheckedChange={() => {}}
                    className="mx-auto border border-separator bg-card"
                  />
                </TableCell>
              </TableRow>
              <TableRow className=" bg-form text-foreground">
                <TableCell className="w-1/5 rounded-l-sm">Lora b</TableCell>
                <TableCell className="w-3/5 ">
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    // onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </TableCell>
                <TableCell className="w-1/5 rounded-r-sm">
                  {" "}
                  <Checkbox
                    checked={false}
                    onCheckedChange={() => {}}
                    className="mx-auto border border-separator bg-card"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="bg-form text-foreground">
                <TableCell className="w-1/5 rounded-l-sm">Lora c</TableCell>
                <TableCell className="w-3/5 ">
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    // onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </TableCell>
                <TableCell className="w-1/5 rounded-r-sm">
                  {" "}
                  <Checkbox
                    checked={true}
                    onCheckedChange={() => {}}
                    className="mx-auto border border-separator bg-card"
                  />
                </TableCell>
              </TableRow>
              <TableRow className="bg-form text-foreground">
                <TableCell className="w-1/5 rounded-l-sm">Lora d</TableCell>
                <TableCell className="w-3/5 ">
                  <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    // onChange={field.onChange}
                    className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]"
                  />
                </TableCell>
                <TableCell className="w-1/5 rounded-r-sm">
                  {" "}
                  <Checkbox
                    checked={false}
                    onCheckedChange={() => {}}
                    className="mx-auto border border-separator bg-card"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="controlnet " className="rouned-md rounded-lg border-none bg-card  px-6 lg:py-1 4xl:py-2">
        <AccordionTrigger className="text-logo font-bold leading-5 lg:text-xs xl:text-sm">Controlnet</AccordionTrigger>
        <AccordionContent className="text-logo  space-y-3 text-xs font-normal">
          <FormField
            control={form.control}
            name="control"
            render={({ field }) => (
              <FormItem className="flex justify-between">
                <FormLabel className="text-sm lg:text-xs 2xl:text-sm 4xl:text-xl">Control</FormLabel>
                <FormControl>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-separator"
                    />
                  </FormControl>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load Controlnet Model</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-none bg-form text-xs  text-muted-foreground 4xl:text-sm">
                      <SelectValue placeholder="Choose model" />
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
            name="reference-image"
            render={({ field }) => (
              <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Load Reference Image</FormLabel>
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
            name="start"
            render={({ field }) => (
              <FormItem className=" space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">Strength</FormLabel>
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
          <div className="flex flex-row gap-x-4 ">
            <FormField
              control={form.control}
              name="start_at"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">start</FormLabel>
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
              name="end_at"
              render={({ field }) => (
                <FormItem className="w-1/2 space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                  <FormLabel className="text-xs text-muted-foreground 4xl:text-sm">End</FormLabel>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AdavancedSetting
