import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns"
import DeleteOrder from "@/app/_components/DeleteOrder"
import Image from "next/image"

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "")

function OrderCard({ order }) {
  const {
    id,
    storeId,
    created_at,
    isPaid,
    NoOfPcs,
    WarehouseStore: { name, image, code, regularPrice, discount, description },
  } = order

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {NoOfPcs}
            {""}
            {name}
          </h3>
        </div>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="ml-auto text-sm text-primary-400">
            Ordered {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-[100px]">
        <a
          href={`/account/reservations/edit/${id}`}
          className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Edit</span>
        </a>
        <DeleteOrder orderId={id} />
      </div>
    </div>
  )
}

export default OrderCard
