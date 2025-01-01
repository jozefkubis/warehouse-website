import { unstable_noStore as noStore } from "next/cache"

import ProductCard from "@/app/_components/ProductCard"
import { getWarehouseStore } from "@/app/_lib/data-service"

async function ProductList() {
  const products = await getWarehouseStore()

  if (!products.length) return null

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductList
