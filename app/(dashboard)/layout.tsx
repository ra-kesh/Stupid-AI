
"use client"

import Image from "next/image"
import Link from "next/link"

import logo from "/public/logo_v1.svg";
import DashboardNav from "./_component/DashboardNav";
import { dashboardConfig } from "@/config/dashboard";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";


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
              <span className="text-primary font-bold leading-9 text-2xl tracking-wider">
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
      <div className="flex w-full flex-1 flex-col bg-background overflow-hidden lg:px-10 ">
        <header className="flex h-14 items-center gap-4   lg:h-[100px] ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
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
            <h2 className="text-4xl font-light tracking-wider text-logo">
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
          <Separator className="bg-separator h-[2px]" />
        <main className="overflow-hidden  ">{children}</main>
      </div>
    </div>
  )
}
