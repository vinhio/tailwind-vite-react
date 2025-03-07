import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgPhone from "@/assets/fylo/icon-phone.svg";
import imgEmail from "@/assets/fylo/icon-email.svg";
import imgFacebook from "@/assets/fylo/facebook.svg";
import imgTwitter from "@/assets/fylo/twitter.svg";
import imgInstagram from "@/assets/fylo/instagram.svg";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Footer section */}
      <footer className="bg-dark-blue2 text-white">
        <div className="container mx-auto pt-12 px-5 pb-10 flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={imgPhone} alt=""/>
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src={imgEmail} alt=""/>
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          {/* Menus */}
          <div
            className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <img src={imgFacebook} alt="" className="p-2 bg-dark-blue rounded-full ficon"/>
              </a>
            </div>
            <div>
              <a href="#">
                <img src={imgTwitter} alt="" className="p-2 bg-dark-blue rounded-full ficon"/>
              </a>
            </div>
            <div>
              <a href="#">
                <img src={imgInstagram} alt="" className="p-2 bg-dark-blue rounded-full ficon"/>
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
