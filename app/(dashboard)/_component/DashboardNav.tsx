"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DashboardItem } from "@/types"

import { cn } from "@/lib/utils"

interface DashboardNavProps {
  firstItemsSet: DashboardItem[]
  secondItemsSet: DashboardItem[]
  thirdItemsSet: DashboardItem[]
}

const DashboardNav = ({ firstItemsSet, secondItemsSet, thirdItemsSet }: DashboardNavProps) => {
  const path = usePathname()

  return (
    <nav className="flex flex-1 flex-col py-4">
      <ul className="grid items-start gap-y-2 px-2 text-sm font-medium lg:px-4">
        {firstItemsSet.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
               className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-sidebar-hover",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="grid items-start gap-y-2 px-2 text-sm font-medium lg:px-4">
        <div className="p-3 text-sm font-semibold tracking-wider  ">Inventory</div>
        {secondItemsSet.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
             className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-sidebar-hover",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="grid items-start gap-y-2 px-2 text-sm font-medium lg:px-4">
        <div className="p-3 text-sm font-semibold tracking-wider ">Operation</div>
        {thirdItemsSet.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
               className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-foreground transition-all hover:bg-sidebar-hover",
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
