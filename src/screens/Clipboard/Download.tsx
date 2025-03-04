import React, {memo} from 'react';
import {Fragment} from "@/components";

const DownloadComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Download section */}
      <section id="download">
        <div className="section-container mb-40 pt-16">
          <h3>
            Clipboard for iOS and MacOS
          </h3>
          <p className="paragraph-section mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.
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

DownloadComponent.displayName = "Download";

export const Download = memo(DownloadComponent);
