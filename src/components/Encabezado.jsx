import React from "react";

const Encabezado = ({ tituloencabezado }) => {
  return (
    <div className="max-w-screen-xl bg-hero-pattern mx-auto shadow-lg shadow-indigo-500/50 my-3 rounded-lg border-solid border-slate-400 border-2">
      <div className="flex max-w-screen-lg h-[300px] mx-auto justify-center">
        <h1 className="uppercase text-6xl text-slate-50 my-auto">
          {tituloencabezado}
        </h1>
      </div>
    </div>
  );
};

export default Encabezado;
