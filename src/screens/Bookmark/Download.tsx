import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgChrome from "@/assets/bookmark/logo-chrome.svg"
import imgFirefox from "@/assets/bookmark/logo-firefox.svg"
import imgOpera from "@/assets/bookmark/logo-opera.svg"

const DownloadComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Download section */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayish-blue">
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      {/* Download boxes */}
      <section id="download-boxes" className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* Box 1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src={imgChrome} alt=""/>
            </div>
            {/* Button */}
            <h5 className="pt-6 text-xl font-bold">
              Add to Chrome
            </h5>
            <p className="text-gray-400">
              Minimum Version 62
            </p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a href="#"
                 className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-soft-blue hover:text-soft-blue hover:bg-white border-soft-blue">Add &amp; Install
                Extension</a>
            </div>
          </div>
          {/* Box 2 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 md:mt-8">
            {/* Image */}
            <div className="flex justify-center">
              <img src={imgFirefox} alt=""/>
            </div>
            {/* Button */}
            <h5 className="pt-6 text-xl font-bold">
              Add to Firefox
            </h5>
            <p className="text-gray-400">
              Minimum Version 55
            </p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a href="#"
                 className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-soft-blue hover:text-soft-blue hover:bg-white border-soft-blue">Add &amp; Install
                Extension</a>
            </div>
          </div>
          {/* Box 2 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3 md:mt-16">
            {/* Image */}
            <div className="flex justify-center">
              <img src={imgOpera} alt=""/>
            </div>
            {/* Button */}
            <h5 className="pt-6 text-xl font-bold">
              Add to Opera
            </h5>
            <p className="text-gray-400">
              Minimum Version 46
            </p>
            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a href="#"
                 className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-soft-blue hover:text-soft-blue hover:bg-white border-soft-blue">Add &amp; Install
                Extension</a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

DownloadComponent.displayName = "Download";

export const Download = memo(DownloadComponent);
