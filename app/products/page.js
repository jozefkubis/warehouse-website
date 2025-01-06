import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ProductList from "../_components/ProductList";

export const revalidate = 3600; // seconds

export const metadata = {
  title: "Products",
};

export default async function Page({ searchParams }) {

  const filter = searchParams?.discount ?? "all";
  const searchTerm = searchParams?.search ?? "";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Our Products</h1>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={`${filter}-${searchTerm}`}>
        <ProductList filter={filter} searchTerm={searchTerm} />
      </Suspense>
    </div>
  );
}
