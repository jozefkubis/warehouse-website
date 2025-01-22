import { notFound } from "next/navigation"
import { supabase } from "./supabase"

export async function getWarehouseStore() {
  const { data, error } = await supabase
    .from("WarehouseStore")
    .select("id, created_at, name, code, regularPrice, discount, image")
    .order("name")

  if (error) {
    console.error(error)
    throw new Error("Store could not be loaded")
  }

  return data
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("WarehouseStore")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error(error)
    notFound()
  }

  return data
}

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select(
      "id, created_at, NoOfPcs,  status, notes, WarehouseStore(name, code, regularPrice, discount), customers(fullName, email, address)",
      { count: "exact" }
    )
    .order("WarehouseStore(name)")

  if (error) {
    console.error(error)
    throw new Error("Orders could not be loaded")
  }

  return data
}

export async function getOrder(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*, WarehouseStore(*), customers(*)")
    .eq("id", id)
    .single()

  if (error) {
    console.error(error)
    throw new Error("Order not found")
  }

  return data
}

export async function deleteOrder(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("orders").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Order could not be deleted")
  }
  return data
}


export async function getCustomer(email) {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("email", email)
    .single()

  return data
}

export async function createCustomer(newCustomer) {
  const { data, error } = await supabase.from("customers").insert([newCustomer])

  if (error) {
    console.error(error)
    throw new Error("Customer could not be created")
  }

  return data
}