"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const MultiCarousel = ({ children: carouselCard, autoSlide = true, autoSlideInterval = 5000, visibleItems = 1 }) => {
  const [curr, setCurr] = useState(0)
  const totalItems = carouselCard.length

  const prev = () =>
    setCurr((curr) => (curr === 0 ? totalItems - visibleItems : curr - 1));
  const next = () =>
    setCurr((curr) =>
      curr === totalItems - visibleItems ? 0 : curr + 1
    );

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="flex overflow-hidden relative items-center">
      <button onClick={prev} className="p-1 rounded-full shadow bg-white opacity-80 text-primary-900 hover:bg-white hover:opacity-100 absolute left-3 z-10">
        <ChevronLeft size={40} />
      </button>
      <div className="flex transition-transform ease-out duration-500 gap-2" style={{ transform: `translateX(-${(curr * 100) / visibleItems}%)` }}>
        {carouselCard.map((card, index) => (
          <div
            key={index}
            style={{ flex: `0 0 ${100 / visibleItems}%` }} // Šírka každého obrázka
            className="relative"
          >
            {card}
          </div>
        ))}
      </div>
      <button onClick={next} className="p-1 rounded-full shadow bg-white opacity-80 text-primary-900 hover:bg-white hover:opacity-100 absolute right-3 z-10">
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: (totalItems - visibleItems) + 1 }).map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-2" : "bg-opacity-50 bg-white"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultiCarousel
