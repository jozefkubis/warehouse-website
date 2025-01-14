import Link from "next/link"
import MultiCarousel from "./_components/MultiCarousel"
import { getWarehouseStore } from "./_lib/data-service"
import Image from "next/image"
import CarouselCard from "./_components/CarouselCard"
import bg from "../public/bg.png"

async function Page() {
  const products = await getWarehouseStore()

  const carouselCard = products.map((product) =>
    <CarouselCard product={product} key={product.id} />
  )

  return (
    <div className="flex flex-col items-center justify-around min-h-screen w-full  px-24 pb-24">
      {/* <main className=""> */}
      {/* <Image src={bg} fill quality={80} placeholder="blur" className="object-cover object-top" alt="warehouse" /> Prozatim bez pozadia */}

      <div className="relative z-10 text-center border">
        <h1 className="text-8xl text-primary-50  tracking-tight font-normal px-32 py-10">
          Warhouse shop
        </h1>
      </div>

      <div className="hover:scale-95 transition-all">
        <Link
          href="/products"
          className="bg-secondary-500  text-primary-800 text-3xl font-semibold hover:bg-accent-600 transition-all rounded-md p-10"
        >
          Check out our products
        </Link>
      </div>
      {/* </main> */}

      <div className=" w-3/4">
        <MultiCarousel autoSlide={true} autoSlideInterval={5000} visibleItems={6}>
          {carouselCard}
        </MultiCarousel>
      </div>
    </div>
  )
}

export default Page
