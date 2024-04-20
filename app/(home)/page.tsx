import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Link href="/dashboard">
        <Button className="bg-button text-foreground">Go to Dashboard</Button>
      </Link>
    </div>
  )
}

export default Home
