import Link from "next/link"
import MultiCarousel from "./_components/MultiCarousel"
import { getWarehouseStore } from "./_lib/data-service"
import Image from "next/image"
import CarouselCard from "./_components/CarouselCard"
// import bg from "../public/bg.png"

async function Page() {
  const products = await getWarehouseStore()

  const carouselCard = products.map((product) =>
    <CarouselCard product={product} key={product.id} />
  )

  return (
    <div className="flex flex-col items-center justify-around min-h-screen w-full pb-40 px-10 border border-red-900">
      <main className="">
        {/* <Image src={bg} fill quality={80} placeholder="blur" className="object-cover object-top" alt="warehouse" /> Prozatim bez pozadia */}

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-20 tracking-tight font-normal">
            Warhouse shop
          </h1>
          <Link
            href="/products"
            className="bg-secondary-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all rounded-md"
          >
            Check out our products
          </Link>
        </div>
      </main>
      <div className="mt-10 mb-20 pb-10 px-16 w-full ">
        <MultiCarousel autoSlide={false} autoSlideInterval={3000} visibleItems={5} >
          {carouselCard}
        </MultiCarousel>
      </div>
    </div>
  )
}

export default Page
