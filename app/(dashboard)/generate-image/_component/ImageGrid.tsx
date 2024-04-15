import React from "react"

import { Button } from "@/components/ui/button"

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
    <div className="grid grid-cols-1 gap-4 rounded-xl bg-form p-6 lg:grid-cols-2 xl:grid-cols-3 4xl:rounded-3xl 4xl:p-10">
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
  )
}

export default ImageGrid
