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
