import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/loopstudios/logo.svg";
import imgFacebook from "@/assets/loopstudios/icon-facebook.svg";
import imgTwitter from "@/assets/loopstudios/icon-twitter.svg";
import imgPinterest from "@/assets/loopstudios/icon-pinterest.svg";
import imgInstagram from "@/assets/loopstudios/icon-instagram.svg";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Footer section */}
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div
            className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
          >
            {/* Menu & Logo Container */}
            <div
              className="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
            >
              {/* Logo */}
              <div className="h-8">
                <img src={imgLogo} alt="" className="w-44 md:ml-3"/>
              </div>
              {/* Menu */}
              <div
                className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
              >
                {/* Item 1 */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div
                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                  ></div>
                </div>
                {/* Item 2 */}
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div
                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                  ></div>
                </div>
                {/* Item 3 */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div
                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                  ></div>
                </div>
                {/* Item 4 */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div
                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                  ></div>
                </div>
                {/* Item 5 */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div
                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                  ></div>
                </div>
              </div>
            </div>

            {/* Social & Copyright Container */}
            <div
              className="flex flex-col items-start justify-between space-y-4 text-gray-500"
            >
              {/* Icons Container */}
              <div
                className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
              >
                {/* Icon 1 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={imgFacebook} alt="" className="h-6"/>
                  </a>
                </div>
                {/* Icon 2 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={imgTwitter} alt="" className="h-6"/>
                  </a>
                </div>
                {/* Icon 3 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src={imgPinterest} alt="" className="h-6"/>
                  </a>
                </div>
                {/* Icon 4*/}
                <div className="h-8 group">
                  <a href="#">
                    <img src={imgInstagram} alt="" className="h-6"/>
                  </a>
                </div>
              </div>

              {/* Copy */}
              <div className="font-bold">
                &copy; 2022 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
