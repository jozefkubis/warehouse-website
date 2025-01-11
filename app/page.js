import Link from "next/link"
import MultiCarousel from "./_components/MultiCarousel"
import { getWarehouseStore } from "./_lib/data-service"
import Image from "next/image"
// import bg from "../public/bg.png"

async function Page() {
  const products = await getWarehouseStore()

  const displayedImages = products.map((product) => product.image)



  return (
    <div className="flex flex-col items-center">
      <main className="">
        {/* <Image src={bg} fill quality={80} placeholder="blur" className="object-cover object-top" alt="warehouse" /> Prozatim bez pozadia */}

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
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
      <div className="mt-20 w-2/3">
        <MultiCarousel autoSlide={true} autoSlideInterval={3000}>
          {displayedImages.map((image, index) => <Image src={image} key={image} alt={`Image ${index}`} height={200} width={200} />)}
        </MultiCarousel>
      </div>
    </div>
  )
}

export default Page
