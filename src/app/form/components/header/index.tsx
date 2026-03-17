"use client"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import Link from "next/link"

export default function FormHeader() {
  return (
    <div className="bg-gray-300 h-30 relative top-0">
      <div className="flex items-center justify-center h-full w-full">
        <Link href={"/"} className="absolute left-4 text-gray-2">
          <ArrowLeftIcon size={25} />
        </Link>
        <p className="text-gray-2 font-bold text-[24px]">Nova refeição</p>
      </div>
    </div>
  )
}
