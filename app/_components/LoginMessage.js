import Link from "next/link"

function LoginMessage() {
  return (
    <div className=" bg-primary-800 rounded-md mt-5">
      <p className="text-center text-md p-6 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to order this product right now
      </p>
    </div>
  )
}

export default LoginMessage
