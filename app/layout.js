import "@/app/_styles/globals.css"

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
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
