import React from "react";
import Encabezado from "./Encabezado";
import IaCity from "../assets/ciudadia.png";
import Cta from "./Cta";

const About = () => {
  return (
    <>
      <Encabezado tituloencabezado="Sobre el proyecto" />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2  max-w-screen-xl mx-auto bg-white py-6">
        <div className=" p-4 text-justify">
          <p>
            Soy entusiasta informatico que he iniciado este proyecto con el
            objetivo de crear el mas amplio directorio de inteligencia
            artificial en español, buscamos dar a conocer aplicaciones
            innovadoras para promocionarlas al publico.
          </p>
          <p>
            La inteligencia artificial llegó para quedarse y asi facilitarnos
            las tareas tanto en aprendizaje como en desarrollo, una IA puede
            complementar la tarea de otra, podemos tomar varias ia's,
            trabajarlas por separado y luego juntarlas para poder producir por
            ejemplo videos musicales de calidad sin artistas tangibles.
          </p>
          <p>
            Me apasiona la IA y creeo que tiene el potencial de transformar el
            mundo. Me he comprometido a utilizar la IA de manera responsable y
            ética para generar un impacto positivo en la sociedad. Si estás
            buscando un socio de IA confiable que pueda ayudarte a alcanzar tus
            objetivos de negocio, no dudes en contactarme.
          </p>
        </div>
        <div className="flex-col px-4">
          <img className="rounded-md mr-2" src={`${IaCity}`} alt="Ciudad IA" />
        </div>
      </div>
      <Cta
        titulo="Promociona Tu Emprendimiento"
        descrip="Si tienes un emprendimiento que desees promocionar, ponte en contacto con nosotros."
        texto="Contáctanos"
        url="/enviatuia"
        target="_self"
      />
    </>
  );
};

export default About;
