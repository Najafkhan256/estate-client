import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-slate-100">
      <div className="container mx-auto flex sm:flex-wrap justify-between px-5 py-4 flex-col lg:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img src={Logo} alt="NZ estate logo" height={50} width={50} />
          <span className="text-xl">NZ Estate</span>
        </Link>
        <div className="w-auto">
          <div className="">
            <form>
              <div className="relative flex items-center bg-white rounded-md border border-gray-400 px-4">
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Search..."
                  className="w-full bg-transparent text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out"
                />
                <button className="">
                  <IoIosSearch size={30} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 items-center text-base justify-center mt-3 md:mt-0">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>

          <Link to="/sign-up" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
