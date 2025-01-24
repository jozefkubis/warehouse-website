"use server"

import { revalidatePath } from "next/cache"
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"
import { getOrders } from "./data-service"
import { redirect } from "next/navigation"

export async function updateCustomer(formData) {
  const session = await auth()
  if (!session)
    throw new Error("You must be logged in to update your customer profile.")

  const address = formData.get("address").slice(0, 500)

  const updateData = { address }

  const { error } = await supabase
    .from("customers")
    .update(updateData)
    .eq("id", session.user.customerId)

  if (error) throw new Error("Profile could not be updated")

  revalidatePath("/account/profile")
}

export async function createOrder(orderData, formData) {
  const session = await auth()
  if (!session) throw new Error("You must be logged in.")

  const newOrder = {
    ...orderData,
    customerId: session.user.customerId,
    NoOfPcs: Number(formData.get("NoOfPcs")),
    notes: formData.get("notes").slice(0, 1000),
    // totalPrice: orderData.itemPrice,
    isPaid: false,
    status: "processing",
  }

  const { error } = await supabase.from("orders").insert([newOrder])

  if (error) {
    console.error("Supabase Insert Error:", error) // Debug
    throw new Error("Order could not be created")
  }

  revalidatePath(`/orders/${orderData.storeId}`)
  redirect("/products/thankyou")
}

export async function deleteOrder(orderId) {
  const session = await auth()
  if (!session) throw new Error("You must be logged in.")

  const customerOrders = await getOrders(session.user.customerId)
  const customerOrderIds = customerOrders.map((order) => order.id)

  if (!customerOrderIds.includes(orderId))
    throw new Error("You cannot delete this booking.")

  const { error } = await supabase.from("orders").delete().eq("id", orderId)

  if (error) throw new Error("Order could not be deleted")

  revalidatePath("/account/orders")
}

//...........................................................................

export async function updateOrder(formData) {
  // 1) Authentication
  const session = await auth()
  if (!session)
    throw new Error("You must be logged in to update your reservation.")

  // 2) Authorization
  const orderId = Number(formData.get("orderId"))
  const customerOrders = await getOrders(session.user.customerId)
  const customerOrderIds = customerOrders.map((order) => order.id)

  if (!customerOrderIds.includes(orderId))
    throw new Error("You cannot update this order.")

  // 3) Update data building
  const updateData = {
    NoOfPcs: Number(formData.get("NoOfPcs")),
    notes: formData.get("notes").slice(0, 500),
  }

  // 4) Mutation
  const { error } = await supabase
    .from("orders")
    .update(updateData)
    .eq("id", orderId)

  // 5) Error handling
  if (error) throw new Error("Order could not be updated")

  // 5) Revalidation
  revalidatePath(`/account/orders/edit/${orderId}`)
  revalidatePath("/account/orders")

  // 7) Redirecting
  redirect("/account/orders")
}

//...........................................................................

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" })
}

export async function signOutAction() {
  await signOut("google", { redirectTo: "/" })
}
