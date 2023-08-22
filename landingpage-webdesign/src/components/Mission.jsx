import React from 'react'

export const Mission = () => {
  return (
    <div className="flex bg-slate-100">
      <div className="w-1/2">
        <img src="guide.svg" alt="Imagen" className="w-90 h-auto" />
      </div>
      <div className="w-1/2 p-8 ">
        <h2 className="text-5xl xl:text-6xl font-bold xl:leading-[7.5rem] mb-4 text-center text-gray-800">Mision</h2>
        <p className="text-gray-500 text-2xl leading-[3.5rem] mb-10">
        Horizons busca 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">conectar</span>
        a apasionados por la aventura a través de experiencias al aire libre seguras y de 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">calidad</span>. 
        Somos el enlace entre almas aventureras y guías expertos, brindando emoción con responsabilidad. 
        </p>
        <h2 className="text-5xl xl:text-6xl font-bold xl:leading-[7.5rem] mb-4 text-center text-gray-800">Vision</h2>
        <p className="text-gray-500 text-2xl leading-[3.5rem] mb-4">
        Deseamos ofrecer una 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">plataforma confiable</span>
        donde se pueda acceder a 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">experiencias auténticas</span>
         inspirando a personas normales 
        a descubrir la naturaleza convirtiéndonos en un 
        <span className="text-primary py-2 px-2 border-primary relative inline-block">icono</span>
         de la industria. 
        </p> 
      </div>
    </div>
  );
};

export default Mission;
