import React from 'react';

import { AiOutlineStar, AiTwotoneCalendar, AiOutlineFullscreenExit, AiOutlineSearch} from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi"



const Product = () => {
  return (

    <div id="product" className="bg-backgroundSecondary text-footer " >

        <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-bold font-primary text-center pt-10 ">
            De la necesidad a la creación de soluciones
        </h1>

        <div>

            <p className="text-md xl:text-2xl font-primary  p-8 pt-5  text-center">
                En el mundo del turismo aventura, encontrar y reservar excursiones es{' '}
                <span className="text-primary font-semibold">complicado</span>
                {' '}. Los aventureros tienen que buscar en {' '}
                <span className="text-primary font-semibold">múltiples sitios</span>
                {' '}web y redes sociales para encontrar una actividad que les guste, y luego {' '}
                <span className="text-primary font-semibold">esperar</span> 
                {' '}a que un guía o agencia confirme la disponibilidad, por otra parte el proceso de pago a menudo es {' '}
                <span className="text-primary font-semibold">limitado y poco seguro</span> .
            </p>

            <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-semibold font-primary text-center pt-10 pb-10">
                Nuestra propuesta 
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 font-primary mx-10  pb-20 ">

                <div className="md:col-span-1 mb-16">
                    
                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow mx-5 m-5">
                        <div className='flex items-center space-x-2 '>
                            <AiOutlineSearch size={25} />
                            <p className='text-xl xl:text-2xl font-bold '>
                                Variedad
                            </p>
                        </div>

                        <div className='text-gray-800'>
                            Tendras una amplia gama de actividades y proveedores, elegi
                            la que mejor se ajuste a tu estilo.
                        </div>
                    </div>

                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow mx-5 m-5">
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineInformationCircle size={20} />
                            <p className='text-xl xl:text-2xl font-bold '>
                                Informacion
                            </p>
                        </div>
                        <div className='text-gray-800'>
                            Sin sorpresas. Dispondrás de toda la información que necitas saber para contratar tu excursión.
                        </div>
                    </div>

                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow m-5 ">
                        <div className='flex items-center space-x-2 '>
                            <AiTwotoneCalendar size={20} />
                            <p className='text-xl xl:text-2xl font-bold '>
                                Reservas sencillas
                            </p>
                        </div>
                        <div className='text-gray-800'>
                            Nuestra plataforma fácil de usar te permite encontrar y reservar tu excursión ideal en cuestión de minutos.                        </div>
                    </div>

                </div>

                <div className="md:col-span-1 mb-16">

                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow mx-5 m-5">
                        <div className='flex items-center space-x-2 '>
                            <AiOutlineFullscreenExit size={20} />
                            <p className='text-xl xl:text-2xl font-bold '>
                                Centralizacion
                            </p>
                        </div>
                        <div className='text-gray-800'>
                            Todas las actividades y procesos en un solo lugar. No pierdas el tiempo navegando
                            por multiples sitios, encuentra todo aqui.                        
                        </div>
                    </div>

                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow m-5">
                        <div className='flex items-center space-x-2  px-1'>
                            <AiOutlineStar size={20} />
                            <p className='text-xl xl:text-2xl font-bold '>
                                Opiniones y calificaciones
                            </p>
                        </div>
                        <div className='text-gray-800'>
                            Podras opinar y ver las calificaciones de los guias y agencias para 
                            elegir el mejor!
                        </div>
                    </div>
                    
                    <div className="h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow m-5 md:hidden pb-20">
                        <div className='flex items-center space-x-2 px-1'>
                            <MdPayment size={20}/>
                            <p className='text-xl xl:text-2xl font-bold '>
                                Pago seguro
                            </p>
                        </div>
                        <div className='text-gray-800'>
                        Ofrecemos múltiples opciones de pago. Además, utilizamos tecnología de última generación para proteger tus datos financieros y que puedas contratar con tranquilidad.                        </div>
                    </div>

                    <div className="xl:block hidden h-1/3 grid grid-rows-2 grid-cols-1 px-5 border shadow m-5">
                        <div className='flex items-center space-x-2  px-1'>
                            <MdPayment size={20} className='mt-3'/>
                            <p className='text-xl xl:text-2xl font-bold mt-3'>
                                Pago seguro
                            </p>
                        </div>
                        <div className='mt-3 text-gray-800'>
                            Ofrecemos múltiples opciones de pago. Además, utilizamos tecnología de última generación para proteger tus datos financieros y que puedas contratar con tranquilidad.                        </div>
                        </div>
                </div>

            </div>

        </div>

        <div className="w-full block md:hidden">
            <img src="mountain.png" alt="Imagen de montaña" />
        </div>

        <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-bold font-primary text-center pt-10 bg-background pt-10">
            Los proveedores son parte de nuestro sistema
        </h1>

    </div>

  );
};

export default Product;
