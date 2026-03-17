export type Meal = {
  id: string
  time: string
  name: string
  isOnDiet: boolean
}

export type MealsByDate = {
  date: string
  meals: Meal[]
}
