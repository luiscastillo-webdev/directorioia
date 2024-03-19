import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-center text-white dark:bg-slate-600">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Sobre Nosotros
          </a>
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Legal
          </a>
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Privacidad
          </a>
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Cookies
          </a>
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Sobre Nosotros
          </a>
          <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
            Sobre Nosotros
          </a>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-slate-900 dark:text-neutral-200">
        © 2024 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
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
