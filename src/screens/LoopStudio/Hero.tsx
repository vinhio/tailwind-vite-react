import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgLogo from "@/assets/loopstudios/logo.svg";

const HeroComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <section id="hero">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Menu/Logo container */}
          <nav className="flex items-center justify-between font-fold text-white">
            {/* Logo */}
            <img src={imgLogo} alt="Logo"/>
            {/* Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#" className="">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#" className="">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* TODO Hamburger Button */}
          </nav>
          {/* TODO Mobile Menu */}
          {/* Description */}
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl font-light">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
    </Fragment>
  );
};

HeroComponent.displayName = "Hero";

export const Hero = memo(HeroComponent);
