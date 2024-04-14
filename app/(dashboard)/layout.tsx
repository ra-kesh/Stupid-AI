"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { dashboardConfig } from "@/config/dashboard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import DashboardNav from "./_component/DashboardNav"
import logo from "/public/logo_v1.svg"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="3xl:grid-cols-[300px_1fr] 4xl:grid-cols-[320px_1fr] grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] 2xl:grid-cols-[280px_1fr]">
      <aside className="3xl:w-[300px] 4xl:w-[320px] hidden flex-col bg-sidebar md:flex md:w-[220px] lg:w-[240px] xl:w-[260px] 2xl:w-[280px]">
        <div className="3xl:w-[300px] 4xl:w-[320px] hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-[220px] md:flex-col lg:w-[240px] xl:w-[260px]">
          <div className="3xl:h-[100px] 3xl:px-10 flex  h-14 items-center px-4 lg:h-[60px] lg:px-6 xl:h-[70px] xl:px-7 2xl:h-[80px] 2xl:px-8">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} alt="logo" className="3xl:size-8 size-6 xl:size-7" />
              <span className="3xl:text-3xl font-bold leading-9 tracking-wider text-primary lg:text-xl xl:text-2xl">
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
      <div className="3xl:px-8 4xl:px-12 flex w-full flex-1 flex-col overflow-hidden bg-background lg:px-6">
        <header className="2x 4xl:h-[120px] flex h-14 items-center gap-4 lg:h-[80px] xl:h-[100px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <DashboardNav
                firstItemsSet={dashboardConfig.main}
                secondItemsSet={dashboardConfig.ai}
                thirdItemsSet={dashboardConfig.account}
              />
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center  justify-end md:justify-between ">
            <h2 className="text-logo 3xl:text-5xl 4xl:text-6xl font-light tracking-wider lg:text-3xl xl:text-4xl">
              Dashboard
            </h2>
            <div className="flex items-center gap-x-4">
              {/* {isSuccess && (
                <>
                  <NewActionSwitcher />
                  <UserAccountNav user={session?.user} />
                </>
              )} */}
            </div>
          </div>
        </header>
        <Separator className="3xl:h-[2px] bg-separator lg:h-px" />
        <main className="overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
