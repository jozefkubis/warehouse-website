import UpdateProfileForm from "@/app/_components/UpdateProfileForm"

export const metadata = {
  title: "Update profile",
}

export default function Page() {

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
