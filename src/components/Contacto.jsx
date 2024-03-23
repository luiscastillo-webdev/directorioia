import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Encabezado from "./Encabezado";
import PostPunk from "../assets/postpunk.jpg";

function ContactForm() {
  const [state, handleSubmit] = useForm("xleqevjz");
  if (state.succeeded) {
    return (
      <p>
        <NavLink to="/"> Gracias Contactarme!</NavLink>
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-6">
        <label htmlFor="nombre" className="block text-gray-700 mb-2">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
      </div>
      <div class="mb-6">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Direccion de Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div class="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-indigo-600"
        />
        <ValidationError
          prefix="Mensaje"
          field="mensaje"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </form>
  );
}
const Contacto = () => {
  return (
    <>
      <Encabezado tituloencabezado="Contacto" />
      <div className="max-w-screen-xl mx-auto rounded-xl bg-gray-200 p-6 grid grid-cols-3 gap-4 justify-center items-center">
        <div className="col-span-2">
          <ContactForm />
        </div>
        <div className="p-6">
          <img className="rounded-md mx-auto h-auto" src={`${PostPunk}`} />
        </div>
      </div>
    </>
  );
};

export default Contacto;
