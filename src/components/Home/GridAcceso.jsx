import { CardAcceso } from "./CardAcceso"
import './banner.css'
export const GridAcceso = () => {
  return(
    <section className="flex flex-col gap-12 px-5 sm:px-32 py-48 cardBG">
      <div>
        <h3 className="text-gray-200 font-semibold text-2xl lg:text-3xl text-center">¿A QUÉ VAS A ACCEDER EN CLUB DE TITANES?</h3>
      </div>
      <div className="w-full mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-9">
        <CardAcceso titulo={"Genera Ingresos"} descripcion={"Aprende a generar dinero de la mano de expertos en trading y análisis BTC. Comienza a ganar desde el día 1."} />
        <CardAcceso titulo={"Desarrolla tu Mentalidad"} descripcion={"Transforma tu mentalidad con técnicas avanzadas y supera tus miedos. Conviértete en un verdadero TITÁN."} />
        <CardAcceso titulo={"Mejora tu Físico"} descripcion={"Consigue el físico que siempre has deseado con nuestros métodos exclusivos de entrenamiento y nutrición."}/>
        <CardAcceso titulo={"Acompañamiento de Expertos"} descripcion={"Recibe asesoría constante de Brandon Lee y su equipo. No estarás solo en tu camino hacia el éxito."} />
      </div>
    </section>
  )
}