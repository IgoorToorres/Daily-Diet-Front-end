"server only"
import { clientEnv } from "@/env"
import { headers } from "next/headers"
import { getCookiesFromHeaders } from "./utils/get-cookies-from-header"

export async function GetStats() {
  const url = new URL("/meals/stats", clientEnv.NEXT_PUBLIC_API_URL)

  const incomingHeaders = await headers()
  const response = await fetch(url, {
    headers: getCookiesFromHeaders(incomingHeaders),
  })
  const data = await response.json()

  return data
}
