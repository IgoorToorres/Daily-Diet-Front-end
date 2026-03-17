export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen w-full bg-white">{children}</div>
}
