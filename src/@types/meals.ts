export type Meal = {
  id?: string
  name: string
  description: string
  date?: string
  time?: string
  isOnDiet: boolean
}

export type MealsByDate = {
  date: string
  meals: Meal[]
}

export type MealsListResponse = {
  meals: MealsByDate[]
}
