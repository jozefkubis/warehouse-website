"use client"

import { updateCustomer } from "../_lib/actions"
import SubmitButton from "./SubmitButton"


function UpdateProfileForm({ customer }) {


  const { fullName, email, address } = customer

  return (
    <form action={updateCustomer} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm  disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label>Address</label>
        <textarea
          defaultValue={address || ""}
          name="address"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>



      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Updating..." type="Updating...">Update profile</SubmitButton>
      </div>
    </form>
  )
}

export default UpdateProfileForm
