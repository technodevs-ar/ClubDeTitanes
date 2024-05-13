export const Testimonial = () => {
  return (
    <section className="text-gray-400 bg-alternative-950/80 body-font flex flex-col py-40 gap-28 justify-center items-center">
      <h1 className="bg-gradient-to-b px-7 espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold">
        TU PRIMER ESPACIO DE TRANSFORMACIÓN
      </h1>

      <div className="container flex justify-center flex-col sm:flex-row items-center gap-12 sm:gap-16 px-7">
        <div className="flex sm:mb-20 max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow flex-col gap-3 hover:bg-gray-800 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sigue los pasos de los mejores</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">Nuestros estudiantes aprenden a generar ingresos siguiendo los pasos de aquellos que ya lo están logrando, a obtener el cuerpo que desean, a superar sus miedos y, sobre todo, a convertirse en auténticos TITANES.</p>
        </div>
        <div className="flex sm:mt-20 max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow flex-col gap-3 hover:bg-gray-800 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mision</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">Nuestra misión es guiarte hacia la libertad financiera y ayudarte a alcanzar tus metas, ya sean físicas, mentales o económicas. Basamos nuestro éxito en los testimonios de quienes han transformado sus vidas con nosotros.</p>
        </div>
      </div>

      <div className="container px-5 py-0 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302" />
              <p className="leading-relaxed text-gray-200">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          <div className="lg:w-1/3 mb-6 lg:mt-20 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/300x300" />
              <p className="leading-relaxed text-gray-200">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/305x305" />
              <p className="leading-relaxed text-gray-200">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}