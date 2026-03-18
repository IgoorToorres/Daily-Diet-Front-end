"use server"
import { clientEnv } from "@/env"
import { headers } from "next/headers"
import { getCookiesFromHeaders } from "./utils/get-cookies-from-header"

interface DeleteMealParams {
  id: string
}

export async function DeleteMeal({ id }: DeleteMealParams) {
  const url = new URL(`/meals/${id}`, clientEnv.NEXT_PUBLIC_API_URL)

  const incomingHeaders = await headers()

  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: getCookiesFromHeaders(incomingHeaders),
  })

  const raw = await response.text()
  if (!response.ok) {
    throw new Error(raw || `HTTP ${response.status}`)
  }

  if (!raw) return null
  return JSON.parse(raw)
}
