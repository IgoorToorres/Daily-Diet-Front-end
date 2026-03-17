import Header from "./components/header"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      {children}
    </div>
  )
}
