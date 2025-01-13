import Image from "next/image"

export default function CarouselCard({ product }) {

    return (
        <div className="flex flex-col" >
            <div className="flex relative h-56 w-auto flex-col">
                <Image src={product.image} alt={`Product ${product.name}`} fill className="rounded-t-md object-cover border-4 border-primary-500" />
            </div>
            <div className="flex flex-col items-center justify-between h-20 bg-primary-500 text-primary-900 font-semibold  p-2 rounded-b-md">
                <p className="text-center text-[0.9rem]">{(product.name).split(" ").slice(0, 2).join(" ")}</p>
                <p className="text-xl">${product.regularPrice}</p>
            </div>
        </div >
    )
}





