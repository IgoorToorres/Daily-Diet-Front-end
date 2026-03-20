"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CreateMeal } from "@/http/create-meal"
import { EditMeal } from "@/http/edit-meal"
import { type MealFormData, mealSchema } from "@/schemas/meal.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarDotIcon,
  ChatCircleDotsIcon,
  ClockIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

function formatDate(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8)
  const day = digits.slice(0, 2)
  const month = digits.slice(2, 4)
  const year = digits.slice(4, 8)

  let result = day
  if (month.length > 0) result += `/${month}`
  if (year.length > 0) result += `/${year}`
  return result
}

function formatTime(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4)
  const hour = digits.slice(0, 2)
  const minute = digits.slice(2, 4)

  let result = hour
  if (minute.length > 0) result += `:${minute}`
  return result
}

interface MealFormProps {
  mode: "create" | "edit"
  mealId?: string
  initialData?: MealFormData
}

export default function MealForm({
  mode = "create",
  mealId,
  initialData,
}: MealFormProps) {
  const router = useRouter()

  const form = useForm<MealFormData>({
    resolver: zodResolver(mealSchema),
    defaultValues: initialData ?? {
      name: "",
      description: "",
      date: "",
      time: "",
      isOnDiet: true,
    },
  })

  async function onSubmit(data: MealFormData) {
    if (mode === "create") {
      await handleCreate(data)
      return
    }

    await handleEdit(data)
  }

  async function handleCreate(data: MealFormData) {
    try {
      await CreateMeal(data)
      router.push(`/form/feedback?isOnDiet=${data.isOnDiet}`)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async function handleEdit(data: MealFormData) {
    try {
      await EditMeal({ ...data, id: mealId })
      router.refresh()
      router.back()
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1 p-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <div className="relative">
                  <ForkKnifeIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-3"
                    size={20}
                  />
                  <Input
                    className="h-12 pl-10"
                    placeholder="Digite o nome do alimento..."
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <div className="relative">
                  <ChatCircleDotsIcon
                    className="absolute left-3 top-5 -translate-y-1/2 transform text-content-brand"
                    size={20}
                  />
                  <Textarea
                    placeholder="Escreva algo..."
                    className="min-h-40 resize-y pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex flex-row gap-5">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data</FormLabel>
                <FormControl>
                  <div className="relative">
                    <CalendarDotIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-3"
                      size={20}
                    />
                    <Input
                      ref={field.ref}
                      name={field.name}
                      value={field.value ?? ""}
                      onChange={(event) =>
                        field.onChange(formatDate(event.target.value))
                      }
                      onBlur={field.onBlur}
                      inputMode="numeric"
                      autoComplete="off"
                      className="h-12 pl-10"
                      placeholder="--/--/----"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora</FormLabel>
                <FormControl>
                  <div className="relative">
                    <ClockIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-3"
                      size={20}
                    />
                    <Input
                      ref={field.ref}
                      name={field.name}
                      value={field.value ?? ""}
                      onChange={(event) =>
                        field.onChange(formatTime(event.target.value))
                      }
                      onBlur={field.onBlur}
                      inputMode="numeric"
                      autoComplete="off"
                      className="h-12 pl-10"
                      placeholder="--:--"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="isOnDiet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Está dentro da dieta?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="dietYes"
                    size="diet"
                    data-state={field.value === true ? "active" : "inactive"}
                    onClick={() => field.onChange(true)}
                  >
                    <span className="size-2 rounded-full bg-green-700" />
                    Sim
                  </Button>

                  <Button
                    type="button"
                    variant="dietNo"
                    size="diet"
                    data-state={field.value === false ? "active" : "inactive"}
                    onClick={() => field.onChange(false)}
                  >
                    <span className="size-2 rounded-full bg-red-500" />
                    Não
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-auto pb-6">
          <Button
            type="submit"
            className="bg-gray-2 font-extralight p-6 w-full"
          >
            Salvar Refeição
          </Button>
        </div>
      </form>
    </Form>
  )
}
