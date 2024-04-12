export type DashboardItem = {
  name: string
  href: string
  icon: JSX.Element
}

export type DashboardConfig = {
  main: DashboardItem[]
  ai: DashboardItem[]
  account: DashboardItem[]
}
