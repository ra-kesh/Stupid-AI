/* eslint-disable react/jsx-pascal-case */
import { DashboardConfig } from "@/types"
import { CircleCheck, ImageIcon, LayoutGrid, Settings2, Smile, UserPlus2, Users, Wallet } from "lucide-react"


export const dashboardConfig: DashboardConfig = {
  main: [{ name: "Dashboard", href: "/dashboard", icon: <LayoutGrid className="h-6 w-6" /> },
  ],
    ai: [
        { name: "Generate Image", href: "/generate-image", icon: <ImageIcon className="h-6 w-6" /> },
        { name: "Deep Fakes", href: "/deep-fakes", icon: <Smile className="h-6 w-6" /> },
        { name: "Content Utilities", href: "/content-utilities", icon: <Settings2 className="h-6 w-6" /> },
        { name: "AI verification", href: "/ai-verification", icon: <CircleCheck className="h-6 w-6" /> },
    ],
    account: [
        { name: "Billing", href: "/billing", icon: <Wallet className="h-6 w-6" /> },
        { name: "Referrals", href: "/referals", icon: <UserPlus2 className="h-6 w-6" /> },
        { name: "Teams", href: "/teams", icon: <Users className="h-6 w-6" /> },
    ],
 
}
