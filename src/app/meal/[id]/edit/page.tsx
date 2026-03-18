import DefaultHeader from "@/components/header"
import MealForm from "@/components/mealForm"
import { GetMeal } from "@/http/get-meal"

type EditMealPage = {
  params: Promise<{
    id: string
  }>
}

export default async function EditMealPage({ params }: EditMealPage) {
  const { id } = await params
  const meal = await GetMeal({ id })

  if (!meal) {
    return <div>Refeição não encontrada</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DefaultHeader title="Editar refeição" />
      <MealForm mode="edit" initialData={meal} mealId={id} />
    </div>
  )
}
