"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center rounded-full", className)}
    {...props}
  >
    <SliderPrimitive.Track className="bg-slider relative h-2 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-gradient-to-bl from-[#7f04e3] to-[#ff006b]" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="block size-5 rounded-full border-2 border-primary bg-primary ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
