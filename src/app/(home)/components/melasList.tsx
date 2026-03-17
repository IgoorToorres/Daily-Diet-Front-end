import type { MealsByDate } from "@/@types/meals"

interface MealsListProps {
  meals: MealsByDate[]
}

export default function MealsList({ meals }: MealsListProps) {
  return (
    <div className="flex flex-col mt-10">
      {meals.map((meal) => (
        <div key={meal.date} className="mb-6">
          <span className="font-bold text-gray-1">
            {new Date(meal.date).toLocaleDateString("pt-BR")}
          </span>

          {meal.meals.map((m) => (
            <div
              key={m.id}
              className="flex gap-3 items-center border border-gray-5 p-3 rounded-lg mt-2 "
            >
              <p className="font-bold text-gray-1">{m.time}</p>
              <span className=" text-gray-4">|</span>
              <p className="flex-1 truncate text-gray-2">{m.name}</p>

              <span
                className={`w-3 h-3 rounded-full ${
                  m.isOnDiet ? "bg-green-mid" : "bg-red-mid"
                }`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
