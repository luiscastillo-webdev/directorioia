import React from "react";
import { NavLink } from "react-router-dom";

const Cta = ({ titulo, descrip, texto, icono }) => {
  return (
    <div id="contacto" className="w-full md:p-2">
      <div className="grid md:gap-4">
        <div className="max-w-screen-lg mx-auto text-white md:text-2xl md:px-[6rem] py-[3rem] rounded-xl bg-gradient-to-r from-orange-500 to-amber-700">
          <div className="justify-center items-center text-center mb-3">
            <h3 className="uppercase w-auto pb-5">{titulo}</h3>
            <p>{descrip}</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <NavLink to="/contacto" className="z-10">
                {texto}
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
