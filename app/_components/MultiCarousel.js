"use client"

import Image from "next/image"
import { useState } from "react"

const MultiCarousel = ({ images, itemsPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  //   if (images.length === 0) return images

  const next = () => {
    if (currentIndex < images.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage)
    }
  }

  return (
    <div className="flex items-center w-full">
      <button
        onClick={prev}
        disabled={currentIndex === 1}
        className="p-2 bg-gray-300 rounded text-primary-800 disabled:bg-gray-100"
      >
        Prev
      </button>
      <div className="flex overflow-hidden w-full mx-4 transition-transform duration-300 ease-out justify-center">
        {images
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((image, index) => (
            <div key={index} className="h-52 w-52 mx-2 relative">
              <Image
                src={image}
                fill
                alt={`slide-${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
      </div>
      <button
        onClick={next}
        disabled={currentIndex >= images.length - itemsPerPage}
        className="p-2 bg-gray-300 rounded disabled:bg-gray-100 text-primary-800"
      >
        Next
      </button>
    </div>
  )
}

export default MultiCarousel
