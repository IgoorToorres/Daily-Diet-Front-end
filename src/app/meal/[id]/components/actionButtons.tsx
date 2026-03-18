"use client"
import { Button } from "@/components/ui/button"
import { DeleteMeal } from "@/http/delete-meal"
import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

interface ActionButtonsProps {
  id: string
}

export default function ActionButtons({ id }: ActionButtonsProps) {
  const router = useRouter()

  async function onDelete() {
    try {
      await DeleteMeal({ id })
      router.refresh()
      router.push("/")
    } catch (error) {
      console.error(error)
    }
    console.log("deletar refeicao")
  }

  function onRedirect() {
    router.push(`/meal/${id}/edit`)
  }

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
