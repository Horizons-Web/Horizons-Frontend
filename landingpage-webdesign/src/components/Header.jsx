import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div class="flex justify-between items-center h-24 max-w-[1980px] mx-auto px-10 text-footer border-b sticky top-0 z-50 bg-backgroundSecondary shadow-2xl">
      <a href="#home">
        <img src="logo.svg" className="w-36 h-auto  lg:w-48 lg:h-auto" />
      </a>
      <ul className='hidden md:flex mr-1'>
        <a href="#home" className='p-4 hover:text-primary transition-colors font-primary'>Inicio</a>
        <a href="#product" className='p-4 hover:text-primary transition-colors font-primary '>Características</a>
        <a href="#guide" className='p-4 hover:text-primary transition-colors font-primary '>Guias </a>
        <a href="#contact" className='p-4 ml-2 text-whiteCustom font-primary rounded-xl border bg-primary hover:scale-105 transition-transform"'>Contacto</a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-background opacity-100 ease-in-out duration-500' : 'opacity-0 ease-in-out duration-500 fixed left-[-100%] top-0 h-full border-r border-r-gray-900'}>
          <a href="#home">
            <img src="logo.svg" className="w-40 h-auto ml-8" />
          </a>
          <li className='p-4 border-b border-gray-600 '>
            <a onClick={handleNav} href="#home" className='font-primary' >Inicio</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a onClick={handleNav} href="#product" className='font-primary' >Características</a>
          </li>
          <li className='p-4 border-b border-gray-600'>
            <a onClick={handleNav} href="#guide" className='font-primary' >Guias </a>
          </li>
          <li className='p-4'>
            <a onClick={handleNav} href="#contact" className='font-primary' >Contacto</a>
          </li>
      </ul>
    </div>
  );
};

export default Header;