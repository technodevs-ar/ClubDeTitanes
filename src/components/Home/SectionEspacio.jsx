import Gimnasio from '../../assets/images/gimnasio.webp'
import './espacio-titanes.css'
export const SectionEspacio = () => {
  return (
    <section className="bg-alternative-950 relative -mt-3 w-full flex justify-center p-5 py-32 lg:py-48">
      <div className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[300px] -left-12 z-0 opacity-50'></div>
      <div className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[428px] -left-16 opacity-50'></div>

      <div className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[100px] right-0 z-0'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[228px] right-0'></div>


      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto -left-[100px] right-0 z-0 -bottom-20 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-0 right-0 z-0 bottom-0 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-[250px] right-0 z-0 -bottom-20 opacity-50'></div>

      <div className="container md:ml-auto md:mr-auto w-full flex justify-center flex-col gap-12 z-20">
        <h1 className="bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold">
          EL PRIMER ESPACIO PARA FORMAR TITANES
        </h1>
        <div className='flex flex-col lg:flex-row gap-12 items-center justify-center mt-0 lg:mt-12'>
          <p className="text-gray-200 text-center md:text-lg lg:text-2xl lg:px-12 xl:px-28 w-full lg:w-1/2">
            Descubre la plataforma donde te convertirás en un auténtico TITÁN. Aprende sobre negocios, mentalidad, métodos, superación personal, desarrollo físico, señales de trading, análisis de BTC ¡y mucho más! Únete a Lee y otros Titanes en este viaje hacia el éxito.
          </p>
          <div className='flex justify-center w-full lg:w-1/2 z-0'>
            <img src={Gimnasio} alt="" className='rounded-md' />
          </div>
        </div>
      </div>
    </section >
  )
}