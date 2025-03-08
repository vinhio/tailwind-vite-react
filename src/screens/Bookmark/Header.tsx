import React, {memo, useState} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/bookmark/logo-bookmark.svg"

const HeaderComponent: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Fragment>
      {/* Header section */}
      <nav className="container relative mx-auto p-6">
        {/* Flex container for nav items*/}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* Logo */}
          <div className="z-30">
            <img src={imgLogo} alt=""/>
          </div>
          {/* Menu Items */}
          <div
            className="hidden items-center space-x-10 uppercase text-grayish-blue md:flex">
            <a href="#features"
               className="tracking-widest hover:text-soft-red">Features</a>
            <a href="#download"
               className="tracking-widest hover:text-soft-red">Download</a>
            <a href="#faq"
               className="tracking-widest hover:text-soft-red">FAQ</a>

            <a href="#"
               className="px-8 py-2 text-white bg-soft-red border-2 border-soft-red rounded-lg shadow-md hover:text-soft-red hover:bg-white">
              Login
            </a>
          </div>
          {/* Hamburger button */}
          <button id="menu-btn"
                  onClick={toggleMenu}
                  className={"z-30 block md:hidden focus:outline-none hamburger " + (menu ? 'open' : '')}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div id="menu"
             className={"fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-very-dark-blue " + (menu ? '' : 'hidden')}
          >
          <div className="w-full py-3 text-center">
            <a href="#features"
               className="block hover:text-soft-red">Features</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#download"
               className="block hover:text-soft-red">Download</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#faq" className="block hover:text-soft-red">FAQ</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-soft-red">Login</a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

HeaderComponent.displayName = "Header";

export const Header = memo(HeaderComponent);
