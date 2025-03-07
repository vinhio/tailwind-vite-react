import React, {memo, useState} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/shortly/logo.svg";
const HeaderComponent: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Fragment>
      {/* Header section */}
      <nav className="relative container mx-auto p-6">
        {/* All Items */}
        <div className="flex items-center justify-between">
          {/* Logo/Menu container */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src={imgLogo} alt="logo"/>
            {/* Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="#"
                 className="text-grayish-violet hover:text-very-dark-violet">Features</a>
              <a href="#"
                 className="text-grayish-violet hover:text-very-dark-violet">Pricing</a>
              <a href="#"
                 className="text-grayish-violet hover:text-very-dark-violet">Resources</a>
            </div>
          </div>
          {/* Right button menu */}
          <div
            className="hidden items-center space-x-6 font-bold text-grayish-violet lg:flex">
            <div className="hover:text-very-dark-violet">Login</div>
            <a href="#"
               className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sign
              Up</a>
          </div>
          {/* Hamburger Button */}
          <button id="menu-btn"
                  onClick={toggleMenu}
                  className={"block hamburger lg:hidden focus:outline-none " + (menu ? 'open' : '')}
                  type="button">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="menu"
             className={"absolute p-6 rounded-lg bg-dark-violet left-6 right-6 top-20 z-100 " + (menu ? 'flex' : 'hidden')}
        >
          <div
            className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">Features</a>
            <a href="#" className="w-full text-center">Pricing</a>
            <a href="#" className="w-full text-center">Resources</a>
            <a href="#"
               className="w-full pt-6 border-t border-gray-400 text-center">Login</a>
            <a href="#"
               className="w-full py-3 text-center rounded-full bg-cyan">Sign
              Up</a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

HeaderComponent.displayName = "Header";

export const Header = memo(HeaderComponent);
