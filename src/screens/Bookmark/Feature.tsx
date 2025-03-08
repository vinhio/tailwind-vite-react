import React, {memo, useState} from 'react';
import {Fragment} from "@/components";
import imgTab1 from "@/assets/bookmark/illustration-features-tab-1.svg";
import imgTab2 from "@/assets/bookmark/illustration-features-tab-2.svg";
import imgTab3 from "@/assets/bookmark/illustration-features-tab-3.svg";

const FeatureComponent: React.FC = () => {
  const [tab, setTab] = useState<string>("panel-1");

  return (
    <Fragment>
      {/* Feature section */}
      <section id="features">
        {/* Container for Image & Content */}
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayish-blue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        {/* Feature Tags */}
        <section id="tabs">
          {/* Tabs container */}
          <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
            <div className="bg-tabs"></div>
            {/* Tab Flex Container */}
            <div
              className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b border-gray-200 md:space-x-10 md:flex-row">
              {/* Tab 1 */}
              <div
                className="flex justify-center text-center cursor-pointer text-gray-600 border-b border-b-gray-200 md:border-b-0 hover:text-soft-red md:w-1/3 tab">
                <div
                  className={"py-5 " + (tab === 'panel-1' ? 'border-b-4 border-soft-red' : '')}
                  onClick={() => setTab('panel-1')}>
                  Simple Bookmarking
                </div>
              </div>
              {/* Tab 2 */}
              <div
                className="flex justify-center text-center cursor-pointer text-gray-600 border-b border-b-gray-200 md:border-b-0 hover:text-soft-red md:w-1/3 tab">
                <div
                  className={"py-5 " + (tab === 'panel-2' ? 'border-b-4 border-soft-red' : '')}
                  onClick={() => setTab('panel-2')}>
                  Speedy Searching
                </div>
              </div>
              {/* Tab 3 */}
              <div
                className="flex justify-center text-center cursor-pointer text-gray-600 border-b border-b-gray-200 md:border-b-0 hover:text-soft-red md:w-1/3 tab">
                <div
                  className={"py-5 " + (tab === 'panel-3' ? 'border-b-4 border-soft-red' : '')}
                  onClick={() => setTab('panel-3')}>
                  Easy Sharing
                </div>
              </div>
            </div>
            {/* Tag Panels */}
            <div id="panels" className="container mx-auto">
              {/* Panel 1 */}
              <div
                className={"flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 " + (tab === 'panel-1' ? '' : 'hidden')}>
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img src={imgTab1} alt=""
                       className="relative z-10"/>
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Bookmark in one click
                  </h3>
                  <p
                    className="max-w-md text-center text-grayishBlue md:text-left">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you
                    manage your favourite sites.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a href="#"
                       className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-soft-blue hover:bg-white hover:text-softBlue hover:border-soft-blue hover:border-2">More
                      Info</a>
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div
                className={"flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2 " + (tab === 'panel-2' ? '' : 'hidden')}>
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img src={imgTab2} alt=""
                       className="relative z-10"/>
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Intelligent search
                  </h3>
                  <p
                    className="max-w-md text-center text-grayishBlue md:text-left">
                    Our powerful search feature will help you find saved sites
                    in no
                    time at all. No need to trawl through all of your bookmarks.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a href="#"
                       className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-soft-blue hover:border-2">More
                      Info</a>
                  </div>
                </div>
              </div>

              {/* Panel 3 */}
              <div
                className={"flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3 " + (tab === 'panel-3' ? '' : 'hidden')}>
                {/* Panel Image */}
                <div className="flex justify-center md:w-1/2">
                  <img src={imgTab3} alt=""
                       className="relative z-10"/>
                </div>
                {/* Panel Content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                    Share your bookmarks
                  </h3>
                  <p
                    className="max-w-md text-center text-grayishBlue md:text-left">
                    Easily share your bookmarks and collections with others.
                    Create
                    a shareable a link that you can send at the click of a
                    button.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a href="#"
                       className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-soft-blue hover:bg-white hover:text-soft-blue hover:border-soft-blue hover:border-2">More
                      Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

FeatureComponent.displayName = "Feature";

export const Feature = memo(FeatureComponent);
