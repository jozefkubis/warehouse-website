import { Suspense } from "react"
import Spinner from "../_components/Spinner"
// import ReservationReminder from "@/app/_components/ReservationReminder"
import { getWarehouseStore } from "../_lib/data-service"
import ProductList from "../_components/ProductList"
import Filter from "../_components/Filter"
import SearchBar from "../_components/SearchBar"

export const revalidate = 3600 /* seconds */

export const metadata = {
  title: "Products",
}

export default async function Page({ searchParams }) {
  const filter = searchParams?.discount ?? "all"

  const searchProducts = await getWarehouseStore()

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Products
      </h1>

      <div className="flex justify-end mb-8">
        <Filter searchProducts={searchProducts} />
        <SearchBar searchProducts={searchProducts} />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ProductList filter={filter} />
        {/* <ReservationReminder /> */}
      </Suspense>
    </div>
  )
}
