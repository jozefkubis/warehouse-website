import OrderCard from "@/app/_components/OrderCard"
export const metadata = {
  title: "Orders",
}
export default function Page() {
  // CHANGE
  const orders = []
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-lg">
          You have no orders yet. Check out our{" "}
          <a className="underline text-accent-500" href="/products">
            our products &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order) => (
            <OrderCard order={order} key={order.id} />
          ))}
        </ul>
      )}
    </div>
  )
}
