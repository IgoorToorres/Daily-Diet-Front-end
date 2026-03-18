"use server"
import { clientEnv } from "@/env"
import type { MealFormData } from "@/schemas/meal.schema"
import { cookies, headers } from "next/headers"
import { getCookiesFromHeaders } from "./utils/get-cookies-from-header"

export async function CreateMeal({
  name,
  description,
  date,
  time,
  isOnDiet,
}: MealFormData) {
  const url = new URL("/meals", clientEnv.NEXT_PUBLIC_API_URL)

  const incomingHeaders = await headers()

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ name, description, date, time, isOnDiet }),
    headers: getCookiesFromHeaders(incomingHeaders),
  })

  const setCookie = response.headers.get("set-cookie")
  if (setCookie) {
    const cookieStore = await cookies()
    cookieStore.set({
      name: setCookie.split("=")[0],
      value: setCookie.split("=")[1].split(";")[0],
      path: "/",
    })
  }

  const data = await response.json()
  return data
}
