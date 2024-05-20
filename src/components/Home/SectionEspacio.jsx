import { Parallax, useParallax } from 'react-scroll-parallax';
import { useEffect, useRef } from 'react';
import Brandon from '../../assets/videos/clubDeTitanesVideo.mp4';
import './espacio-titanes.css';
import './button-brigth.css';

export const SectionEspacio = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const fadeVolume = (targetVolume) => {
    const currentVolume = videoRef.current.volume;
    const step = (targetVolume - currentVolume) / 5;

    const fade = () => {
      if (Math.abs(videoRef.current.volume - targetVolume) < Math.abs(step)) {
        videoRef.current.volume = targetVolume;
        clearInterval(fadeInterval);
      } else {
        videoRef.current.volume += step;
      }
    };

    const fadeInterval = setInterval(fade, 40);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeVolume(0.1);
          videoRef.current.play();
        } else {
          fadeVolume(0)
          setTimeout(() => {
            videoRef.current.pause()
          }, 500)
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <section ref={sectionRef} className="bg-alternative-950 relative -mt-3 w-full flex justify-center p-0 sm:p-8 py-32 lg:py-48">
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[300px] -left-12 z-0 opacity-50'></Parallax>
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[428px] -left-16 opacity-50'></Parallax>

      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[100px] right-0 z-0'></Parallax>
      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[228px] right-0'></Parallax>

      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto -left-[100px] right-0 z-0 -bottom-20 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-0 right-0 z-0 bottom-0 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-[250px] right-0 z-0 -bottom-20 opacity-50'></div>

      <div className="container md:ml-auto md:mr-auto w-full flex justify-center flex-col gap-0 lg:gap-0 z-20">
        <div className='bg-gradient-to-b p-8 from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold'>
          <h1 ref={parallax.ref} className="bg-gradient-to-b espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold">
            EL PRIMER ESPACIO PARA FORMAR TITANES
          </h1>
        </div>
        <Parallax speed={10} className='flex flex-col lg:flex-row gap-12 items-center justify-center mt-0 lg:mt-12'>
          <div className='text-gray-200 p-8 text-center md:text-lg lg:text-2xl lg:px-12 xl:px-16 w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center'>
            <p>
            Descubre la plataforma donde te convertirás en un auténtico TITÁN. Aprende sobre negocios, mentalidad, métodos, superación personal, desarrollo físico, señales de trading, análisis de BTC ¡y mucho más! Únete a Lee y otros Titanes en este viaje hacia el éxito.
            </p>
            <button className="shadow__btn mt-7" onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })} >
              VER MÁS
            </button>
          </div>
          <div className='flex justify-center w-full lg:w-1/2 z-0 video-container'>
            <video ref={videoRef} controls className='rounded-md'>
              <source src={Brandon} type='video/mp4' />
            </video>
          </div>
        </Parallax>
      </div>
    </section>
  );
};
