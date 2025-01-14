import Image from "next/image"
import Link from "next/link"

export default function CarouselCard({ product }) {

    return (
        <Link href={`/products/${product.id}`}>
            < div className="flex flex-col cursor-pointer bg-primary-900 border-4 border-primary-900 hover:border-primary-600 hover:bg-primary-600 rounded-md hover:scale-95 transition-all" >
                <div className="flex relative h-56 w-auto flex-col">
                    <Image src={product.image} alt={`Product ${product.name}`} fill className="rounded-t-md object-cover " />
                </div>
                <div className="flex flex-col items-center justify-between h-20  text-primary-100 font-semibold  p-2 rounded-b-md">
                    <p className="text-center text-[0.9rem]">{(product.name).split(" ").slice(0, 2).join(" ")}</p>
                    <p className="text-xl">${product.regularPrice}</p>
                </div>
            </ div >
        </Link >
    )
}





