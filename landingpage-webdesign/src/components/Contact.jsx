import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rvmpy5s', 'template_yji9vvn', form.current, 'lLJQded06VinCsMQ4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem] text-center">Contacto</h1>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 p-8'>
            <input  type="text" 
                    name="user_name"
                    className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                    placeholder="Nombre" />

            <input  type="email" 
                    name="user_email" 
                    className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                    placeholder="Email" />

            <textarea   name="message"
                        className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
                        placeholder="Mensaje" />

            <input  type="submit" 
                    value="Enviar"
                    className=" bg-gray-100 rounded-xl hover:bg-primary transition-colors" />

        </div>
    </form>
  );
};


export default Contact;
