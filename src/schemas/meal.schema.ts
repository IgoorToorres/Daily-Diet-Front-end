import { z } from "zod"

export const mealSchema = z.object({
  id: z.uuid().optional(),
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .min(3, "Nome deve ter ao menos 3 caracteres")
    .max(100, "Nome muito grande"),

  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .min(3, "Descrição deve ter no mínimo 3 caracteres")
    .max(255, "Descrição muito grande"),

  date: z.string().min(1, "A data é obrigatória"),

  time: z.string().min(1, "o horário é obrigatório"),

  isOnDiet: z.boolean().nonoptional(),
})

export type MealFormData = z.infer<typeof mealSchema>
