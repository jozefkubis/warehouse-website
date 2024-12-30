import Image from "next/image"
import Link from "next/link"
// import bg from "../public/bg.png"

function Page() {
  return (
    <main className="mt-24">
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
  )
}

export default Page
