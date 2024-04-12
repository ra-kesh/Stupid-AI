/* eslint-disable react/jsx-pascal-case */

"use client"



interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
 

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden flex-col border-r bg-muted/40 md:flex md:w-[220px] lg:w-[280px]">
        <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-[220px] md:flex-col lg:w-[280px]">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            {/* <CompanySwitcher organisation={organisation as Organization} /> */}
          </div>
          {/* <DashboardNav
            firstItemsSet={dashboardConfig.main}
            secondItemsSet={dashboardConfig.inventory}
            thirdItemsSet={dashboardConfig.operation}
            fourthItemsSet={dashboardConfig.settings}
          /> */}
        </div>
      </aside>
      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <DashboardNav
                firstItemsSet={dashboardConfig.main}
                secondItemsSet={dashboardConfig.inventory}
                thirdItemsSet={dashboardConfig.operation}
                fourthItemsSet={dashboardConfig.settings}
              />
            </SheetContent>
          </Sheet> */}
          <div className="flex h-14 w-full  items-center justify-end md:justify-between ">
            <div className="hidden md:block">
              {/* <CommandMenu /> */}
            </div>
            <div className="flex items-center gap-x-4">
              {/* {isSuccess && (
                <>
                  <NewActionSwitcher />
                  <UserAccountNav user={session?.user} />
                </>
              )} */}
            </div>
          </div>
        </header>
        <main className="overflow-hidden px-4 lg:px-6 ">{children}</main>
      </div>
    </div>
  )
}
