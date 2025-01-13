"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const MultiCarousel = ({ children: carouselCard, autoSlide = false, autoSlideInterval = 3000, visibleItems = 1 }) => {
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
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500 gap-2" style={{ transform: `translateX(-${(curr * 100) / visibleItems}%)` }}> {carouselCard.map((card, index) => (
        <div
          key={index}
          style={{
            flex: `0 0 ${100 / visibleItems}%`, // Šírka každého obrázka
          }}
          className="relative"
        >
          {card}
        </div>
      ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white opacity-80 text-primary-900 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white opacity-80 text-primary-900 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 ">
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
