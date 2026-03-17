import StatisticsHeader from "./components/statisticsHeader"

export default function Statistics() {
  const percentage = 45.85
  return (
    <>
      <StatisticsHeader percentage={percentage} />

      <div className="flex flex-col gap-5 items-center mt-10">
        <p className="font-bold text-gray-1">Estatísticas gerais</p>
        <span className="text-2xl font-bold text-gray-1">{"22"}</span>
        <p className="text-gray-2">
          melhor sequência de pratos dentro da dieta
        </p>
        <span className="text-2xl font-bold text-gray-1">109</span>
        <p className="text-gray-2">refeições registradas</p>

        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center gap-2 bg-green-light py-5 px-2 rounded-lg">
            <span className="text-gray-2 text-3xl font-bold">99</span>
            <p className="text-gray-3 ">refeições dentro da dieta</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-red-light py-5 px-2 rounded-lg">
            <span className="text-gray-2 text-3xl font-bold">10</span>
            <p className="text-gray-3 ">refeições fora da dieta</p>
          </div>
        </div>
      </div>
    </>
  )
}
