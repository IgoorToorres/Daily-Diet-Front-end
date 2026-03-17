import DefaultHeader from "@/components/header"
import MealForm from "@/components/mealForm"
import { Meal } from "@/mock/mealMock"

type EditMealPage = {
  params: Promise<{
    id: string
  }>
}

export default async function EditMealPage({ params }: EditMealPage) {
  const { id } = await params

  //TODO: buscar meal pelo id

  const meal = Meal

  if (!meal) {
    return <div>Refeição não encontrada</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DefaultHeader title="Editar refeição" />
      <MealForm mode="edit" initialData={meal} />
    </div>
  )
}
