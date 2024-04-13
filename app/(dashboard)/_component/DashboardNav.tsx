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
    <nav className="flex flex-1 flex-col gap-y-4 py-4">
      <ul className="grid items-start gap-y-4  text-base font-medium ">
        {firstItemsSet.map((item) => (
          <li key={item.name} className="pr-8">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl px-8 py-4 text-foreground transition-all  hover:bg-sidebar-hover ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="h-[2px] bg-separator" />
      <ul className="grid items-start gap-y-2 text-base font-medium ">
        {/* <div className="p-3 text-base font-semibold tracking-wider  ">Inventory</div> */}
        {secondItemsSet.map((item) => (
          <li key={item.name} className="pr-8">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl px-8 py-4 text-foreground transition-all  hover:bg-sidebar-hover ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="h-[2px] bg-separator" />
      <ul className="grid items-start gap-y-2 text-base font-medium ">
        {/* <div className="p-3 text-sm font-semibold tracking-wider ">Operation</div> */}
        {thirdItemsSet.map((item) => (
          <li key={item.name} className="pr-8">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl px-8 py-4 text-foreground transition-all  hover:bg-sidebar-hover ",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DashboardNav
