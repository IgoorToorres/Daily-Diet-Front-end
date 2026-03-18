import { z } from "zod"

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url().optional().default("http://localhost:3333"),
})

export const clientEnv = clientEnvSchema.parse(process.env)
