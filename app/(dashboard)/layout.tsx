"use client"

import Image from "next/image"
import Link from "next/link"

import { dashboardConfig } from "@/config/dashboard"
import { Separator } from "@/components/ui/separator"

import DashboardNav from "./_component/DashboardNav"
import logo from "/public/logo_v1.svg"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="hidden min-h-svh w-full lg:grid lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] 2xl:grid-cols-[280px_1fr] 3xl:grid-cols-[300px_1fr] 4xl:grid-cols-[320px_1fr]">
        {/* sidebar starts */}
        <aside className="hidden flex-col bg-sidebar md:flex md:w-[220px] lg:w-[240px] xl:w-[260px] 2xl:w-[280px] 3xl:w-[300px] 4xl:w-[320px]">
          <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-[220px] md:flex-col lg:w-[240px] xl:w-[260px] 3xl:w-[300px] 4xl:w-[320px]">
            <div className="flex h-14 items-center  px-4 lg:h-20 lg:px-6 xl:h-28  xl:px-7 2xl:h-32  2xl:px-8   ">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Image src={logo} alt="logo" className="size-6 xl:size-7 3xl:size-8" />
                <span className="font-bold leading-9 tracking-wider text-primary lg:text-xl xl:text-2xl 3xl:text-3xl">
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
        <div className="flex w-full flex-1 flex-col overflow-hidden bg-background lg:px-6 3xl:px-14">
          <header className="2x flex h-14 items-center gap-4 lg:h-20 xl:h-28 2xl:h-32">
            <div className="flex w-full items-center  justify-end md:justify-between ">
              <h2 className="text-logo font-light tracking-wider lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] ">
                Dashboard
              </h2>
            </div>
          </header>
          <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
          <main className="min-h-svh overflow-hidden">{children}</main>
        </div>
      </div>
    </>
  )
}
