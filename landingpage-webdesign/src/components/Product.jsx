import React from 'react';

const Product = () => {
  return (
    <div className='w-full py-[10rem] px-4 '>

    <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center -mt-40">Caracteristicas</h1>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 p-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto mt-[-3rem] bg-white' src="option.gif" alt="/" />
              <h2 className='text-2xl font-bold text-center '>Adventure blend</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>
                  Algoritmo que busca y filtra actividades segun intereses, niveles de habilidad y ubicacion de los aventureros.
                  </p>
              </div>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="web.gif" alt="/" />
              <h2 className='text-2xl font-bold text-center '>Book ease</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>
                  Una plataforma para que guias y/o agencias puedan gestionar sus reservas de manera
                  eficiente.
                  </p>
              </div>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="admin.gif" alt="/" />
              <h2 className='text-2xl font-bold text-center '>Post mananger</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>
                    Conjunto de herramientas para que publicar, cancelar, renovar y promocionar
                    actividades sea sencillo.
                  </p>
              </div>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-50 mx-auto mt-[-3rem] bg-white' src="chat.gif" alt="/" />
              <h2 className='text-2xl font-bold text-center '>Horizons connect</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>
                  Un sistema de chat propio para conectar aventureros y guias, que mejorara la comunicacion entre ambas partes.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Product;
