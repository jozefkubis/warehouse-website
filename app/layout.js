import "@/app/_styles/globals.css"
import Navigation from "@/app/_components/Navigation"
import Logo from "@/app/_components/Logo"

export const metadata = {
  title: {
    default: "Welcome / Warehouse",
    template: "%s / Warehouse",
  },
  //   description:
  //     "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
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
