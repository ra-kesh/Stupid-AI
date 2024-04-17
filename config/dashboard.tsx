/* eslint-disable react/jsx-pascal-case */
import { DashboardConfig } from "@/types"
import { CircleCheck, ImageIcon, LayoutGrid, Settings2, Smile, UserPlus2, Users, Wallet } from "lucide-react"

export const dashboardConfig: DashboardConfig = {
  main: [
    { name: "Dashboard", href: "/dashboard", icon: <LayoutGrid className="size-6 lg:size-5 xl:size-7 3xl:size-8" /> },
  ],
  ai: [
    {
      name: "Generate Image",
      href: "/generate-image",
      icon: <ImageIcon className="size-6 lg:size-5 xl:size-7 3xl:size-8" />,
    },
    {
      name: "Deep Fakes",
      href: "/content-deepfake",
      icon: <Smile className="size-6 lg:size-5 xl:size-7 3xl:size-8" />,
    },
    // {
    //   name: "Content Utilities",
    //   href: "/content-utilities",
    //   icon: <Settings2 className="size-5 xl:size-7 3xl:size-8" />,
    // },
    {
      name: "AI verification",
      href: "/ai-verification",
      icon: <CircleCheck className="size-6 lg:size-5 xl:size-7 3xl:size-8" />,
    },
  ],
  account: [
    { name: "Billing", href: "/billing", icon: <Wallet className="size-6 lg:size-5 xl:size-7 3xl:size-8" /> },
    { name: "Referrals", href: "/referals", icon: <UserPlus2 className="size-6 lg:size-5 xl:size-7 3xl:size-8" /> },
  ],
}
