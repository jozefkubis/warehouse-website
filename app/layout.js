import "@/app/_styles/globals.css"
import Navigation from "@/app/_components/Navigation"
import Logo from "@/app/_components/Logo"

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
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>Copyright by The Warehouse</footer>
      </body>
    </html>
  )
}
