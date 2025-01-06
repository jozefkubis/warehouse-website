import ProductCard from "@/app/_components/ProductCard"
import { getWarehouseStore } from "@/app/_lib/data-service"
import DisplayedProducts from "@/app/_components/DisplayedProducts"

async function ProductList({ filter, searchTerm }) {
  const products = await getWarehouseStore()
  const displayedProducts = await DisplayedProducts({ filter, searchTerm })

  return (
    <div>
      <div className="flex justify-end items-center mb-8 text-lg">
        <h4>
          Showing {displayedProducts.length} out of {products.length} results
        </h4>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {displayedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
