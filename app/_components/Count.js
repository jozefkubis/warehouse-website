"use client";

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);

  function handleClickInc() {
    setCount(count + 1);
  }

  function handleClickDec() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handleClickDec}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        -
      </button>
      <span className="text-lg">{count}</span>
      <button
        onClick={handleClickInc}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
      >
        +
      </button>
      <button
        className="bg-accent-500 text-white px-6 py-2 ml-4 rounded-lg font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
        disabled={count === 0}
      >
        Add to Card
      </button>
    </div>
  );
}
