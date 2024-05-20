export const SectionContact = () => {
  return (
    <section className="bg-alternative-950/80 flex flex-row py-40 gap-28 justify-center items-center px-8 conta" id="contacto">
      <div className="container flex px-8">
        <div className="flex flex-col items-start container">
          <h3 className="bg-gradient-to-b px-7 espacio-titanes text-white inline-block text-center text-transparent bg-clip-text text-xl sm:text-3xl md:text-2xl font-bold">
          ¡Contacta con nosotros y empieza tu Transformación!
          </h3>
          <p className="px-7 py-5 text-white ">
            Si estás preparado para cambiar tu vida, alcanzar la libertad
            financiera, y superar tus límites, queremos saber de ti. No dudes en
            ponerte en contacto con nosotros. En el Club de Titanes, estamos
            aquí para guiarte en cada paso de tu viaje hacia el éxito.
          </p>
          <h1 className="bg-gradient-to-b px-7 espacio-titanes text-white inline-block text-center text-transparent bg-clip-text text-xl sm:text-3xl md:text-2xl font-bold">
            ¿Cómo Podemos Ayudarte?
          </h1>
          <p className="px-7 py-5 text-white ">
          Ya sea que tengas preguntas sobre nuestros programas, necesites más información o simplemente quieras compartir tu historia, estamos aquí para escucharte y apoyarte. ¡Tu camino hacia la grandeza comienza con un simple mensaje!
          </p>
        </div>
        <div className="w-[1/2] flex flex-col items-start container">
          <h2 className="bg-gradient-to-b px-7 espacio-titanes text-white inline-block text-center text-transparent bg-clip-text text-xl sm:text-3xl md:text-2xl font-bold" >Contacta a Nuestro Equipo</h2>
          <p className="px-7 py-5 text-white ">Correo Electrónico: <br />
          Para consultas generales: <a className="text-primary-400" href="mailto:info@clubdetitanes.com">info@clubdetitanes.com</a>
          </p>
          <h2 className="bg-gradient-to-b px-7 espacio-titanes text-white inline-block text-center text-transparent bg-clip-text text-xl sm:text-3xl md:text-2xl font-bold" >Contacta a Nuestro Equipo</h2>
          <p className="px-7 py-5 text-white ">Teléfono: <br />
          Llámanos al: <a className="text-primary-400" href="tel:541112345678">+54 11 1234 5678</a> <br />
          Estamos disponibles de lunes a viernes, de 9 AM a 6 PM.
          </p>
        </div>
      </div>
    </section>
  );
};
