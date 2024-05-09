import Logo from "../../assets/icons/LogoTitanes.png"
import './header.css'

export const Header = () => {
  return (
    <header className="bg-[#121212] body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="Logo del Club de titanes" className="w-40" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">
              ACADEMIA
            </button>
          </a>
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">
              NOSOTROS
            </button>
          </a>
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">
              CONTACTO
            </button>
          </a>
        </nav>
        <button className="inline-flex items-center bg-gradient-to-l from-primary-500 to-primary-600 border-0 py-1 px-3 focus:outline-none hover:scale-105 transition-all rounded-sm text-secondary-200 font-semibold mt-4 md:mt-0">Contactáte
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
} 