import { cn } from "@/lib/utils"
import { Geist, Nunito_Sans } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(nunito.className, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
