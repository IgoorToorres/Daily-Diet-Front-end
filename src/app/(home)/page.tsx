import type { MealsListResponse } from "@/@types/meals"
import { GetListMeals } from "@/http/get-list-meals"
import MealsList from "./components/mealsList"
import NewTaskButton from "./components/newTaskButton"
import PercentageIndicator from "./components/percentageIndicator"

export default async function Home() {
  const percentage = 90.29
  const meals: MealsListResponse = await GetListMeals()

  return (
    <div className="m-5">
      <PercentageIndicator percentage={percentage} />
      <NewTaskButton />
      <MealsList meals={meals.meals} />
    </div>
  )
}
