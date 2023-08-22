import React from 'react';

export const AboutUs = () => {
  return (
    
    <section id="about us" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">

    {/* Information */}
    <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center">Nosotros</h1>
        <p className="text-gray-500 text-2xl leading-[3.5rem]">
        Somos una startup que tiene como 
        <span className="text-primary py-1 px-2 border-primary relative inline-block font-semibold">MISION</span>
        conectar a personas apasionadas por la aventura mediante una amplia
        variedad de experiencias seguras y de calidad.<br></br>
        Nuestra 
        <span className="text-primary py-1 px-2 border-primary relative inline-block font-semibold">VISION</span>
        es ofrecer una plataforma confiable donde se pueda acceder a experiencias auténticas 
        inspirando a personas a descubrir nuevos lugares convirtiéndonos en un icono de la industria.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
          </button>
        </div>
      </div>
    </div>

    {/* Imagen */}
    <div className="md:col-span-3 flex items-center justify-center relative">
      <div>
        <img
          src="hiking.gif"
          className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
        />
      </div>
    </div>

  </section>
  );
};

export default AboutUs;

