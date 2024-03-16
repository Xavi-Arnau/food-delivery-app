import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Navbar = ({
  toggleCartVisibility,
  handleScrollToSection,
  refFood,
  refDownload,
}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 bg-white w-full z-10 text-black h-[80px] px-10  mx-auto flex justify-between items-center">
      <h1 className="text-xl md:text-3xl font-bold primary-color ml-4">
        quickDeli
      </h1>
      <div className="hidden sm:flex gap-3 md:gap-6">
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-primary-color text-white shadow-2xl">
          Log In
        </button>
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-primary-color text-white shadow-2xl">
          Sign Up
        </button>
      </div>

      <a
        onClick={toggleCartVisibility}
        className="p-5 my-auto text-2xl text-orange-700"
      >
        <AiOutlineShoppingCart />
      </a>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a
            className="cursor-pointer"
            onClick={() => handleScrollToSection(refFood)}
          >
            Food
          </a>
        </li>
        <li className="p-5">
          <a
            className="cursor-pointer"
            onClick={() => handleScrollToSection(refDownload)}
          >
            Download
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden mr-6 z-20">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full top-[80px] w-full ease-in-out duration-500"
            : "fixed top-[-100%]"
        }
      >
        <ul className="p-8 text-2xl w-full bg-primary-color rounded-lg text-white">
          <li className="p-5">
            <a className="#food">Food</a>
          </li>
          <li className="p-5">
            <a className="#download">Download</a>
          </li>
          <div className="flex gap-4">
            <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
              Log In
            </button>
            <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
