"use client"

import Image from "next/image"
import Link from "next/link"
import { LogOut, Menu, Settings } from "lucide-react"
import { useForm } from "react-hook-form"

import { dashboardConfig } from "@/config/dashboard"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FileUploaderDashboard } from "@/components/file-uploader-dashboard"

import DashboardNav from "./_component/DashboardNav"
import SidebarNav from "./_component/SidebarNav"
import avatar from "/public/Ellipse 28.png"
import logo from "/public/logo_v1.svg"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const form = useForm()

  return (
    <div className=" grid min-h-svh w-full md:grid-cols-[80px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] 2xl:grid-cols-[280px_1fr] 3xl:grid-cols-[300px_1fr] 4xl:grid-cols-[320px_1fr]">
      {/* sidebar starts */}
      <aside className="hidden flex-col bg-sidebar md:flex md:w-[220px] lg:w-[240px] xl:w-[260px] 2xl:w-[280px] 3xl:w-[300px] 4xl:w-[320px]">
        <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-[80px] md:flex-col lg:w-[240px] xl:w-[260px] 3xl:w-[300px] 4xl:w-[320px]">
          <div className="flex h-14 items-center md:h-16 md:max-lg:justify-center  lg:h-20 lg:px-6 xl:h-24 xl:px-7 2xl:h-32  2xl:px-8   ">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} alt="logo" className="size-6 xl:size-7 3xl:size-8" />
              <span className="hidden font-bold leading-9 tracking-wider text-primary lg:block lg:text-xl xl:text-2xl 3xl:text-3xl">
                CupidAI
              </span>
            </Link>
          </div>
          <DashboardNav
            firstItemsSet={dashboardConfig.main}
            secondItemsSet={dashboardConfig.ai}
            thirdItemsSet={dashboardConfig.account}
          />
        </div>
      </aside>
      {/* right side starts */}
      <div className="flex w-full flex-1 flex-col overflow-hidden bg-background px-4 md:px-6 lg:px-6 3xl:px-14">
        {/* header starts */}
        <header className="2x flex h-14 items-center gap-4 md:h-16 lg:h-20 xl:h-24 2xl:h-32">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col px-0">
              <SidebarNav
                firstItemsSet={dashboardConfig.main}
                secondItemsSet={dashboardConfig.ai}
                thirdItemsSet={dashboardConfig.account}
              />
            </SheetContent>
          </Sheet>

          <div className="flex w-full items-center  justify-end md:justify-between ">
            <h2 className="text-logo font-light tracking-wider md:text-3xl xl:text-4xl 2xl:text-[2.5rem] 4xl:text-5xl ">
              Dashboard
            </h2>
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <Button asChild variant="secondary" size="icon" className=" rounded-full">
                    <>
                      <Image src={avatar} alt="generate an image" className="size-10" />
                      <span className="sr-only">Toggle user menu</span>
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="h-auto border-none bg-form p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="source-files"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-foreground lg:text-xs 2xl:text-sm 4xl:text-lg">
                              Change Profile Picture
                            </FormLabel>
                            <FormControl>
                              <FileUploaderDashboard
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
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-2 lg:space-y-1 2xl:space-y-2 4xl:space-y-3">
                            <FormLabel className="text-sm text-foreground lg:text-xs 2xl:text-sm 4xl:text-xl">
                              Switch Account
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col  "
                              >
                                <FormItem className="flex items-center space-x-6  space-y-0 rounded-sm  px-3 py-2 lg:px-2 lg:py-1 xl:px-3 xl:py-2 4xl:px-4 4xl:py-3 ">
                                  <FormControl>
                                    <RadioGroupItem value="1" className="bg-black lg:size-3  xl:size-4 4xl:size-6" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-muted-foreground   lg:text-xs 2xl:text-sm 4xl:text-xl ">
                                    Username134
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-6 space-y-0 rounded-sm  px-3 py-2 lg:px-2 lg:py-1 xl:px-3 xl:py-2 4xl:px-4 4xl:py-3 ">
                                  <FormControl>
                                    <RadioGroupItem value="2" className="bg-black lg:size-3  xl:size-4 4xl:size-6" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-muted-foreground   lg:text-xs 2xl:text-sm 4xl:text-xl">
                                    Username28945
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="icon" className="rounded-full bg-card">
                <Settings className="size-5" />
              </Button>
              <Button size="icon" className=" rounded-full bg-card">
                <LogOut className="size-5" />
              </Button>
            </div>
          </div>
        </header>
        <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
        <main className="min-h-svh overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
