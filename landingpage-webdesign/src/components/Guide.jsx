import React from 'react';

export const Guide = () => {
  return (

    <section id='guide' className="flex flex-wrap pt-16 text-footer">
    
      <div className="w-full md:w-2/3 md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="max-w-[1366px]">
          <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-semibold  font-primary text-center">
            Gestion publicaciones
          </h1>
          <p className="text-md xl:text-2xl text-gray-500 font-primary  pt-5">
            En Trippi, te proporcionamos una plataforma de gestión de actividades excepcionalmente fácil de usar. Con tan {' '}
            <span className="text-primary font-semibold">solo un click</span>
            {' '}, puedes publicar tus experiencias, realizar ediciones, eliminarlas o renovarlas. Nuestra plataforma está diseñada para {' '}
            <span className="text-primary font-semibold">simplificar</span>
            {' '}cada aspecto de tu negocio o servicios de aventura, permitiéndote centrarte en lo que más importa: brindar experiencias emocionantes a tus clientes {' '} 
            <span className="text-primary font-semibold">sin complicaciones ni estrés</span> {' '} en la administración.          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3">
          <img src="publication.svg"  />
      </div>


      <div className="hidden md:block w-full md:w-1/3">
          <img src="settings.svg"  />
      </div>

      <div className="w-full md:w-2/3 md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="max-w-[1366px]">
          <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-semibold  font-primary text-center">
            Sistema de reservas
          </h1>
          <p className="text-md xl:text-2xl text-gray-500 font-primary  pt-5">
            En cuanto al sistema de reservas, hemos creado una herramienta diseñada específicamente para guías como tú. Con ella, podrás ver tus reservas de manera clara y cobrar por tus actividades de manera {' '}
            <span className="text-primary font-semibold">sencilla y conveniente</span>{' '}. Además, recibirás notificaciones instantáneas cada vez que se realice una reserva. También estamos implementando un mecanismo eficiente para gestionar las cancelaciones, brindándote un {' '}
            <span className="text-primary font-semibold">control total</span> {' '} sobre tu agenda y tus ingresos.          
          </p>
        </div>
      </div>

      <div className="xl:hidden w-full lg:w-1/3">
        <img src="settings.svg" />
      </div>

      <div className="w-full md:w-2/3 md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="max-w-[1366px]">
          <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-semibold  font-primary text-center">
            Canales de comunicacion
          </h1>
          <p className="text-md xl:text-2xl text-gray-500 font-primary  pt-5">
            Diseñamos una solución que permite a los guías interactuar de manera {' '}
            <span className="text-primary font-semibold">eficaz y organizada</span> con sus clientes. Nuestra plataforma centralizada garantiza que todas las conversaciones y detalles se mantengan en un único lugar. Además, ofrecemos la capacidad de crear grupos de participantes para actividades específicas, lo que {' '}
            <span className="text-primary font-semibold">facilita la coordinación</span> y mejora la experiencia para todos los involucrados, estableciendo una comunicación sin fisuras entre guías y aventureros.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3">
          <img src="chat.svg"  />
      </div>


      <div className="hidden md:block w-full md:w-1/3">
          <img src="ads2.svg"  />
      </div>



      <div className="w-full md:w-2/3 md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="max-w-[1366px]">
          <h1 className="text-xl md:text-xl lg:text-4xl xl:text-4xl font-semibold  font-primary text-center">
            Promociones Personalizadas
          </h1>
          <p className="text-md xl:text-2xl text-gray-500 font-primary  pt-5">
            Nuestro sistema de fidelizacion, es una herramienta que permite a los guías fomentar la fidelidad de sus clientes y {' '}
            <span className="text-primary font-semibold">aumentar sus ingresos</span>. A través de esta función, los guías pueden ofrecer promociones y ofertas especiales a sus clientes más leales, {' '}
            <span className="text-primary font-semibold">fortaleciendo las conexiones</span> {' '} y generando oportunidades de negocio adicionales. Es una forma efectiva de unir aún más a guías y aventureros, al tiempo que impulsan sus ganancias.
          </p>
        </div>
      </div>

      <div className="xl:hidden w-full lg:w-1/3">
        <img src="ads2.svg" />
      </div>

    </section>
  );
};

export default Guide;

