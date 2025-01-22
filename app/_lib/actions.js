"use server"

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase";

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


export async function signInAction() {
    await signIn("google", { redirectTo: "/account" })
}

export async function signOutAction() {
    await signOut("google", { redirectTo: "/" })
}