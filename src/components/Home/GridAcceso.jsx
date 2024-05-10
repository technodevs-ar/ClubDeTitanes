import { CardAcceso } from "./CardAcceso"
import './banner.css'
export const GridAcceso = () => {
  return(
    <section className="flex flex-col gap-12 px-5 sm:px-0 py-16 cardBG">
      <div>
        <h3 className="text-gray-200 font-semibold text-2xl lg:text-3xl text-center">¿A QUÉ VAS A ACCEDER EN CLUB DE TITANES?</h3>
      </div>
      <div className="w-full mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-9">
        <CardAcceso/>
        <CardAcceso/>
        <CardAcceso/>
        <CardAcceso/>
      </div>
    </section>
  )
}