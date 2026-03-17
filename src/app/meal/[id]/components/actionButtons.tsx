"use client"
import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "@phosphor-icons/react"

interface ActionButtonsProps {
  onDelete: () => void
  onRedirect: () => void
}

export default function ActionButtons({
  onDelete,
  onRedirect,
}: ActionButtonsProps) {
  return (
    <div className="w-full flex flex-col items-center mt-auto pb-10 px-10 gap-2">
      <Button className="w-full gap-2 py-5 " onClick={onRedirect}>
        <PencilIcon size={13} />
        Editar refeição
      </Button>
      <Button
        className="w-full gap-2 py-5 border border-gray-1 bg-transparent text-gray-1"
        onClick={onDelete}
      >
        <TrashIcon size={13} />
        Ecluir refeição
      </Button>
    </div>
  )
}
