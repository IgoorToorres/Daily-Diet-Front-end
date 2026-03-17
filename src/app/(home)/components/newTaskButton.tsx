import Button from "@/src/components/button"
import { PlusIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface NewTaskButtonProps {
  handleNewSnack: () => void
}

export default function NewTaskButton({ handleNewSnack }: NewTaskButtonProps) {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <span className="text-gray-2">Refeições</span>
      <Link href={"/form"}>
        <Button className="w-full" onClick={handleNewSnack}>
          <PlusIcon />
          Nova refeição
        </Button>
      </Link>
    </div>
  )
}
