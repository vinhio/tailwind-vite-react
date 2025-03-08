import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/bookmark/logo-bookmark.svg"

const HeaderComponent: React.FC = () => {
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
          <div className="hidden items-center space-x-10 uppercase text-grayish-blue md:flex">
            <a href="#features" className="tracking-widest hover:text-soft-red">Features</a>
            <a href="#download" className="tracking-widest hover:text-soft-red">Download</a>
            <a href="#faq" className="tracking-widest hover:text-soft-red">FAQ</a>

            <a href="#"
               className="px-8 py-2 text-white bg-soft-red border-2 border-soft-red rounded-lg shadow-md hover:text-soft-red hover:bg-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

HeaderComponent.displayName = "Header";

export const Header = memo(HeaderComponent);
