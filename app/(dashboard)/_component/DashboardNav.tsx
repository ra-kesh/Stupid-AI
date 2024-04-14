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
    <nav className="flex flex-1 flex-col lg:gap-y-3 lg:py-3">
      <ul className="grid items-start text-base font-medium lg:gap-y-3 ">
        {firstItemsSet.map((item) => (
          <li key={item.name} className="lg:pr-8">
            <Link
              href={item.href}
              className={cn(
                "2x:px-8 3xl:px-10 group flex items-center gap-3 rounded-r-3xl text-foreground transition-all hover:bg-sidebar-hover lg:px-6 lg:py-3 xl:px-7 ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="3xl:text-lg 4xl:text-xl lg:text-sm xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="3xl:h-[2px] bg-separator lg:h-px" />
      <ul className="grid items-start text-base font-medium lg:gap-y-3 ">
        {/* <div className="p-3 text-base font-semibold tracking-wider  ">Inventory</div> */}
        {secondItemsSet.map((item) => (
          <li key={item.name} className="lg:pr-8">
            <Link
              href={item.href}
              className={cn(
                "2x:px-8 3xl:px-10 group flex items-center gap-3 rounded-r-3xl text-foreground transition-all hover:bg-sidebar-hover lg:px-6 lg:py-3 xl:px-7 ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="3xl:text-lg 4xl:text-xl lg:text-sm xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="3xl:h-[2px] bg-separator lg:h-px" />
      <ul className="grid items-start text-base font-medium lg:gap-y-3 ">
        {/* <div className="p-3 text-sm font-semibold tracking-wider ">Operation</div> */}
        {thirdItemsSet.map((item) => (
          <li key={item.name} className="lg:pr-8">
            <Link
              href={item.href}
              className={cn(
                "2x:px-8 3xl:px-10 group flex items-center gap-3 rounded-r-3xl text-foreground transition-all hover:bg-sidebar-hover lg:px-6 lg:py-3 xl:px-7 ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className="3xl:text-lg 4xl:text-xl lg:text-sm xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DashboardNav
