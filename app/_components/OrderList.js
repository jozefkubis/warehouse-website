"use client"

import { useOptimistic } from "react"
import OrderCard from "./OrderCard"
import { deleteOrder } from "../_lib/actions";

function OrderList({ orders }) {

    const [optimisticOrders, optimisticDelete] = useOptimistic(
        orders,
        (curOrders, orderId) => {
            return curOrders.filter((order) => order.id !== orderId)
        }
    )
    async function handleDelete(orderId) {
        optimisticDelete(orderId)
        await deleteOrder(orderId)
    }

    return (
        <ul className="space-y-6">
            {optimisticOrders.map((order) => (
                <OrderCard order={order} key={order.id} onDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default OrderList
