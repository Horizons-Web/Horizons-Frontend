import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

export const Problems = () => {
  return (
<div className="flex">
  <div className="w-full">
    <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] mb-10 text-center text-gray-800">Nuestro Producto</h1>
    <div className="w-full flex">
      <div className="w-1/2 p-8">
        <p className="text-gray-500 text-2xl leading-[3.5rem] mb-10">
        {"  "}Horizons es una plataforma web, diseñada para enriquecer la vida de las personas al ofrecer una 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">diversidad</span>
        fascinante de 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">actividades</span>
        de alta calidad.  
        También ponemos nuestro enfoque en el mundo de los 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">guías</span> turísticos y 
        las <span className="text-primary py-2 px-2 border-primary relative inline-block">agencias</span>. Comprendemos los desafíos 
        que enfrentan al gestionar 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">reservas</span> y 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">promocionar</span> sus ofertas.<br /> 
        Entramos en escena como un 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">colaborador</span> esencial, liberándolos del arduo proceso de administración de reservas y publicaciones.
        <br />Nuestra plataforma actúa como un 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">puente dinámico</span> entre los entusiastas del descubrimiento y los apasionados expertos en el campo de la aventura.
        </p>
      </div>
      <div className="w-1/2 p-8">
        <img src="web.svg" alt="Imagen" className="w-90 h-auto mx-auto" />
      </div>
    </div>
  </div>
</div>


  )
}

export default Problems;
