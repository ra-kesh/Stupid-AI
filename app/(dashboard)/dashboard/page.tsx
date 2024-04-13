import React from "react"

import DashboardBody from "./dashboard-body"
import DashboardHero from "./dashboard-hero"

const Dashboard = () => {
  return (
    <div className="flex w-full flex-1 flex-col lg:gap-y-8">
      <DashboardHero />
      <DashboardBody />
    </div>
  )
}

export default Dashboard
