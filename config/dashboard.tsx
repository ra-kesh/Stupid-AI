/* eslint-disable react/jsx-pascal-case */
import { DashboardConfig } from "@/types"
import { CircleCheck, ImageIcon, LayoutGrid, Settings2, Smile, UserPlus2, Users, Wallet } from "lucide-react"

export const dashboardConfig: DashboardConfig = {
  main: [{ name: "Dashboard", href: "/dashboard", icon: <LayoutGrid className="lg:size-5" /> }],
  ai: [
    { name: "Generate Image", href: "/generate-image", icon: <ImageIcon className="lg:size-5" /> },
    { name: "Deep Fakes", href: "/deep-fakes", icon: <Smile className="lg:size-5" /> },
    { name: "Content Utilities", href: "/content-utilities", icon: <Settings2 className="lg:size-5" /> },
    { name: "AI verification", href: "/ai-verification", icon: <CircleCheck className="lg:size-5" /> },
  ],
  account: [
    { name: "Billing", href: "/billing", icon: <Wallet className="lg:size-5" /> },
    { name: "Referrals", href: "/referals", icon: <UserPlus2 className="lg:size-5" /> },
    { name: "Teams", href: "/teams", icon: <Users className="lg:size-5" /> },
  ],
}
