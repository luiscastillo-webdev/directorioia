import React from "react";
import Cta from "../components/Cta";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router-dom";

const EnviaTuIa = () => {
  function ContactForm() {
    const [state, handleSubmit] = useForm("xpzvjpgl");
    if (state.succeeded) {
      return (
        <p>
          <NavLink to="/"> Gracias Contactarme!</NavLink>
        </p>
      );
    }
    return (
      <form onSubmit={handleSubmit} class="flex flex-col">
        <input
          id="nombre"
          name="nombre"
          type="text"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Nombre de la IA"
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
        <input
          id="email"
          name="email"
          type="email"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="url"
          name="url"
          type="text"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Url"
        />
        <ValidationError prefix="Url" field="url" errors={state.errors} />
        <textarea
          id="descripcion"
          name="cover_letter"
          class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          placeholder="Breve Descripción"
        ></textarea>

        <button
          type="submit"
          disabled={state.submitting}
          class="invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600"
        >
          <div class="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full">
            <div class="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                class="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500 group-hover:stroke-{1.99}"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                ></path>
              </svg>
              Enviar
            </div>
          </div>
        </button>
      </form>
    );
  }

  return (
    <>
      <div className="relative flex flex-col max-w-screen-xl mx-auto justify-center">
        <div class="flex flex-col items-center justify-center my-10">
          <div class="w-full max-w-md bg-white rounded-lg shadow-md p-10">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Enviar tu APP</h2>
            <ContactForm />
          </div>
        </div>
        <Cta
          titulo="Transforma tu idea en realidad con mi ayuda"
          descrip="No esperes más y agenda tu cita conmigo. Te ofreceré un presupuesto personalizado y sin compromiso."
          texto="Contáctame"
        />
      </div>
    </>
  );
};

export default EnviaTuIa;
