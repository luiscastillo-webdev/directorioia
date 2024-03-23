import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto my-3 rounded-lg bg-slate-200 text-center text-white dark:bg-slate-600">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <NavLink
            to="/nosotros"
            className="mr-3 md:mr-9 text-neutral-800 dark:text-neutral-200"
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/legal"
            rel="nofollow"
            className="mr-3 md:mr-9 text-neutral-800 dark:text-neutral-200"
          >
            Legal
          </NavLink>
          <NavLink
            to="/privacidad"
            rel="nofollow"
            className="mr-3 md:mr-9 text-neutral-800 dark:text-neutral-200"
          >
            Privacidad
          </NavLink>
          <NavLink
            to="/cookies"
            rel="nofollow"
            className="mr-3 md:mr-9 text-neutral-800 dark:text-neutral-200"
          >
            Cookies
          </NavLink>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-slate-900 dark:text-neutral-200">
        <span>© 2024 Copyright - Codificado por:</span>
        <a
          className="text-neutral-800 dark:text-neutral-400 ml-1"
          href="https://castillowebdev.netlify.app/"
          target="_blank"
        >
          Castillo Web Dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
