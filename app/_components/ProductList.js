import { unstable_noStore as noStore } from "next/cache"

import ProductCard from "@/app/_components/ProductCard"
import { getWarehouseStore } from "@/app/_lib/data-service"

async function ProductList({ filter }) {
  // noStore()

  const products = await getWarehouseStore()

  if (!products.length) return null

  let displayedProducts

  if (filter === "all") displayedProducts = products

  if (filter === "with-discount")
    displayedProducts = products.filter((product) => product.discount > 0)

  if (filter === "no-discount")
    displayedProducts = products.filter((product) => product.discount === 0)

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
