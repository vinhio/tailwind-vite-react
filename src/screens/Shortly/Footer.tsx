import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/shortly/logo.svg";
import imgFacebook from "@/assets/loopstudios/icon-facebook.svg";
import imgTwitter from "@/assets/loopstudios/icon-twitter.svg";
import imgPinterest from "@/assets/loopstudios/icon-pinterest.svg";
import imgInstagram from "@/assets/loopstudios/icon-instagram.svg";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Footer section */}
      <footer className="py-16 bg-very-dark-violet">
        <div
          className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
        >
          {/* Logo */}
          <img src={imgLogo} alt=""/>

          {/* Menu */}
          <div
            className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0"
          >
            {/* Menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Features
              </div>
              <div
                className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Link
                  shortening</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Branded
                  links</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Analytics</a>
              </div>
            </div>
            {/* Menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div
                className="mb-5 font-bold text-white capitalize">Resources
              </div>
              <div
                className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Blog</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Developers</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Support</a>
              </div>
            </div>
            {/* Menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Company
              </div>
              <div
                className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">About</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Our
                  Team</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Careers</a>
                <a href="#"
                   className="capitalize text-grayish-violet hover:text-cyan">Contact</a>
              </div>
            </div>
          </div>

          {/* Social & Copyright Container */}
          <div
            className="flex space-x-6"
          >
            {/* Icon 1 */}
            <div className="h-8 group">
              <a href="#">
                <img src={imgFacebook} alt="" className="h-6 ficon"/>
              </a>
            </div>
            {/* Icon 2 */}
            <div className="h-8 group">
              <a href="#">
                <img src={imgTwitter} alt="" className="h-6 ficon"/>
              </a>
            </div>
            {/* Icon 3 */}
            <div className="h-8 group">
              <a href="#">
                <img src={imgPinterest} alt="" className="h-6 ficon"/>
              </a>
            </div>
            {/* Icon 4*/}
            <div className="h-8 group">
              <a href="#">
                <img src={imgInstagram} alt="" className="h-6 ficon"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
