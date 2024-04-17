"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DashboardItem } from "@/types"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface DashboardNavProps {
  firstItemsSet: DashboardItem[]
  secondItemsSet: DashboardItem[]
  thirdItemsSet: DashboardItem[]
}

const DashboardNav = ({ firstItemsSet, secondItemsSet, thirdItemsSet }: DashboardNavProps) => {
  const path = usePathname()

  return (
    <nav className="flex flex-1 flex-col lg:gap-y-2">
      <ul className=" grid w-full font-medium md:max-lg:place-items-center  lg:items-start">
        {firstItemsSet.map((item) => (
          <li key={item.name} className=" w-full py-1 pr-3 lg:pr-14">
            <Link
              href={item.href}
              className={cn(
                "3 group flex  items-center gap-3 rounded-r-3xl py-3 text-foreground transition-all hover:bg-sidebar-hover md:max-lg:justify-center lg:px-6  lg:py-3 xl:px-7 2xl:px-8",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="hidden lg:block lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
      <ul className="grid items-start  font-medium md:max-lg:place-items-center lg:gap-y-2 ">
        {/* <div className="p-3 text-base font-semibold tracking-wider  ">Inventory</div> */}
        {secondItemsSet.map((item) => (
          <li key={item.name} className=" w-full py-1 pr-3 lg:pr-14">
            <Link
              href={item.href}
              className={cn(
                "3 group flex  items-center gap-3 rounded-r-3xl py-3 text-foreground transition-all hover:bg-sidebar-hover md:max-lg:justify-center lg:px-6  lg:py-3 xl:px-7 2xl:px-8",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="hidden lg:block lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
      <ul className="grid items-start  font-medium md:max-lg:place-items-center lg:gap-y-2">
        {/* <div className="p-3 text-sm font-semibold tracking-wider ">Operation</div> */}
        {thirdItemsSet.map((item) => (
          <li key={item.name} className=" w-full py-1 pr-3 lg:pr-14">
            <Link
              href={item.href}
              className={cn(
                "3 group flex  items-center gap-3 rounded-r-3xl py-3 text-foreground transition-all hover:bg-sidebar-hover md:max-lg:justify-center lg:px-6  lg:py-3 xl:px-7 2xl:px-8",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="hidden lg:block lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DashboardNav
