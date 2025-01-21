import UpdateProfileForm from "@/app/_components/UpdateProfileForm"
import { auth } from "@/app/_lib/auth"
import { getCustomer } from "@/app/_lib/data-service"

export const metadata = {
  title: "Update profile",
}

export default async function Page() {
  // const session = await auth()
  // const customer = getCustomer(session.user.email)

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your customer profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your ordering process
        faster and smoother.h
      </p>

      <UpdateProfileForm />
    </div>
  )
}
