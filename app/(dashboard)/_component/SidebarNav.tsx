"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DashboardItem } from "@/types"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

import logo from "/public/logo_v1.svg"

interface DashboardNavProps {
  firstItemsSet: DashboardItem[]
  secondItemsSet: DashboardItem[]
  thirdItemsSet: DashboardItem[]
}

const SidebarNav = ({ firstItemsSet, secondItemsSet, thirdItemsSet }: DashboardNavProps) => {
  const path = usePathname()

  return (
    <nav className="flex flex-1 flex-col gap-y-2 ">
      <div className="flex h-14 items-center pl-5">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src={logo} alt="logo" className="size-8" />
          <span className="text-xl font-bold leading-9 tracking-wider text-primary">CupidAI</span>
        </Link>
      </div>
      <ul className=" grid items-start  font-medium">
        {firstItemsSet.map((item) => (
          <li key={item.name} className="pr-14">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl py-3 pl-5 text-foreground transition-all hover:bg-sidebar-hover",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className=" lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
      <ul className="grid items-start  font-medium lg:gap-y-2 ">
        {/* <div className="p-3 text-base font-semibold tracking-wider  ">Inventory</div> */}
        {secondItemsSet.map((item) => (
          <li key={item.name} className="pr-14">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl py-3 pl-5 text-foreground transition-all hover:bg-sidebar-hover",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className=" lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Separator className="bg-separator lg:h-px 3xl:h-[2px]" />
      <ul className="grid items-start  font-medium lg:gap-y-2 ">
        {/* <div className="p-3 text-sm font-semibold tracking-wider ">Operation</div> */}
        {thirdItemsSet.map((item) => (
          <li key={item.name} className="pr-14">
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-3xl py-3 pl-5 text-foreground transition-all hover:bg-sidebar-hover",
                path === item.href ? "bg-sidebar-hover" : "null"
              )}
            >
              {item.icon}
              <span className=" lg:text-xs xl:text-sm 4xl:text-base">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SidebarNav
