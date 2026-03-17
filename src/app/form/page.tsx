"use client"
import DefaultHeader from "@/components/header"
import MealForm from "@/components/mealForm"

export default function FormPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DefaultHeader title="Nova refeição" />
      <MealForm state="create" />
    </div>
  )
}
