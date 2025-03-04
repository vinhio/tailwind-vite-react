import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/clipboard/logo.svg"

const HeroComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src={imgLogo} alt="" className="mx-auto my-16"/>
          <h3>
            A history of everything you copy
          </h3>
          <p className="paragraph-section text-2xl">
            Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
          </p>
          {/* Buttons container */}
          <div className="button-container">
            <a href="#"
               className="hero-button bg-strong-cyan">
              Download for iOS
            </a>
            <a href="#"
               className="hero-button bg-light-blue ">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

HeroComponent.displayName = "Hero";

export const Hero = memo(HeroComponent);
