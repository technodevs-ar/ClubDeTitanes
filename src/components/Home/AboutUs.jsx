import BrandomFoto from "../../assets/images/brandom_calle.jpeg"

export const AboutUs = () => {
  return (
    <section className="flex justify-center relative py-3 pb-12 sm:py-7 sm:pb-12 md:py-10 md:px-8 lg:py-0">
      <div id="about" className="relative bg-secondary-950 overflow-hidden container">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-secondary-950 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 z-40">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-40 transform translate-x-[80px]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f0b82f" />
                  <stop offset="100%" stopColor="#ce7411" />
                </linearGradient>
              </defs>
              <polygon points="50,0 100,0 50,100 0,100" fill="url(#gradient)"></polygon>
            </svg>
            <div className="pt-1"></div>
            <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-7 md:mt-16 lg:mt-20 lg:px-0 lg:mr-32 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="bg-gradient-to-b espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold mb-7">
                  ¿QUIÉN SOY?
                </h1>
                <p className="text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, minima iusto magni, ex veniam ullam natus commodi corporis similique alias magnam, deleniti iure accusamus impedit quidem doloribus consequatur inventore nisi?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis iusto. Quia animi pariatur, ab veniam itaque deserunt neque voluptatibus fugit? Omnis voluptatem magnam pariatur ipsam, praesentium adipisci aliquam facilis.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover px-5 sm:px-0 object-top py-0 rounded-[7%] sm:rounded-md sm:h-72 md:h-96 lg:w-full lg:h-full z-30 relative" src={BrandomFoto} alt="Foto brandom lee" />
        </div>
      </div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-1/4 -left-16 opacity-50 z-30'></div>
      <div className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-2/3 -left-16 opacity-50 z-0'></div>
    </section>
  )
}