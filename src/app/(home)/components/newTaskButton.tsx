"use client"
import Button from "@/components/button"
import { PlusIcon } from "@phosphor-icons/react"
import Link from "next/link"

export default function NewTaskButton() {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <span className="text-gray-2">Refeições</span>
      <Link href={"/form"}>
        <Button className="w-full">
          <PlusIcon />
          Nova refeição
        </Button>
      </Link>
    </div>
  )
}
