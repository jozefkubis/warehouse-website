import Link from "next/link"
import Navigation from "@/app/_components/Navigation"

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">
        Welcome to the Main Next Warehouse Page
      </h1>

      <Link href="/products">Check our products</Link>
    </div>
  )
}

export default Page
