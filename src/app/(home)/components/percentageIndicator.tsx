"use client"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface PercentageIndicatorProps {
  percentage: number
}

export default function PercentageIndicator({
  percentage,
}: PercentageIndicatorProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute">
        <div
          className={`relative right-[-140] top-2 ${percentage >= 50 ? "text-green-dark" : "text-red-dark"}`}
        >
          <ArrowUpRightIcon size={25} />
        </div>
      </div>

      <Link href={"/statistics"}>
        <div
          className={`flex flex-col w-81.75 h-25.5 ${percentage >= 50 ? "bg-green-light" : "bg-red-light"} bg-green-light justify-center items-center rounded-lg`}
        >
          <h1 className="text-gray-1 font-bold text-[32px]">{percentage}%</h1>
          <p className="text-gray-2 text-[14px] font-extralight">
            das refeições dentro da dieta
          </p>
        </div>
      </Link>
    </div>
  )
}
