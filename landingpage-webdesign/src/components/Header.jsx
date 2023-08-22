import React, { useState } from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-slate-100">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-4xl font-bold relative p-1 bg-slate-100">
          Horizons<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-slate-100 w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="text-1xl hover:text-primary transition-colors ">
          Home
        </a>
        <a href="#aboutUs" className="text-1xl hover:text-primary transition-colors ">
          Nosotros
        </a>
        <a href="#services" className="text-1xl hover:text-primary transition-colors">
          Roadmap
        </a>
        <a href="#aboutUs" className="text-1xl hover:text-primary transition-colors ">
          Products
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;