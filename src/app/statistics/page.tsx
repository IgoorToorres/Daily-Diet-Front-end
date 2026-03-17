import StatisticsHeader from "./components/statisticsHeader"

export default function Statistics() {
  const percentage = 45.85
  return (
    <>
      <StatisticsHeader percentage={percentage} />

      <div className="flex flex-col gap-5 items-center mt-5 p-5">
        <p className="font-bold text-gray-1">Estatísticas gerais</p>

        <div className=" w-full rounded-lg bg-gray-6 p-5 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-gray-1">{"22"}</span>
          <p className="text-gray-2">
            melhor sequência de pratos dentro da dieta
          </p>
        </div>

        <div className=" w-full rounded-lg bg-gray-6 p-5 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-gray-1">109</span>
          <p className="text-gray-2">refeições registradas</p>
        </div>

        <div className="flex justify-between gap-3 w-full">
          <div className="flex flex-col items-center justify-center gap-2 bg-green-light px-2 py-5 rounded-lg">
            <span className="text-gray-2 text-3xl font-bold">99</span>
            <p className="text-gray-3 text-[14px]">refeições dentro da dieta</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-red-light px-2 py-5 rounded-lg">
            <span className="text-gray-2 text-3xl font-bold">10</span>
            <p className="text-gray-3 text-[14px]">refeições fora da dieta</p>
          </div>
        </div>
      </div>
    </>
  )
}
