import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns"
import DeleteOrder from "@/app/_components/DeleteOrder"
import Image from "next/image"
import Link from "next/link"

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "")

function OrderCard({ order }) {
  const {
    id,
    created_at,
    NoOfPcs,
    status,
    WarehouseStore: { name, image, regularPrice, discount, },
  } = order

  const totalPrice = (regularPrice - discount) * NoOfPcs

  // status === "processing" || status === "checked-in" ? (
  //   <span className="bg-primary-600 text-white px-2 py-1 text-xs">
  //     {status}
  //   </span>
  // ) : (
  //   <span className="bg-primary-600 text-white px-2 py-1 text-xs">
  //     {status}
  //   </span>
  // )

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image
          fill
          src={image}
          alt={`Image ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {NoOfPcs}{" "}x{" "}
            {name}
          </h3>
          <p className="space-x-2"><span className="italic">Total price</span><span className="text-xl">${" "}{totalPrice}</span></p>
        </div>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="ml-auto text-sm text-primary-400 italic">
            Ordered {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
          {status === "processing" || status === "checked-in" ? (
            <span className="bg-green-600 text-white px-2 py-1 text-xs rounded-md">
              {status}
            </span>
          ) : (
            <span className="bg-primary-600 text-white px-2 py-1 text-xs rounded-md">
              {status}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-[100px]">
        {status === "processing" || status === "checked-in" ?
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteOrder orderId={id} />
          </>
          : null}
      </div>
    </div>
  )
}

export default OrderCard
