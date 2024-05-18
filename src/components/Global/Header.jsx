import { useState, useEffect } from "react";
import Logo from "../../assets/icons/LogoTitanes.png";
import "./header.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`bg-inherit transition-all md:justify-center body-font z-50 mb-[-10px] fixed w-full flex flex-col items-center ${
        isScrolled ? "scrolled" : "noscrolled"
      } ${isMenuOpen ? "h-44" : "h-24"}`}
    >
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="Logo del Club de titanes" className="w-40" />
        </a>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 transition-transform transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-transform transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center">
          <a href="#nosotros" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">NOSOTROS</button>
          </a>
          <a href="#referencias" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">REFERENCIAS</button>
          </a>
          <a href="#contacto" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">CONTACTO</button>
          </a>
        </nav>
        <button className="hidden md:flex shadow__btn h-10 md:px-3 md:text-xs lg:px-5 lg:text-sm justify-center items-center" onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })} >
          CONTÁCTATE
        </button>
      </div>
      <nav
          className={` w-full md:hidden md:flex-wrap items-center text-center justify-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block slide-in" : "slide-out"
          } md:flex`}
        >
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">ACADEMIA</button>
          </a>
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">NOSOTROS</button>
          </a>
          <a className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">CONTACTO</button>
          </a>
        </nav>
    </header>
  );
};
