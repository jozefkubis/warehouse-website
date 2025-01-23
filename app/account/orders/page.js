import OrderList from "@/app/_components/OrderList"
import { auth } from "@/app/_lib/auth"
import { getOrders } from "@/app/_lib/data-service"
import Link from "next/link"

export const metadata = {
  title: "Orders",
}
export default async function Page() {

  const session = await auth()
  const orders = await getOrders(session.user.customerId)

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-lg">
          You have no orders yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/products">
            our products &rarr;
          </Link>
        </p>
      ) : (
        <OrderList orders={orders} />
      )}
    </div>
  )
}
