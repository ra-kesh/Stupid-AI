import React from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const ImageGrid = ({
  images,
  setSelectedImage,
}: {
  images: {
    id: number
    url: string
  }[]
  setSelectedImage: any
}) => {
  return (
    <ScrollArea className="h-[25rem] rounded-xl bg-form sm:h-[30rem] md:h-[26rem] lg:h-[40rem] lg:p-3 xl:h-[39rem] xl:p-4 2xl:h-[49rem] 2xl:p-6 4xl:h-[76rem] 4xl:rounded-3xl 4xl:p-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2  xl:grid-cols-3">
        {images?.map((image: any) => (
          <div className="group relative lg:col-span-1" key={image.id}>
            <img src={image.url} alt="generated image" className="size-full rounded-xl" />
            <div className="absolute left-0 top-0 flex size-full flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                className="w-2/3 bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] 4xl:h-16 4xl:rounded-3xl 4xl:text-2xl"
                onClick={() => setSelectedImage(image)}
              >
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ImageGrid
