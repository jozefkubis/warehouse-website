"use client"

import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(1)

  function handleClickInc() {
    setCount(count + 1)
  }

  function handleClickDec() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex gap-4 items-center">
      <div>
        <button onClick={handleClickDec}>-</button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={handleClickInc}>+</button>
      </div>
      <div>
        <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          add to card
        </button>
      </div>
    </div>
  )
}
