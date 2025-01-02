import { getProuct } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { CiBarcode } from "react-icons/ci";
import { HiOutlineBanknotes } from "react-icons/hi2";

export default async function Page({ params }) {
    const product = await getProuct(params.productId);

    const { id, name, code, regularPrice, discount, image, description } = product;

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="flex justify-between border border-primary-800 mb-24">
                <div className="relative h-96 w-96 flex-shrink-0 ">
                    <Image
                        src={image}
                        alt={`Product ${name}`}
                        fill
                        className="object-cover h-full w-full"
                    />
                </div>

                <div className="flex-grow max-w-[50%] ml-6 py-6 pr-10 flex flex-col justify-between">
                    <div>
                        <h3 className="text-accent-100 font-black text-3xl mb-5 bg-primary-950 py-6 pb-1 w-full">
                            {name}
                        </h3>

                        <p className="text-lg text-primary-300 mb-20">{description}</p>
                    </div>

                    <ul className="flex flex-col gap-4 mb-7 self-end">
                        <li className="flex gap-3 items-center">
                            <HiOutlineBanknotes className="h-7 w-7 text-primary-600" />
                            <p className="flex gap-3 justify-end items-baseline">
                                {discount > 0 ? (
                                    <>
                                        <span className="text-2xl font-[350]">
                                            €{regularPrice - discount}
                                        </span>
                                        <span className="line-through font-semibold text-primary-600">
                                            €{regularPrice}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-3xl font-[350]">€{regularPrice}</span>
                                )}
                            </p>
                        </li>
                        <li className="flex gap-3 items-center">
                            <CiBarcode className="h-7 w-7 text-primary-600" />
                            <span className="text-lg">
                                Code: <span className="font-bold">{code}</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
