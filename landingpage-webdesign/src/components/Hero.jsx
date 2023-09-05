import React , { useRef }from "react";

import emailjs from '@emailjs/browser';

import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

import Typed from 'react-typed';

const Hero = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const emailInput = form.current.querySelector('input[name="user_email"]');
  
    if (emailInput.checkValidity() && emailInput.value.trim() !== '') {

      emailjs
        .sendForm('service_rvmpy5s', 'template_yji9vvn', form.current, 'lLJQded06VinCsMQ4')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      
      console.log('Correo electrónico no válido o vacío');
    }
  };

  return (
    
    <section id="home" className="flex flex-wrap">

      <div className="w-full md:w-1/3">
        <img src="Hiking-bro.svg"  />
      </div>

      <div className="w-full md:w-2/3 md:col-span-5 flex items-center justify-center p-8 xl:p-16">

        <div className="max-w-[1366px]">

          <h1 className="text-2xl xl:text-6xl font-bold  font-primary text-footer ">
              Descubri tu próxima aventura con <br></br>{" "}
              <Typed className = "text-primary font-semibold font-primary  border-primary inline-block  pt-1 pb-5"
                strings={['un click.','informacion detallada.','variedad ilimitada.',]} 
                typeSpeed={50} 
                backSpeed={100} 
                loop
                />
          </h1>

          <p className="text-md xl:text-2xl text-gray-500 font-primary  pb-5">
            Trippi es una plataforma e-commerce que tiene como meta proporcionar una amplia y detallada gama de experiencias de aventura, 
            simplificando la gestión de actividades y reservas para guías y agencias turisticos.
          </p>

          <div className="flex flex-col md:flex-row items-center  font-primary ">

            <form ref={form} onSubmit={sendEmail}>

              <div className="flex flex-col md:flex-row ">

                  <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-backgroundSecondary text-sm py-2 pl-5 pr-30 rounded-xl mr-2 mb-2 border border-gray-600"
                      placeholder="Email"
                  />
                  <button type="submit" className="text-lg font-semibold py-2 px-10 bg-primary text-white rounded-xl mb-2.5 hover:scale-105 transition-transform">
                    Descubrir más
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