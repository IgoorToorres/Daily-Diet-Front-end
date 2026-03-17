import DefaultHeader from "@/components/header"
import { Meal } from "@/mock/mealMock"
import ActionButtons from "./components/actionButtons"

type MealPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function MealPage({ params }: MealPageProps) {
  const { id } = await params

  //TODO: resgatar meal especifica pelo id

  const meal = Meal

  return (
    <div className="min-h-screen flex flex-col">
      <DefaultHeader title="Refeição" className="bg-green-light" />
      <div className="flex flex-col gap-2 p-8">
        <p className="text-xl font-bold text-gray-2">{meal.name}</p>
        <p className="text-gray-3 mb-5">{meal.description}</p>
        <p className="text-gray-2 font-bold">Data e hora</p>
        <p className="text-gray-3 mb-5">
          {meal.date} às {meal.time}
        </p>
        <div
          className={`flex items-center justify-center w-30 h-10 rounded-lg p-2 gap-2 ${meal.isOnDiet ? "bg-green-light" : "bg-red-light"}`}
        >
          <div
            className={`w-2 h-2 rounded-full ${meal.isOnDiet ? "bg-green-dark" : "bg-red-dark"}`}
          />
          <p className="text-[11px]">Dentro da dieta</p>
        </div>
      </div>

      <ActionButtons id={id} />
    </div>
  )
}
