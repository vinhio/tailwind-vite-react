import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgComputer from "@/assets/clipboard/image-computer.png";

const FeatureComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Feature section */}
      <section id="feature">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img src={imgComputer} alt="feature image" className="md:absolute top-0 right-[50%]" />
            </div>
            {/* Items container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* Item 1 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-dark-grayish-blue">Quick Search</h5>
                <p className="max-w text-grayish-blue">
                  Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>
              {/* Item 2 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-dark-grayish-blue">iCloud Sync</h5>
                <p className="max-w text-grayish-blue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* Item 3 */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-dark-grayish-blue">Completely History</h5>
                <p className="max-w text-grayish-blue">
                  Retrieve any snippets from the first moment you started using the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

FeatureComponent.displayName = "Clipboard";

export const Feature = memo(FeatureComponent);
