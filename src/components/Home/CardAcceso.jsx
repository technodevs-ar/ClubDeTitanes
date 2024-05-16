'use client';
import { useRef, useState } from 'react';
import IconComunidad from "../../assets/icons/Icon_Comunidad.png"

export const CardAcceso = ({titulo, descripcion}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative flex h-auto w-full items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 py-12 shadow-2xl'
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className='flex flex-col items-center text-gray-200'>
      <img src={IconComunidad} alt="Icono comunidad" className='w-20'/>
      <h3 className='font-semibold text-center text-xl'>{titulo}</h3>
      <span className='text-center text-lg'>{descripcion}</span>
      </div>
    </div>
  );
};
