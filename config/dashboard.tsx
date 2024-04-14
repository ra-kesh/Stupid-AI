/* eslint-disable react/jsx-pascal-case */
import { DashboardConfig } from "@/types"
import { CircleCheck, ImageIcon, LayoutGrid, Settings2, Smile, UserPlus2, Users, Wallet } from "lucide-react"

export const dashboardConfig: DashboardConfig = {
  main: [{ name: "Dashboard", href: "/dashboard", icon: <LayoutGrid className="3xl:size-8 size-5 xl:size-7" /> }],
  ai: [
    { name: "Generate Image", href: "/generate-image", icon: <ImageIcon className="3xl:size-8 size-5 xl:size-7" /> },
    { name: "Deep Fakes", href: "/deep-fakes", icon: <Smile className="3xl:size-8 size-5 xl:size-7" /> },
    {
      name: "Content Utilities",
      href: "/content-utilities",
      icon: <Settings2 className="3xl:size-8 size-5 xl:size-7" />,
    },
    {
      name: "AI verification",
      href: "/ai-verification",
      icon: <CircleCheck className="3xl:size-8 size-5 xl:size-7" />,
    },
  ],
  account: [
    { name: "Billing", href: "/billing", icon: <Wallet className="3xl:size-8 size-5 xl:size-7" /> },
    { name: "Referrals", href: "/referals", icon: <UserPlus2 className="3xl:size-8 size-5 xl:size-7" /> },
    { name: "Teams", href: "/teams", icon: <Users className="3xl:size-8 size-5 xl:size-7" /> },
  ],
}
