import { useState } from "react";
import Contenido from "./categorias/Contenido";
import Todas from "./categorias/Todas";
import Video from "./categorias/Video";
import EstiloVida from "./categorias/EstiloVida";
import Productividad from "./categorias/Productividad";
import Imagen from "./categorias/Imagen";
import {
  GrWorkshop,
  GrVideo,
  GrTty,
  GrNote,
  GrImage,
  GrSwim,
} from "react-icons/gr";
import TabContent from "./tabs/TabContent";
import TabNavItem from "./tabs/TabNavItem";

const Tabs = ({ busqueda, setBusqueda }) => {
  const [tabActive, setTabActive] = useState("todas");

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 mt-[60px]">
        <ul className="flex flex-wrap -mb-px text-base font-medium text-center text-gray-500 dark:text-gray-400">
          <TabNavItem
            titulo="Todas"
            id="todas"
            icono={<GrTty size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
          <TabNavItem
            titulo="Contenido"
            id="contenido"
            icono={<GrNote size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
          <TabNavItem
            titulo="Audio / Video"
            id="video"
            icono={<GrVideo size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
          <TabNavItem
            titulo="Imagen"
            id="imagen"
            icono={<GrImage size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
          <TabNavItem
            titulo="Productividad"
            id="productividad"
            icono={<GrWorkshop size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
          <TabNavItem
            titulo="Estilo/Vida"
            id="estilo"
            icono={<GrSwim size={20} />}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        </ul>
      </div>
      <div className="grid mt-2">
        <TabContent id="todas" tabActive={tabActive}>
          <Todas busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>
        <TabContent id="contenido" tabActive={tabActive}>
          <Contenido busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>
        <TabContent id="video" tabActive={tabActive}>
          <Video busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>
        <TabContent id="imagen" tabActive={tabActive}>
          <Imagen busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>

        <TabContent id="productividad" tabActive={tabActive}>
          <Productividad busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>
        <TabContent id="estilo" tabActive={tabActive}>
          <EstiloVida busqueda={busqueda} setBusqueda={setBusqueda} />
        </TabContent>
      </div>
    </>
  );
};

export default Tabs;
