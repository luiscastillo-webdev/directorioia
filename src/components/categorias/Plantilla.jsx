import React, { useState } from "react";
import { motion } from "framer-motion";
import Pagination from "../Pagination";

const Plantilla = ({ buscar }) => {
  const totalIa = buscar.length;
  const [iaPorPagina, setIaPorPagina] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * iaPorPagina;
  const firstIndex = lastIndex - iaPorPagina;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 mt-10">
        {buscar
          .map(
            ({
              id,
              img,
              nombre,
              url,
              descrip,
              categoria,
              categoria2,
              bgdestacado,
              pago,
            }) => (
              <div
                key={id}
                className="mb-4 rounded overflow-hidden shadow-inner bg-blue-200"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 2,
                    x: { duration: 1 },
                  }}
                >
                  <img
                    className="w-full cursor-pointer"
                    src={`../../img/${img}.webp`}
                    alt={nombre}
                  />
                </motion.div>
                <div className="px-6 py-4">
                  <div className="mb-4">
                    <h3 className="text-xl text-gray-900">{nombre}</h3>
                  </div>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {categoria}
                  </span>
                  <span
                    className={`${bgdestacado} inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}
                  >
                    {pago}
                  </span>
                  <p className="justify-content text-gray-700">{descrip}</p>
                </div>
                <div className="px-3 pb-4">
                  <a href={url} target="_blank" rel="noreferrer">
                    <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-[100%] rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                      <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                      <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                      <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                      <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                      <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                      <p class="z-10">Visitar</p>
                    </button>
                  </a>
                </div>
              </div>
            )
          )
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        iaPorPagina={iaPorPagina}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalIa={totalIa}
      />
    </>
  );
};

export default Plantilla;
