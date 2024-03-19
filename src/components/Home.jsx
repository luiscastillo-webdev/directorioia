import { useState } from "react";
import Encabezado from "./Encabezado";
import { CiSearch } from "react-icons/ci";
import Tabs from "./Tabs";

const Home = ({ tituloencabezado }) => {
  const [busqueda, setBusqueda] = useState("");
  const buscador = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <>
      <Encabezado tituloencabezado="gran directorio de apps ia" />

      <div className="relative flex flex-col max-w-screen-xl mx-auto justify-center">
        <div className="bg-slate-300 border border-slate-600 p-4 rounded-md top-[-40px] left-0 right-0 absolute">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <CiSearch size={32} />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            name="buscar"
            type="text"
            placeholder="Buscar IA Apps"
            value={busqueda}
            onChange={buscador}
          />
        </div>
        <Tabs busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
    </>
  );
};

export default Home;
