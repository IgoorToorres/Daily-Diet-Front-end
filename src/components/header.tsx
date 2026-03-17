"use client"

import { cn } from "@/lib/utils"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface DefaultHeaderProps {
  title: string
  className?: string
}

export default function DefaultHeader({
  title,
  className,
}: DefaultHeaderProps) {
  return (
    <div className={cn("bg-gray-300 h-30 relative top-0", className)}>
      <div className="flex items-center justify-center h-full w-full">
        <Link href={"/"} className="absolute left-4 text-gray-2">
          <ArrowLeftIcon size={25} />
        </Link>

        <p className="text-gray-2 font-bold text-[24px]">{title}</p>
      </div>
    </div>
  )
}
