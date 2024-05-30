import './contact.css'

export const SectionContact = () => {
  return (
    <section className="bg-alternative-950/80 flex flex-row py-32 justify-center items-center px-8 relative" id='contacto'>
      <div className="container flex px-8">
        <div className="flex flex-col items-center container text-center">
          <h1 className="bg-gradient-to-b espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-4xl font-bold mb-7">
            ¡Empezá tu transformación!
          </h1>
          <p className="sm:px-7 py-3 text-white text-xl ">
            Si estás preparado para cambiar tu vida, alcanzar la libertad
            financiera, y superar tus límites, queremos saber de ti. Nuestro
            equipo está aquí para ayudarte a cada paso del camino. No importa
            cuál sea tu punto de partida, estamos comprometidos a proporcionarte
            las herramientas y el apoyo necesarios para que puedas alcanzar tus metas.
          </p>
          <div className="flex gap-5 mt-12 flex-col lg:flex-row">
            {/* <button className="py-5 px-8 bg-gradient-to-r from-primary-700 to-primary-500 rounded-md text-base sm:text-lg text-gray-200 font-bold w-56 sm:w-96 h-20 sm:h-16">
              Contáctate por mail
            </button> */}
            <a href="https://wa.me/+5491126351121" target="_blank" rel="noopener noreferrer">
              <button className="py-5 px-8 bg-gradient-to-r from-green-700 to-green-500 rounded-md text-base sm:text-lg text-gray-200 font-bold w-56 sm:w-96 h-20 sm:h-16 mt-7">
                Enviar Whatsapp
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='top-vertice -mt-1 w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 absolute top-0 left-0' />
      <div className="bottom-vertice w-48 h-48 absolute right-0 bottom-0" />
    </section>
  );
};
