"use client"

import { cn } from "@/lib/utils"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

interface DefaultHeaderProps {
  title: string
  className?: string
}

export default function DefaultHeader({
  title,
  className,
}: DefaultHeaderProps) {
  const router = useRouter()
  return (
    <div className={cn("bg-gray-300 h-30 relative top-0", className)}>
      <div className="flex items-center justify-center h-full w-full">
        {/** biome-ignore lint/a11y/useButtonType: <normal button> */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 text-gray-2"
        >
          <ArrowLeftIcon size={25} />
        </button>

        <p className="text-gray-2 font-bold text-[24px]">{title}</p>
      </div>
    </div>
  )
}
