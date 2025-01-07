import { getWarehouseStore } from "../_lib/data-service"

async function DisplayedProducts({ filter }) {
  try {
    const products = await getWarehouseStore()

    if (!products.length) return null

    let displayedProducts

    if (filter === "all") {
      displayedProducts = products
    } else if (filter === "with-discount") {
      displayedProducts = products.filter((product) => product.discount > 0)
    } else {
      displayedProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(filter.toLowerCase()) ||
          product.code.toString().includes(filter.toLowerCase()) ||
          product.regularPrice.toString().includes(filter.toLowerCase())
      )
    }

    return displayedProducts
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return null
  }
}

export default DisplayedProducts
