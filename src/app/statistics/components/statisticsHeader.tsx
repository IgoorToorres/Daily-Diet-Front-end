"use client"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface StatisticsHeaderProps {
  percentage: number
}

export default function StatisticsHeader({
  percentage,
}: StatisticsHeaderProps) {
  return (
    <div>
      <Link
        href={"/"}
        className={`absolute top-5 left-5 ${percentage >= 50 ? "text-green-dark" : "text-red-dark"}`}
      >
        <ArrowLeftIcon size={25} />
      </Link>
      <div
        className={`flex flex-col items-center justify-center gap-2 h-50 w-full ${percentage >= 50 ? "bg-green-light" : "bg-red-light"}`}
      >
        <span className="text-gray-1 font-bold text-4xl">{percentage}%</span>
        <p className="text-gray-2 text-[14px] font-extralight">
          das refeições dentro da dieta
        </p>
      </div>
    </div>
  )
}
