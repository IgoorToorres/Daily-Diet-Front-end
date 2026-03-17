"use client"
import type { MealsByDate } from "@/types/meals"
import { mealsMock } from "@/mock/melasMock"
import MealsList from "./components/melasList"
import NewTaskButton from "./components/newTaskButton"
import PercentageIndicator from "./components/percentageIndicator"

export default function Home() {
  const percentage = 90.29
  const meals: MealsByDate[] = mealsMock

  function handleNewSnack() {
    // TODO: cadastrar nova refeição
    console.log("nova refeição")
  }
  return (
    <div className="m-5">
      <PercentageIndicator percentage={percentage} />
      <NewTaskButton handleNewSnack={handleNewSnack} />
      <MealsList meals={meals} />
    </div>
  )
}
