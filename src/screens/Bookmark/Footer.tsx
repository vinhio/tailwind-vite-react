import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/bookmark/logo-bookmark-footer.svg";
import imgFacebook from "@/assets/bookmark/icon-facebook.svg";
import imgTwitter from "@/assets/bookmark/icon-twitter.svg";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Footer section */}
      <footer className="py-16 bg-very-dark-blue">
        <div
          className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          <div
            className="flex flex-col items-center justify-between space-y-8 text-gray-400 text-lg md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <img src={imgLogo} alt="" className="mb-10 md:mb-1"/>

            <a href="#features" className="uppercase hover:text-soft-red">Features</a>
            <a href="#download" className="uppercase hover:text-soft-red">Download</a>
            <a href="#faq" className="uppercase hover:text-soft-red">FAQ</a>
          </div>

          <div className="flex space-x-10">
            <a href="#">
              <img src={imgFacebook} alt="" className="h-6 ficon"/>
            </a>
            <a href="#">
              <img src={imgTwitter} alt="" className="h-6 ficon"/>
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
