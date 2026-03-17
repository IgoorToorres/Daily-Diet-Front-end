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

interface MealFormProps {
  state: "create" | "edit"
  id?: string
}

export default function MealForm({ state, id }: MealFormProps) {
  const router = useRouter()

  const form = useForm<MealFormData>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      isOnDiet: true,
    },
  })

  async function onSubmit(data: MealFormData) {
    //TODO: mandar os dados para api
    console.log(data)
    router.push(`/feedback?isOnDiet=${data.isOnDiet}`)
    form.reset()
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
                      className="h-12 pl-10"
                      placeholder="--/--/--"
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
                      className="h-12 pl-10"
                      placeholder="--:--"
                      {...field}
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
