import Header from "@/app/_components/Header"
import "@/app/_styles/globals.css"
import { Noto_Sans } from "next/font/google"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
})

console.log(notoSans)

export const metadata = {
  title: {
    template: "%s / Warehouse",
    default: "Welcome / Warehouse",
  },
  description:
    "The Warehouse is a place where you can find all the products you need.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
