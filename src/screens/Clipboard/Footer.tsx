import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/clipboard/logo.svg";
import imgFacebook from "@/assets/clipboard/icon-facebook.svg";
import imgTwitter from "@/assets/clipboard/icon-twitter.svg";
import imgInstagram from "@/assets/clipboard/icon-instagram.svg";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Footer section */}
      <section id="footer" className="bg-gray-50">
        <div className="section-container flex flex-col items-center justify-between md:flex-row">
          <img src={imgLogo} alt="" className="scale-50"/>
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayish-blue">
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className="hover:text-strong-cyan">FAQs</a>
                <a href="#" className="hover:text-strong-cyan">Contact Us</a>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className="hover:text-strong-cyan">Privacy Policy</a>
                <a href="#" className="hover:text-strong-cyan">Press Kit</a>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <a href="#" className="hover:text-strong-cyan">Install Guide</a>
              </div>
            </div>
            <div className="flex justify-between w-32 py-1">
              <a href="#" className="hover:text-strong-cyan">
                <img src={imgFacebook} alt="" className="duration-200 ficon"/>
              </a>
              <a href="#" className="hover:text-strong-cyan">
                <img src={imgTwitter} alt="" className="duration-200 ficon"/>
              </a>
              <a href="#" className="hover:text-strong-cyan">
                <img src={imgInstagram} alt="" className="duration-200 ficon"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
