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

export async function deleteOrder(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("orders").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("Order could not be deleted")
  }
  return data
}

export async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v2/all?fields=name,flag")
    const countries = await res.json()
    return countries
  } catch {
    throw new Error("Could not fetch countries")
  }
}
