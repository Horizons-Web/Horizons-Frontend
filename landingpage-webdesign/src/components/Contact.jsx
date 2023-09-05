import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";


export const Contact = () => {
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

    <form id="contact" ref={form} onSubmit={sendEmail} className='bg-backgroundSecondary border font-primary py-28 text-footer'>
        <h1 className="text-3xl xl:text-5xl font-bold xl:leading-[7.5rem] text-center">Contacto</h1>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 p-8'>
            <input  type="text" 
                    name="user_name"
                    required
                    className="w-full bg-background py-4 pl-10 pr-36 rounded-xl outline-none border"
                    placeholder="Nombre" />

            <input  type="email" 
                    name="user_email" 
                    required
                    className="w-full bg-background py-4 pl-10 pr-36 rounded-xl outline-none border"
                    placeholder="Email" />

            <textarea   name="message"
                        className="w-full bg-background py-4 pl-10 pr-36 rounded-xl outline-none border"
                        placeholder="Mensaje" />

            <button type="submit" className="text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl mb-2.5 hover:scale-105 transition-transform">
                    Hablemos!
            </button>
        </div>
        
    </form>
  );
};


export default Contact;
