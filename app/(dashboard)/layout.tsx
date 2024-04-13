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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden flex-col bg-sidebar md:flex md:w-[220px] lg:w-[280px]">
        <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-[220px] md:flex-col lg:w-[280px]">
          <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} alt="logo" className="size-6" />
              <span className="text-2xl font-bold leading-9 tracking-wider text-primary">CupidAI</span>
            </Link>
          </div>
          <DashboardNav
            firstItemsSet={dashboardConfig.main}
            secondItemsSet={dashboardConfig.ai}
            thirdItemsSet={dashboardConfig.account}
          />
        </div>
      </aside>
      <div className="flex w-full flex-1 flex-col overflow-hidden bg-background lg:px-10 ">
        <header className="flex h-14 items-center gap-4   lg:h-[100px] ">
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
          <div className="flex h-14 w-full  items-center justify-end md:justify-between ">
            <h2 className="text-logo text-4xl font-light tracking-wider">Dashboard</h2>
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
        <Separator className="h-[2px] bg-separator" />
        <main className="overflow-hidden  ">{children}</main>
      </div>
    </div>
  )
}
