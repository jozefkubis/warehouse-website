import Image from "next/image"

export default async function CarouselCard({ product }) {

    return (
        <div className="flex flex-col" >
            <div className="flex relative h-44 w-44 flex-col">
                <Image src={product.image} alt={`Product ${product.name}`} fill className="rounded-t-md object-cover" />
            </div>
            <div className="flex flex-col items-center justify-between h-20 bg-primary-200 text-primary-900 font-semibold  p-2 rounded-b-md">
                <p className="text-center text-[0.9rem]">{(product.name).split(" ").slice(0, 2).join(" ")}</p>
                <p className="text-xl">${product.regularPrice}</p>
            </div>
        </div >
    )
}





