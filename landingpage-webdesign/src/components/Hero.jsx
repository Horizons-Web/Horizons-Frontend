import React from "react";

import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

import Typed from 'react-typed';

const Hero = () => {
  return (
    
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      
      {/* Imagen */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="guide.gif"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
        </div>
        
      </div>

       {/* Information */}
       <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
          Donde cada paso es una <br></br>{" "}
          <Typed className="text-primary py-1 px-2 border-primary relative inline-block font-semibold"
            strings={['aventura.','odisea.','travesía.','proeza.','hazaña.']} 
            typeSpeed={100} 
            backSpeed={140} 
            loop
            />
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
          Horizons es una plataforma digital que tiene como meta de proporcionar una amplia gama de experiencias de aventura, 
          simplificando la gestión de reservas para guías turísticos y agencias.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-10">
          <p className="text-[20px] text-gray-400">
          Si deseas enterarte de las novedades.
          </p>
          <form className="">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Correo electronico"
            />
            <button type="submit" className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2">
              Subscribirse
            </button>
          </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;