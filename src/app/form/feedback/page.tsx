import { Button } from "@/components/ui/button"
import Link from "next/link"

type FeedbackPageProps = {
  searchParams: Promise<{
    isOnDiet?: string
  }>
}

export default async function FeedbackPage({
  searchParams,
}: FeedbackPageProps) {
  const params = await searchParams

  const isOnDiet = params.isOnDiet === "true"
  console.log(isOnDiet)
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center gap-6">
      <p
        className={`${isOnDiet ? "text-green-dark " : "text-red-dark"} font-bold text-2xl`}
      >
        {isOnDiet ? "Continue assim!" : "Que pena!"}
      </p>
      {isOnDiet ? (
        <p className="text-gray-2 text-center">
          Você continua <strong>dentro da dieta</strong>, Muito bem!
        </p>
      ) : (
        <p className="text-gray-2 text-center">
          Você <strong>saiu da dieta</strong> dessa vez, mas continue se
          esforçando e não desista!
        </p>
      )}

      {/** biome-ignore lint/performance/noImgElement: <my image> */}
      <img
        src={isOnDiet ? "/Illustration.png" : "/Illustration (1).png"}
        alt={isOnDiet ? "imagem dentro da dieta" : "imagem fora da dieta"}
      />

      <Link href={"/"}>
        <Button className="bg-gray-2 px-8 py-5">
          Ir para a página inicial
        </Button>
      </Link>
    </div>
  )
}
