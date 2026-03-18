"server only"
import { clientEnv } from "@/env"
import { headers } from "next/headers"
import { getCookiesFromHeaders } from "./utils/get-cookies-from-header"

interface GetMealParams {
  id: string
}

export async function GetMeal({ id }: GetMealParams) {
  const url = new URL(`/meals/${id}`, clientEnv.NEXT_PUBLIC_API_URL)

  const incomingHeaders = await headers()
  const response = await fetch(url, {
    headers: getCookiesFromHeaders(incomingHeaders),
  })
  const data = await response.json()

  return data.meal
}
