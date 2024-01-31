import React from "react";
import Logo from "../../assets/logo.png";
import { LuTwitter, LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={Logo} alt="NZ estate logo" height={50} width={50} />
          <span className="text-xl">NZ Estate</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {year} By —
          <a
            // href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @NZ Estate
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 hover:text-gray-900">
            <LuFacebook size={25} />
          </a>

          <a className="ml-3 text-gray-500 hover:text-gray-900">
            <LuTwitter size={25} />
          </a>
          <a className="ml-3 text-gray-500 hover:text-gray-900">
            <IoLogoInstagram size={25} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
