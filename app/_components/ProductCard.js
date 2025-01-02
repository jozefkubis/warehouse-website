import { CiBarcode } from "react-icons/ci";
import Image from "next/image"
import Link from "next/link"

function ProductCard({ product }) {
  const { id, name, code, regularPrice, discount, image } = product

  return (
    <div className="flex border-primary-800 border">
      <div className="w-48 h-48 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`Product ${name}`}
          className="object-cover"
          width={192}
          height={192}
        />
      </div>
      {/* <div className="flex-1 relative ">
        <Image
          src={image}
          fill
          alt={`Product ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div> */}


      <div className="flex-grow">
        <div className="pt-5 pb-2 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl mb-3">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <CiBarcode className="h-7 w-7 text-primary-600" />
            <p className="text-lg text-primary-200">
              Code:{" "}<span className="font-semibold">{code}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/products/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Order product &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
