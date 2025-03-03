import React, {memo} from 'react';
import {Fragment} from "@/components";
import "./clipboard.css";
import imgLogo from "@/assets/clipboard/logo.svg"

const HeroComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <section id="hero">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <img src={imgLogo} alt="" className="mx-auto my-16"/>
          <h3 className="mb-8 text-4xl font-bold text-dark-grayish-blue md:text-5xl">
            A history of everything you copy
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayish-blue">
            Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
          </p>
          {/* Buttons container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a href="#"
               className="p-4 px-8 rounded-full shadow-lg bg-strong-cyan duration-200 hover:opacity-80">
              Download for iOS
            </a>
            <a href="#"
               className="p-4 px-8 rounded-full shadow-lg bg-light-blue duration-200 hover:opacity-80">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

HeroComponent.displayName = "Clipboard";

export const Hero = memo(HeroComponent);
