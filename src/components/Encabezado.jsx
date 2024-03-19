import React from "react";

const Encabezado = ({ tituloencabezado }) => {
  return (
    <div className="w-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex max-w-screen-lg h-[300px] mx-auto justify-center">
        <h1 className="uppercase text-6xl my-auto">{tituloencabezado}</h1>
      </div>
    </div>
  );
};

export default Encabezado;
