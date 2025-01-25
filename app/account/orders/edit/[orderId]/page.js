import SubmitButton from "@/app/_components/SubmitButton"
import { updateOrder } from "@/app/_lib/actions"
import { getOrder, getSettings } from "@/app/_lib/data-service"

export default async function Page({ params }) {
  const { orderId } = params
  const { NoOfPcs, notes } = await getOrder(orderId)
  const { maxPcsToOrder } = await getSettings()

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Order #{orderId}
      </h2>

      <form
        action={updateOrder}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <input type="hidden" name="orderId" value={orderId} />

        <div className="space-y-2">
          <label htmlFor="NoOfPcs">How many items?</label>
          <select
            name="NoOfPcs"
            defaultValue={NoOfPcs}
            id="NoOfPcs"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of items...
            </option>
            {Array.from({ length: maxPcsToOrder }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "item" : "items"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes">
            Anything we should know about your order?
          </label>
          <textarea
            name="notes"
            defaultValue={notes}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">Update order</SubmitButton>
        </div>
      </form>
    </div>
  )
}
