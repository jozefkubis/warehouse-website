"use client"

import { useState } from "react"

export default function SearchBar() {
  const [searchingProduct, setSearchingProduct] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const productsAfterFilter = displayedProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchingProduct.toLowerCase()) ||
        product.code.toString().includes(searchingProduct.toLowerCase()) ||
        product.regularPrice.toString().includes(searchingProduct.toLowerCase())
    )
    setFilteredProducts(productsAfterFilter)
    console.log(filteredProducts)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <input
          className="px-5 py-2 bg-primary-700 text-primary-50 ml-6 border border-primary-800 outline-none"
          placeholder="Search..."
          type="search"
          value={searchingProduct}
          onChange={(e) => setSearchingProduct(e.target.value)}
        />
      </form>
    </div>
  )
}
