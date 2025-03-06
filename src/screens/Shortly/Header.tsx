import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/shortly/logo.svg";
const HeaderComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Header section */}
      <nav className="relative container mx-auto p-6">
        {/* All Items */}
        <div className="flex items-center justify-between">
          {/* Logo/Menu container */}
          <div className="flex items-center space-x-20">
            {/* Logo */}
            <img src={imgLogo} alt="logo" />
            {/* Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="#" className="text-grayish-violet hover:text-very-dark-violet">Features</a>
              <a href="#" className="text-grayish-violet hover:text-very-dark-violet">Pricing</a>
              <a href="#" className="text-grayish-violet hover:text-very-dark-violet">Resources</a>
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
        </div>
      </nav>
    </Fragment>
  );
};

HeaderComponent.displayName = "Header";

export const Header = memo(HeaderComponent);
